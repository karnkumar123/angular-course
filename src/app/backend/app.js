const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;


const dbURL = 'mongodb://localhost:27017/Auth';
mongoose.connect(dbURL).then(() => {
    console.log('DB connected successfully');
}).catch((err) => {
    console.log('DB connection failed->', err);
})

app.use(bodyParser.json());
app.use(cors())

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(201).json({message: 'Successfully login'});
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.status(201).json({message: 'Successfully signup'});
})


app.listen(port, () => {
    console.log('Server is up at port 3000...')
})