const pool = require('./db');
const { Observable } = require('rxjs');

async function getParole(Parola) {
    const [result,] = await pool.query('SELECT `generalWord` FROM `Words` WHERE `specificWord` = ?;', [Parola]);
    console.log(result);
    return result;
}
async function getParolaSPE(Parola) {
    const [result,] = await pool.query('SELECT * FROM `Words` WHERE `specificWord` = ?;', [Parola]);
    console.log('porco');
    console.log(result);
    return result;
}
async function getDescrizioniIT(Parola) {
    const [result,] = await pool.query('SELECT * FROM `Descriptions` where `specificWord` = ? and `LangDesc` LIKE \'%IT%\';', [Parola]);
    return result;
}

async function getDescrizioniEN(Parola) {
    const [result,] = await pool.query('SELECT * FROM `Descriptions` where `specificWord` = ? and `LangDesc` LIKE \'%EN%\';', [Parola]);
    return result;
}
async function getLingueParola(Parola) {
    const [result,] = await pool.query('SELECT `Language` FROM `Words` WHERE `specificWord` = ?;', [Parola]);
    return result;
}
async function getEsempiIT(Parola) {
    const [result,] = await pool.query('SELECT `Example`,`LangExample` FROM `Examples` WHERE `specificWord` = ? and `LangExample` LIKE \'IT\';', [Parola]);
    return result;
}
async function getEsempiEN(Parola) {
    const [result,] = await pool.query('SELECT `Example`,`LangExample` FROM `Examples` WHERE `specificWord` = ? and `LangExample` LIKE \'EN\';', [Parola]);
    return result;
}
async function getSinonimi(Parola) {
    const [result,] = await pool.query('SELECT `Sinonims`.`SI_wordB_fk` as Sinonims FROM `Sinonims` WHERE `SI_wordA_fk` = ? UNION SELECT `Sinonims`.`SI_wordA_fk` FROM `Sinonims` WHERE `SI_wordB_fk` = ?;', [Parola, Parola]);
    return result;
}
async function getTraduzioniEN(Parola) {
    const [result,] = await pool.query('SELECT `Translations`.`TR_wordEN_fk` as Translations FROM `Translations` WHERE `TR_wordIT_fk` = ?;', [Parola]);
    return result;
}
async function getTraduzioniIT(Parola) {
    const [result,] = await pool.query('SELECT `Translations`.`TR_wordIT_fk` as Translations FROM `Translations` WHERE `TR_wordEN_fk` = ?;', [Parola]);
    return result;
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
            "Word": (await getParolaSPE(Parola.ScritturaGenerale)),
            "Descriptions": (await getDescrizioniEN(Parola.ScritturaGenerale)),
            "Examples": (await getEsempiEN(Parola.ScritturaGenerale)),
            "Sinonims": (await getSinonimi(Parola.ScritturaGenerale)),
            "Translations": (await getTraduzioniIT(Parola.ScritturaGenerale))
        };
    }));
}

async function IncreaseCounterWord(Word) {
    const result = await pool.execute(`
                                        UPDATE \`Parole\`
                                        SET \`NumeroRichieste\` = \`NumeroRichieste\` + 1
                                        WHERE \`Parola\` = ?;`, [Word]);
    return result[0].changedRows;
}

async function SearchWords(Word) {
    const result = await pool.execute(`
                                        SELECT \`ScritturaGenerale\` AS resWord,\`Lingua\` AS resLang
                                        FROM \`Parole\`
                                        WHERE \`ScritturaGenerale\` LIKE ? LIMIT 10`, ['%' + Word + '%']);
    return result;
}



module.exports = {
    ParolaRequest_IT,
    ParolaRequest_EN,
    SearchWords,
    IncreaseCounterWord
};