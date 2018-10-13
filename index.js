const mongoose=require('mongoose');
const express=require('express');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Users');

//create model for easy validation
var Users=mongoose.model('Users',{
    name:{type:String,required:true,minlenght:2,trim:true},   //trim  for avoiding trailing and preeeding space
    age:{type:Number,required:true}
});

//passing value to model

var users= new Users(
    {name:"ASD",age:26});




users.save().then( (data)=> {
    console.log('Sucessfuly saved',data);
    
}, (e)=>{
    console.log('Error',e);
    
});