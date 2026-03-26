
const userRepository = require("../repositories/userRepository.js");

const {hashPassword, comparePassword} = require("../utils/hash.js");

const {generateToken} = require("../utils/jwt.js");


class AuthService {

    async registerUser(email,password){
        const existinguser = await userRepository.findByEmail(email);
        if(existinguser){
            throw new Error("Email already is use");
        }
        const hashedPassword = await hashPassword(password);
        const user = await userRepository.createUser(email,hashedPassword);
        return user;
    }

    async loginUser(email,password){
        const user = await userRepository.findByEmail(email);
        if(!user){
            throw new Error("Invalid email or password");
        }
        const isPasswordValid = await comparePassword(password,user.password);
        if(!isPasswordValid){
           throw new Error("Invalid email or password");
        }
        const token = generateToken({id: user._id, email: user.email});
        return token;
    }

}

module.exports = new AuthService();