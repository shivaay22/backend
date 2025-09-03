const express = require('express');
const app = express();


//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());


app.listen(3000, () =>{
    console.log("Your server is listening at : 3000");
})

// app.get('/',(req,res)  =>
// {
//     res.send("again the backend developer is back to bussiness");
// })

const obj =
{
    Name : "Land crousier",
    brand : "toyata"
}

app.get('/',(req,res) =>
{
    // const {Name,brand} = obj;
    // console.log(Name);
    // console.log(brand);

    res.json(obj);

    res.send("Car submitted succefully");
})

app.post('/api/cars',(req,res) =>
{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Succefully");
    
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comBackDatabase')
    .then(() => {
        console.log("Connection is successful");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

