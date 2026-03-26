const authService = require("../services/authService");

class AuthController {
    register = async (req, res) => {
          try{
             const {email , password} = req.body;

             const user = await authService.registerUser(email,password);
             res.status(201).json({
                message: "User registered successfully",
                user
             });
          }catch(error){
            res.status(400).json({
                error: error.message
            });
          }
    }

    login = async (req, res) => {
          try{
             const {email , password} = req.body;
             const token = await authService.loginUser(email,password);

             res.status(201).json({
                message: "Login successfully",
                token
             });
          }catch(error){
            res.status(400).json({
                error: error.message
            });
          }
    }
}

module.exports = new AuthController();