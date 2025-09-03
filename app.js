// const express = require('express');

import express from "express";

const app = express();
app.get('/home',(req,res) =>
{
    const user = {
        name:"Shiva",
        age:18,
        email:"Shiva@gmail.com"
    }
    res.send(user);
})
app.get("/api/v1/user/profile",(req,res) =>
{
    res.status(200).json({
        success:true,
        user:{
            name:"Shiva",
            age:22,
            con:3656
        }
    })
})

app.get('/api/v1/product/:id',(req,res) =>
{
        const{id} = req.params;
        console.log(id);

        const product= {
            id:1,
            name:"Macbook M1 pro"
        };

        res.status(200).json({
            success:true,
            product
        })
})

app.listen(3000,() =>
{
    console.log('Server listen at port 3000')
})