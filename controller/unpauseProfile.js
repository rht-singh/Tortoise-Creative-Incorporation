const {Users} = require('../models');

class UnpauseProfile{

    async unpauseProfile(req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const unpauseUser = await Users.findOne({ where: { user_id: id } });
                if (unpauseUser.Status === 'ACTIVE') return res.json({ is_success: false, message: "User already ACTIVE" });
                else {
                    unpauseUser.Status = 'ACTIVE';
                    await unpauseUser.save();
                    if (unpauseUser) return res.json({ is_success: true, message: "User ACTIVE now" });
                    else return res.json({ is_success: false, message: "User not found" });
                }
            }
            else return res.json({is_success:false, message:"Please provide user creadentials"});
        }
        catch (err) {
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new UnpauseProfile();