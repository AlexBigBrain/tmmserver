const express = require('express');
const crypto = require('crypto')
var cors = require('cors')
const { SearchWords, IncreaseCounterWord, ParolaRequest, InsertWord, checkUsr } = require('./controllerdb');

function getAuthentication(req) {
    let hash = crypto.createHmac(
        'sha512',                                               // algorithm
        "6XxjUNFQ9bdTAPmNhnzm29bUwTVngHx2tUKuxmXjwlIv2fCF76"    // salt
        )
    hash.update(req.query.psw)

    const usr = req.query.user,
        psw = hash.digest('hex');
    
    return {usr, psw}
}

const router = express.Router();

router.get('', async (req, res) => {
    const result = await ParolaRequest(req.query.word.toUpperCase());
    if (result.length === 0) {
        // insert requested word
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

router.post('/add', async (req, res) => {
    const {usr, psw} = getAuthentication(req);

    if(await checkUsr(usr, psw)) {
        const result = await InsertWord(req.query.word.toUpperCase(), req.query.lang.toUpperCase());
        console.log(result);
        res.json({
            status: (result > 0)
        });
    }
    res.json({
        error: "Authentication required"
    })
});

router.patch('/patch', async (req, res) => {
    const {usr, psw} = getAuthentication();

    if(await checkUsr(usr, psw)) {
        const result = await IncreaseCounterWord(req.query.word.toUpperCase());
        res.json({
            status: (result > 0)
        });
    }
    res.json({
        error: "Authentication required"
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