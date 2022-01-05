const {Users} = require('../models');

class DeleteProfile{

    async deleteProfile(req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const deleteUser = await Users.destroy({
                    where: {
                       user_id:id
                    }
                })
                if (deleteUser) return res.json({ is_success: true, message: "User deleted Successfully" });
                else return res.json({ is_success: false, message: "User not found" });
            }
            else return res.json({is_success:false, message:"Please provide user creadentials"});
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new DeleteProfile();