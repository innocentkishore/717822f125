const Company=require('../Models/companyModel');
const {v4:uuidv4}= require('uuid');
const register=async(req,res)=>{
    try{
        const clientId=uuidv4();
        const clientSecret=uuidv4();
        const registercompany=new Company({
            companyName:req.body.companyName,
            clientID:clientId,
            clientSecret:clientSecret,
            ownerName:req.body.ownerName,
            ownerEmail:req.body.ownerEmail,
            rollNo:req.body.rollNo,
            accessCode:req.body.accessCode


        });
        const save=await registercompany.save();
        return res.status(201).json({save})
     }catch(err){
        res.status(500).json({message:"Server error",err})
     }
}

module.exports=register;