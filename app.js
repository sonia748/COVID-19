const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const country = require('./routes/api/country');

const app = express();

app.use(bodyParser.json());

//DB config

const db = require('./config/key').mongoURI;

//Connect to Mongo

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));

//Use Route
app.use('/api/country',country)

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started ${port}`));
