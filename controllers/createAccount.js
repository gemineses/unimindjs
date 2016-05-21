var createAccount={};
var model = require('../models/models');
var user=require('../models/users');

createAccount.create = function(data, res){
	if(data.password!=data.confirmpassword){
		res.end('{"res":0, "msg":"Password confirmation doesn\'t match with password"}');
	}else{
		exist(data, function(bool){
		}, res);
	}
};

function exist(data, callback, res){
	user.exist(model.connection, data, function(bool){
		if(bool){
			created(data, res);
		}else{
			res.end('{"res":0, "msg":"User already exist"}');
		}
	});
}

function created(data, res){
	user.insert(model.connection, data, function(){
		//model.connection.end();
		res.end('{"res":1, "msg":""}');
	});
}

module.exports = createAccount;