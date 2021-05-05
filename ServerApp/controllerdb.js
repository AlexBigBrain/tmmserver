const pool = require('./db');
const { Observable } = require('rxjs');

async function getGeneralWord(Word) {
    try {
        const [result,] = await pool.query('SELECT `generalWord` FROM `Words` WHERE `specificWord` = ?;', [Word]);
        return result;
    }
    catch {
        return [];
    }
}

async function getSpecificWord(Word) {
    try {
        const [result,] = await pool.query('SELECT * FROM `Words` WHERE `specificWord` = ?;', [Word]);
        return result;
    }
    catch {
        return [];
    }
}

async function getDescriptions(Word) {
    try {
        const [result,] = await pool.query('SELECT * FROM `Descriptions` where `specificWord` = ? ORDER BY `descriptionID`;', [Word]);
        return result;
    }
    catch {
        return [];
    }
}
/*
async function getLingueParola(Parola) {
   try {
       const [result,] = await pool.query('SELECT `Language` FROM `Words` WHERE `specificWord` = ?;', [Parola]);
       return result;
   }
   catch {
       return [];
   }
}
*/
async function getExamples(descriptionID) {
    try {
        const [result,] = await pool.query('SELECT `Example`, `LangExample`, `descriptionID` FROM `Examples` WHERE `descriptionID` = ? ORDER BY `descriptionID`;', [descriptionID]);
        return result;
    }
    catch {
        return [];
    }
}

async function getSinonims(descriptionID) {
    try {
        const [result,] = await pool.query('SELECT `Sinonims`.`SI_descriptionID_B_fk` as Sinonims FROM `Sinonims` WHERE `SI_descriptionID_A_fk` = ? UNION SELECT `Sinonims`.`SI_descriptionID_A_fk` FROM `Sinonims` WHERE `SI_descriptionID_B_fk` = ?;', [descriptionID, descriptionID]);
        return result;
    }
    catch {
        return [];
    }
}

async function getTranslationsEN(descriptionID) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_descriptionID_EN_fk` as Translations FROM `Translations` WHERE `TR_descriptionID_IT_fk` = ?;', [descriptionID]);
        return result;
    }
    catch {
        return [];
    }
}

async function getTranslationsIT(descriptionID) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_descriptionID_IT_fk` as Translations FROM `Translations` WHERE `TR_descriptionID_EN_fk` = ?;', [descriptionID]);
        return result;
    }
    catch {
        return [];
    }
}

async function ParolaRequest(GeneralWord) {
    const GeneralWords = await getGeneralWord(GeneralWord);
    console.log('Parole trovate:');
    console.log(GeneralWords);
    console.log('Parola: ' + GeneralWord);
    // Si utilizza 'Promise.all' perché 'ParoleTrovate.map()' restituisce una lista di Promises,
    // quindi per aspettare che vengano risolte tutte, bisogna utilizzare Promise.all
    return await Promise.all(GeneralWords.map(async (GeneralWord) => {
        const specificWords = await getSpecificWord(GeneralWord.generalWord);
        const Descriptions = await getDescriptions(GeneralWord.generalWord);
        const Examples = [];
        const Sinonims = [];
        const TranslasionsIT = [];
        const TranslasionsEN = [];
        await Promise.all(Descriptions.map(async (Description) => {
            const resultExample = await getExamples(Description.descriptionID);
            const resultSinonim = await getSinonims(Description.descriptionID);
            const resultTraslationEN = await getTranslationsEN(Description.descriptionID);
            const resultTraslationIT = await getTranslationsIT(Description.descriptionID);

            if (resultExample.length !== 0)
                Examples.push(resultExample[0]);
            if (resultSinonim.length !== 0)
                Sinonims.push(resultSinonim[0]);
            if (resultTraslationEN.length !== 0)
                TranslasionsEN.push(resultTraslationEN[0]);
            if (resultTraslationIT.length !== 0)
                TranslasionsIT.push(resultTraslationIT[0]);
        }));
        return {
            "Word": specificWords,
            "Descriptions": Descriptions,
            "Examples": Examples,
            "Sinonims": Sinonims,
            "TranslasionsIT": TranslasionsIT,
            "TranslasionsEN": TranslasionsEN
        };
    }));
}


async function IncreaseCounterWord(Word) {
    try {
        const result = await pool.execute(`
                                        UPDATE \`Words\`
                                        SET \`RequestNumber\` = \`RequestNumber\` + 1
                                        WHERE \`specificWord\` = ?;`, [Word]);
        return result[0].changedRows;
    }
    catch {
        return [];
    }
}

async function SearchWords(Word) {
    try {
        const result = await pool.execute(`
                                        SELECT \`generalWord\` AS resWord,\`Language\` AS resLang
                                        FROM \`Words\`
                                        WHERE \`generalWord\` LIKE ? LIMIT 10`, ['%' + Word + '%']);
        return result;
    }
    catch {
        return [];
    }
}



module.exports = {
    ParolaRequest,
    SearchWords,
    IncreaseCounterWord
};