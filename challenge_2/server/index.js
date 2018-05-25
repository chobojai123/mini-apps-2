const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const app = express();


app.post('/payment', function (req, res) {
  db.save(req.body)
    .then(console.log('hi'))
    .then(() => { res.status(201).send('Successfully saved') })
    .catch( (err) => { res.status(400).send(err) });
})


app.use(bodyparser.json());
app.use('/', express.static(__dirname + '/../public/dist'))

let port = 5555;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});












