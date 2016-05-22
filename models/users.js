var user={};

user.setAll = function(usr_id, user_name, user_password){
	user.usr_id = usr_id;
	user.user_name = user_name;
	user.user_password = user_password;
};

user.insert=function(connection, user, callback){
	query = 'INSERT INTO USERS SET ?';
	values = {USR_ID: '0', USER_NAME: user.username, USER_PASS: user.password};
	console.log(query+' '+values);
	connection.query(query, values, function(err, result) {
		if (err) throw err;
		
		console.log(result);
		callback();
	});
};

user.exist = function(connection, user, callback){
	var bool = false;
	query ='SELECT * FROM USERS WHERE USER_NAME ="'+user.username+'"';
	console.log(query);
	connection.query(query, function(err, rows, fields) {
	  if (err) throw err;

	  if(rows==''){
	  	callback(true);
	  }else{
	  	callback(false);
	  }
	});
};

user.valUserPass = function(connection, user, sess, callback){
	query = 'SELECT * FROM USERS WHERE USER_NAME="'+user.username+'" AND USER_PASS="'+user.password+'"';
	console.log(query);
	connection.query(query, function(err, rows, fields){
		if (err) throw err;

		if(rows==''){
			callback(false);	
		}else{
			sess.user_id = rows[0].USR_ID;
			sess.user_name = rows[0].USER_NAME;
			sess.user_pass = rows[0].USER_PASS;
			callback(true);
		}
		
	});
}

user.desp=function(){
	//console.log('desplegando');
};

module.exports = user;