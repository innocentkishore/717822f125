const jwt=require('jsonwebtoken');

const generatetoken=(user)=>{
    return jwt.sign({id:user._id},"hello",{expiresIn:'1h'});
};
module.exports=generatetoken;