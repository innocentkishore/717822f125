const mongoose=require('mongoose');
require('dotenv').config();
const connect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/drive",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('db connected')
    }catch(err){
        console.error('error in db')
    }
}
module.exports=connect