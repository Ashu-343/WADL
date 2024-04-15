const express = require('express') ;
const fs = require('fs');
const app = express() ;
const port = 3000 ;


app.get('/',(req,res)=>{
    res.sendFile('./public/home.html', {root: __dirname}) ;
}) ;

app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
})