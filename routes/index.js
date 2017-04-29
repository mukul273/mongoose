var express = require('express');
var router = express.Router();

var standupCntrl = require('../controller/standup.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Mongoose Node Course' });// No longer needed because ow we will use index page
    return standupCntrl.list(req, res);
});

/* get new note */
router.get('/newnote', function(req, res) {
  return standupCntrl.getNote(req, res);
});

router.post ('/newnote', function(req, res) {
   return standupCntrl.create(req, res); 
});

router.post ('/', function(req, res) {
   return standupCntrl.filterByMember(req, res); 
});

module.exports = router;
