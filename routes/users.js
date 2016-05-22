var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	  //session routes
	var sess;
  	sess = req.session;
		if(sess.user_id){
			res.render('users', { title: 'Express' });
		}else{
		  	res.redirect('/index');
		}
});

module.exports = router;
