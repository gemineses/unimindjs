function valempty(){
	username=document.getElementById('txt_username').value;
	password=document.getElementById('txt_password').value;
	password2=document.getElementById('txt_confirm_password').value;
	if(username==''){
		document.getElementById('errormsg').innerHTML="<h6 class='textRed'>Username empty</h6>";
	}else{
		if(password==''){
			document.getElementById('errormsg').innerHTML="<h6 class='textRed'>Password empty</h6>";
		}else{
			if(password2==''){
				document.getElementById('errormsg').innerHTML="<h6 class='textRed'>Confirmation empty</h6>";
			}else{
				if(password===password2){
					$.ajax({
					   type: "POST",
					   url: 'createAccount',
					   data: $("#loginForm").serialize(),
					   success: function(response){
					       data=JSON.parse(response);
					       if(data.res==0){
				    		document.getElementById('errormsg').innerHTML="<h6 class='textRed'>"+data.msg+"</h6>";   		
					       }else{
					       		alert('Welcome!');
					      		window.location.href = "/";
					       }
					   }
					 });
				}else{
					document.getElementById('errormsg').innerHTML="<h6 class='textRed'>Password confirmation doesn't match with password</h6>";
				}
			}
		}
	}
}