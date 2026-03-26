const {verifyToken} = require("../utils/jwt");


const authVerificationMiddleware= (req, res, next) =>{
    const token  = req.header("Authorization");

    if(!token){
        return res.status(401).json({
            message: "No token, authorization denied"
        });
    }

    try{
        const decoded = verifyToken(token.replace('Bearer ',''));
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({
            message: "Token is not valid"
        });
    }
};

module.exports = authVerificationMiddleware;