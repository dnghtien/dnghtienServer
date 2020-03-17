const express = require('express');
const mongoose = require('mongoose');
const app = express();


const postRoutes = require('./routes/api_route');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('running node-api');
});

mongoose
    .connect('mongodb+srv://dnghtien:zzdr10389@cluster0-jlgxs.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen( process.env.PORT||3000, console.log('Server is running'));
    })
    .catch(err => console.log(err));