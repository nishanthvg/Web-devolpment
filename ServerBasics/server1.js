const express = require ("express");

const app = express();
//get
app.get('/:id', (req,res) => {
    //req.header
    //req.query
    //req.body
    //console.log('header', req.params)//sends the parameter from the url
    res.status(404).send("not working")
    // res.send("working ")
})

app.listen(3008)