const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/api/items')

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect  to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB is connected...'))
    .catch(err => console.log(err));
const port = process.env.PORT || 9000;

app.use('/api/items', items)

app.listen(port,() => console.log(`Server is running on port ${port}`));


