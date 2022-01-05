const router = require('express').Router();
const createProfile = require('../controller/createProfile');
const deleteProfile = require('../controller/deleteProfile');
const allPauseProfile = require('../controller/allPauseProfile');
const allProfile = require('../controller/allProfiles');
const pauseProfile = require('../controller/pauseProfile');
const unpauseProfile = require('../controller/unpauseProfile');

router.route('/create').post(createProfile.createProfile);
router.route('/delete').delete(deleteProfile.deleteProfile);
router.route('/allPauseProfile').get(allPauseProfile.allPauseProfile);
router.route('/allprofile').get(allProfile.allProfile);
router.route('/pauseProfile').patch(pauseProfile.pauseProfile);
router.route('/unpauseProfile').patch(unpauseProfile.unpauseProfile);

module.exports = router;

