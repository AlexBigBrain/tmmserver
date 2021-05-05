const express = require('express');
const app = express();
var cors = require('cors')
const path = require('path');
const router = require('./ServerApp/router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
/*
app.use('/api', router);
*/

app.get('/', async (req, res) => {
    res.json({
        "data": "porcoddio",
        "ciao": "semplicementeCiao"
    });
});
const port = process.env.PORT || 4000
app.listen(port, () => console.log('listening on port ' + port));