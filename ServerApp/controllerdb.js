const pool = require('./db');
const { Observable } = require('rxjs');

async function getSpecificWords(Word) {
    try {
        const [result,] = await pool.query('SELECT `specificWord` FROM `Words` WHERE `generalWord` = ?;', [Word]);
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

async function getSinonims(Word) {
    try {
        const [result,] = await pool.query('SELECT `Sinonims`.`SI_wordB_fk` as Sinonims FROM `Sinonims` WHERE `SI_wordA_fk` = ? UNION SELECT `Sinonims`.`SI_wordA_fk` FROM `Sinonims` WHERE `SI_wordB_fk` = ?;', [Word, Word]);
        return result;
    }
    catch {
        return [];
    }
}

async function getTranslationsEN(Word) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_wordEN_fk` as Translations FROM `Translations` WHERE `TR_wordIT_fk` = ?;', [Word]);
        return result;
    }
    catch {
        return [];
    }
}

async function getTranslationsIT(Word) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_wordIT_fk` as Translations FROM `Translations` WHERE `TR_wordEN_fk` = ?;', [Word]);
        return result;
    }
    catch {
        return [];
    }
}

async function ParolaRequest(GeneralWord) {
    let res = await getSpecificWords(GeneralWord);

    const check = await getSpecificWord(GeneralWord);
    if (check.length === 0) {
        InsertWord(GeneralWord, null);
    }

    const SpecificWordsArr = res;
    // Si utilizza 'Promise.all' perché 'ParoleTrovate.map()' restituisce una lista di Promises,
    // quindi per aspettare che vengano risolte tutte, bisogna utilizzare Promise.all
    return await Promise.all(SpecificWordsArr.map(async (SpecificWords) => {
        const SpecificWord = SpecificWords.specificWord;

        const specificWords = await getSpecificWord(SpecificWord);
        const Descriptions = await getDescriptions(SpecificWord);
        const resSinonims = await getSinonims(SpecificWord);
        const resTranslasionsIT = await getTranslationsIT(SpecificWord);
        const resTranslasionsEN = await getTranslationsEN(SpecificWord);

        const Sinonims = await Promise.all(resSinonims.map(async (Sinonim) => Sinonim.Sinonims));
        const TranslasionsEN = await Promise.all(resTranslasionsEN.map(async (Translation) => Translation.Translations));
        const TranslasionsIT = await Promise.all(resTranslasionsIT.map(async (Translation) => Translation.Translations));

        const Examples = [];
        await Promise.all(Descriptions.map(async (Description) => {
            const resultExample = await getExamples(Description.descriptionID);
            if (resultExample.length !== 0)
                resultExample.map((Example) => {
                    Examples.push(Example);
                });
        }));
        return {
            "Word": specificWords[0],
            "Descriptions": Descriptions,
            "Examples": Examples,
            "Sinonims": Sinonims,
            "TranslasionsIT": TranslasionsIT,
            "TranslasionsEN": TranslasionsEN
        };
    }));
}

async function InsertWord(Word, Language) {
    try {
        const result = await pool.execute('INSERT INTO `Words` (`specificWord`, `Language`) VALUES (?,?);', [Word, Language]);
        return result[0].affectedRows;
    }
    catch {
        return [];
    }
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
    InsertWord,
    ParolaRequest,
    SearchWords,
    IncreaseCounterWord
};