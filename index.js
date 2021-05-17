const express = require('express');
const app = express();
var cors = require('cors')
const path = require('path');
const router = require('./ServerApp/router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/TMMClient')))

app.use('/api', router);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/TMMClient/index.html'));
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log('listening on port ' + port));