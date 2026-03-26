const jwt = require("jsonwebtoken");

const generateToken = (payload) =>{

     let key = process.env.JWT_SECRET;
     let expiresIn = process.env.JWT_Expire_Time;
    return jwt.sign(payload,key, {expiresIn});
}

const verifyToken = (token) =>{
      let key = process.env.JWT_SECRET;
    return jwt.verify(token,key);
}


module.exports={
    generateToken,
    verifyToken
}