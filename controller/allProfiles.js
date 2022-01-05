const {Users} = require('../models');

class AllProfile{

    async allProfile(req, res) {
        try {
            const allProfiles = await Users.findAll();
            if (allProfiles.length) return res.json({ is_success: true, message: "List of Paused profiles",totalProfiles:allProfiles.length,Profiles: allProfiles });
            else return res.json({ is_success: false, message: "Data not found"})
        }
        catch (err) {
            res.json({ is_success: false, message: err });
        }
    }

}

module.exports = new AllProfile();