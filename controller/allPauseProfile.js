const {Users} = require('../models');

class AllPauseProfile{

    async allPauseProfile(req, res) {
        try {
            const pausedProfiles = await Users.findAll({
                where: {
                    Status: 'PAUSE'
                }
            });
            if (pausedProfiles.length) return res.json({ is_success: true, message: "List of Paused profiles",totalProfiles:pausedProfiles.length, Profiles: pausedProfiles });
            else return res.json({ is_success: false, message: "Data not found"})
        }
        catch (err) {
            console.log(err)
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new AllPauseProfile();