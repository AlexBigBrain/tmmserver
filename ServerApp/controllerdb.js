const pool = require('./db');
const { Observable } = require('rxjs');

async function getParole(Parola) {
    try {
        const [result,] = await pool.query('SELECT `generalWord` FROM `Words` WHERE `specificWord` = ?;', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getParolaSPE(Parola) {
    try {
        const [result,] = await pool.query('SELECT * FROM `Words` WHERE `specificWord` = ?;', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getDescrizioniIT(Parola) {
    try {
        const [result,] = await pool.query('SELECT * FROM `Descriptions` where `specificWord` = ? and `LangDesc` LIKE \'%IT%\';', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}

async function getDescrizioniEN(Parola) {
    try {
        const [result,] = await pool.query('SELECT * FROM `Descriptions` where `specificWord` = ? and `LangDesc` LIKE \'%EN%\';', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getLingueParola(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Language` FROM `Words` WHERE `specificWord` = ?;', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getEsempiIT(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Example`, `LangExample`, `idDescription` FROM `Examples` WHERE `specificWord` = ? and `LangExample` LIKE \'IT\';', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getEsempiEN(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Example`, `LangExample`, `idDescription` FROM `Examples` WHERE `specificWord` = ? and `LangExample` LIKE \'EN\';', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getSinonimi(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Sinonims`.`SI_wordB_fk` as Sinonims FROM `Sinonims` WHERE `SI_wordA_fk` = ? UNION SELECT `Sinonims`.`SI_wordA_fk` FROM `Sinonims` WHERE `SI_wordB_fk` = ?;', [Parola, Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getTraduzioniEN(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_wordEN_fk` as Translations FROM `Translations` WHERE `TR_wordIT_fk` = ?;', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}
async function getTraduzioniIT(Parola) {
    try {
        const [result,] = await pool.query('SELECT `Translations`.`TR_wordIT_fk` as Translations FROM `Translations` WHERE `TR_wordEN_fk` = ?;', [Parola]);
        return result;
    }
    catch {
        return [];
    }
}

async function ParolaRequest_IT(Parola) {
    const ParoleTrovate = await getParole(Parola);
    console.log('Parole trovate:');
    console.log(ParoleTrovate);
    console.log('Parola: ' + Parola);
    // Si utilizza 'Promise.all' perché 'ParoleTrovate.map()' restituisce una lista di Promises,
    // quindi per aspettare che vengano risolte tutte, bisogna utilizzare Promise.all
    return await Promise.all(ParoleTrovate.map(async (Parola) => {
        return {
            "Word": (await getParolaSPE(Parola.generalWord)),
            "Descriptions": (await getDescrizioniIT(Parola.generalWord)),
            "Examples": (await getEsempiIT(Parola.generalWord)),
            "Sinonims": (await getSinonimi(Parola.generalWord)),
            "Translations": (await getTraduzioniEN(Parola.generalWord))
        };
    }));
}

async function ParolaRequest_EN(Parola) {
    const ParoleTrovate = await getParole(Parola);
    console.log(ParoleTrovate);
    return await Promise.all(ParoleTrovate.map(async (Parola) => {
        return {
            "Word": (await getParolaSPE(Parola.generalWord)),
            "Descriptions": (await getDescrizioniEN(Parola.generalWord)),
            "Examples": (await getEsempiEN(Parola.generalWord)),
            "Sinonims": (await getSinonimi(Parola.generalWord)),
            "Translations": (await getTraduzioniIT(Parola.generalWord))
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
    ParolaRequest_IT,
    ParolaRequest_EN,
    SearchWords,
    IncreaseCounterWord
};