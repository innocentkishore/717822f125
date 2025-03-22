const mongoose=require('mongoose');
const companyModel=new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    clientID:{
        type:String,
        unique:true
    },
    clientSecret:{
        type:String,
        unique:true 
    },
    ownerName:{
        type:String,
        required:true
    },
    ownerEmail:{
        type:String,
        required:true,
        unique:true
    },
    rollNo:{
        type:String,
        required:true
    },
    accessCode:{
        type:String,
        required:true
    }

    
    
})

module.exports=mongoose.model('Company',companyModel);