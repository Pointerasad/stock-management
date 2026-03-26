const User = require("../models/user");

class UserRepository{

    async findByEmail(email){
        return await User.findOne({email});
    }

    async createUser(email,password){
        const user = new User({email: email,password: password});
        return await user.save();
    }
}

module.exports = new UserRepository();