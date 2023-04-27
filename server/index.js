const express =require("express");
const morgan=require("morgan");
const cors = require('cors');
const mongoose=require("mongoose");
const recipeRoute=require("./routes/recipe")
const userRoute=require("./routes/user")
require("dotenv").config()

const app =express();
const url="mongodb+srv://marwa:marwa@cluster0.ibpggtz.mongodb.net/?retryWrites=true&w=majority";
const port=process.env.PORT|| 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/recipe",recipeRoute);
app.use("/user",userRoute);


app.use("*",(req,res,next)=>{
    res.status(404).json({"error":"NOT FOUND"})
});


mongoose.connect(url).then(() => {
    console.log('Connected to database ')
    app.listen(port,()=>{
        console.log("APP IS Running");
    })
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})