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
    res.sendFile(path.join(__dirname, 'page.html'));
});

app.listen(4000, () => console.log('listening on port 4000'));