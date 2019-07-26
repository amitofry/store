const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const UserRouter = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/users/register', function (req, res) {
};


app.listen(port, () => console.log(`Example app listening on port ${port}!`))