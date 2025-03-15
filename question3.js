const express = require('express');
const app = express();
const port = 3000; //assinged port as instructed


//when the link is opened in browser, automatically redirects to test which contains the message
app.get('/', (req, res) =>{
    res.redirect('/test')
});


//get the message 
app.get('/test', (req, res) =>{
    res.json({
        message: 'Express is working, Kobe Bryan A. Amaro'
    });
});

//assign port or listening to the assigned port
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});