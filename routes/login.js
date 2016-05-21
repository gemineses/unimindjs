var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess;
  	sess = req.session;
		if(sess.email){
			res.redirect('/index');	
		}else{
		  	res.render('login', { title: 'Express' });
		}
  
});

module.exports = router;
