const express = require('express');
var cors = require('cors')
const { SearchWords, IncreaseCounterWord, ParolaRequest, InsertWord } = require('./controllerdb');

const router = express.Router();

router.get('', async (req, res) => {

    message = req.query.word.toUpperCase().split(' ').map((msg) => {
        let onlyLettersArray = msg.split('').filter(char => /[A-Z]/.test(char));
        return onlyLettersArray.join('');
    }).join(' ');

    if (message === '') {
        res.json({
            "data": [],
            "status": 'Non hai passato nessuna parola'
        });
        return;
    }

    let result = await ParolaRequest(message);
    if (result.length === 0) {
        const result = await InsertWord(message, null);
        res.json({
            "data": result,
            "status": 'AddedWord'
        });
        return;
    }

    const usable = [];
    const unusable = [];
    let status = 'FoundWord';

    await Promise.all(result.map(async (res) => {
        if (res.Descriptions.length === 0) {
            await IncreaseCounterWord(res.Word.specificWord);
            unusable.push(res.Word.specificWord);
            return;
        }
        usable.push(res);
        return;
    }));
    if (usable.length === 0) {
        status = 'NotUsableWord';
    }

    res.json({
        "data": {
            "usable": usable,
            "unusable": unusable
        },
        "status": status
    });
})

router.get('/search', async (req, res) => {
    const [result,] = await SearchWords(req.query.word.toUpperCase());
    let resWordArray = [];
    let resLangArray = [];
    result.forEach((res) => {
        resWordArray.push(res.resWord);
        resLangArray.push(res.resLang);
    });
    res.json([[resWordArray, resLangArray]]);
});

module.exports = router;