var login = {};
var model = require('../models/models');
var user = require('../models/users');

login.sessionCheck = function(req, res){
	sess = req.session;
	params = req.body;
	if(params.username=='' || params.password==''){
		res.end('{"res":0, "msg":"Empty field"}');
	}else{
		valUser(params, sess, function(bool){
			if(bool){
				console.log(sess);
				res.end('{"res":1, "msg":"OK"}');
			}else{
				res.end('{"res":0, "msg":"Invalid user"}');				
			}
			
		});
	}
}

function valUser(data, sess, callback){
	user.valUserPass(model.connection, data, sess, callback);
}

module.exports = login;