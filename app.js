const express = require('express');
const path = require('path');
//init app
const app = express();
//Load view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');


//Home route
app.get('/',(req,res) => {
    res.render('pages/index');
});

//About Route
app.get('/about',(req,res) => {
    res.render('pages/about', {
        title: 'About This App',
        subtitle : 'Its sick'
    })
});


//Start server
app.listen(3000, function() {
    console.log('server started');
})