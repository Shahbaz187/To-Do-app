const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();
app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
let newItems = [] ;
app.get("/", (req, res) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    res.render("index" , {date: day , newItems: newItems})
})
app.post('/' , (req , res) =>{
 let  newItem = req.body.newitem;
  newItems.push(newItem)
    res.redirect('/')
}) 
app.listen(3000, () => {
    console.log("sever is running");
})