const express=require('express');
const router=express.Router();
const company=require('../Models/companyModel');
const generatetoken = require('../utils/token');

router.post('/auth',async(req,res)=>{
    try{
    const {email}=req.body;
    const findcompany=await company.findOne({email});
    if(!findcompany){
        return res.status(401).json({message:"invalid email "})
    }
    const token=generatetoken(findcompany);
    res.json({token_type:"Bearer",token:token});
    }catch(err){
        res.status(500).json({message:"server error",err})
    }
});
module.exports=router;