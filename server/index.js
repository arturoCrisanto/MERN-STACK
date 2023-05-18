const express= require ("express");
const app = express () ;
const mongoose = require("mongoose");
const UserModel = require ("./Models/Users");
const cors= require("cors");

app.use(express.json())
app.use(cors());

mongoose.connect(
    "mongodb+srv://arturocrisanto1:RUZELLbest2143@mern.dcvuxwn.mongodb.net/MernStack?retryWrites=true&w=majority"
    ) 

        app.get("/getUsers", (req, res) => {
            UserModel.find({})
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
        });
            app.post("/createUser", (req, res) => {
                const user = req.body;
                const newUser = new UserModel(user);
            
                newUser.save()
                .then((savedUser) => {
                    res.json(savedUser);
                })
                .catch((error) => {
                    res.json(error);
                });
            });


    app.listen (3001,()=> { 
        console.log("server listening on port 3001");
    })