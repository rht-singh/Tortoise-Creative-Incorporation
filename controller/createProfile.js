const {Users} = require('../models');

class CreateProfile{

    async createProfile(req, res) {
        try {
            const { name, dob } = req.body;
            if (name && dob) {
                await Users.create({ name, DateOfBirth: dob });
                return res.json({ is_success: true, message: "User created Successfully" });
            }
            else return res.json({is_success:false, message:"Please provide name and dob"});
        }
        catch (err) {
            console.log(err);
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new CreateProfile();