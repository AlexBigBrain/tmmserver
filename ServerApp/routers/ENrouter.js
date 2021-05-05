const express = require('express');
const { ParolaRequest_EN } = require('../controllerdb');

const router = express.Router();

router.get('', async (req, res) => {
    const result = await ParolaRequest_EN(req.query.word.toUpperCase());
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