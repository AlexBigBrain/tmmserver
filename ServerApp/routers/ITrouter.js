const express = require('express');
const { ParolaRequest_IT } = require('../controllerdb');

const router = express.Router();

router.get('', async (req, res) => {
    console.log(req.query.word.toUpperCase());
    const result = await ParolaRequest_IT(req.query.word.toUpperCase());
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

module.exports = router;