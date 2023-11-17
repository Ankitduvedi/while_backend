
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/note');

const bodyParser = require('body-parser');
const note = require('./models/note');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://ankitduvedi03:ankitduvedi03@cluster0.y58dpwq.mongodb.net/notesdb").then(function(){
    app.get("/",function(req,res){
        const response = {message: "API works this is an APP from WHILE "}
        res.json(response); 
    });
    // notes route
    const noteRouter= require('./routes/Note');
    app.use("/notes", noteRouter);
});



const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server started at port 3000");
});