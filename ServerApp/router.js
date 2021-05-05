const express = require('express');
var cors = require('cors')
const { SearchWords, IncreaseCounterWord, ParolaRequest } = require('./controllerdb');

const router = express.Router();

router.get('', async (req, res) => {
    const result = await ParolaRequest(req.query.word.toUpperCase());
    if (result.length === 0) {
        res.json({
            "data": result,
            "status": 'Not Found'
        });
        return;
    }
    res.json({
        "data": result,
        "status": 'Success'
    });
})

router.patch('/patch', async (req, res) => {
    const result = await IncreaseCounterWord(req.query.word.toUpperCase());
    res.json({
        status: (result > 0)
    })
});

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