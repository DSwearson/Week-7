
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express()
const mongoose = require('mongoose');


const {userSchema} = require("./schema/userSchema");
const User = mongoose.model('User', userSchema);


app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './build'))); //this will server reac tfiles
app.use(express.static(path.resolve(__dirname, './public'))); //this will serve imgs,css files etc
// Handle GET requests to /api route

//a function to connect t mongodb
async function main(){


    await mongoose.connect('mongodb+srv://dswearson60:GibsonGuitar33!@cluster0.xyw5p6y.mongodb.net/?retryWrites=true&w=majority')
}

main();



app.post('/api/signup', async (req,res) => {
    console.log("signup?", req.body);

    try{
        const result = await User.create({
            username: req.body.username,
            password: req.body.password
        })
        console.log("result",result)

        //res.json(result);
        res.json({
            message: "success"
        })
    
    } catch(err){
        console.log(err)
    }


});

app.post('/api/login', async (req,res) => {
    console.log("what did i get?", req.body);


    try{
        const targetUser = await User.findOne({
            username: req.body.username,
        })

        if(targetUser.password === req.body.password){
            //req.sessions.user = req.body.username;

            res.json({
                message: "success",
                user: {
                    username: targetUser.username
                }
            })

            //success login
        } else {
            res.json({
                message: "Login failed",
               
            })
        }

    
    } catch(err){
        res.json({message: err.message});
        console.log(err)
    }
   

});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


// All other GET requests not handled before will return our React app
/*
app.get('*', (req, res) => {



    res.sendFile(path.resolve(__dirname ,'./client/build', 'index.html'));
});*/

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
})