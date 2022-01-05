const {Users} = require('../models');

class PauseProfile{

    async pauseProfile(req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const pauseUser = await Users.findOne({ where: { user_id: id } });
                if (pauseUser.Status === 'PAUSE') return res.json({ is_success: false, message: "User already Pause" });
                else {
                    pauseUser.Status = 'PAUSE';
                    await pauseUser.save();
                    if (pauseUser) return res.json({ is_success: true, message: "User Pause" });
                    else return res.json({ is_success: false, message: "User not found" });
                }
            }
            else return res.json({is_success:false, message:"Please provide user creadentials"});
        }
        catch (err) {
            console.error(err);
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new PauseProfile();