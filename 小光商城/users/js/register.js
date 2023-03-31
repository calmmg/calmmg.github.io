function repeatpwd()
{
	var user = document.getElementById("user").value;
	if (user.length==0)	
		alert("用户名不能为空")
	var password = document.getElementById("pw").value;
	var repassword = document.getElementById("repw").value;
		if (password.length!=0)
			if(password == repassword)
				alert("注册成功")
			else
				alert("两次密码不一致，注册失败，请重试");
		else if (password.length==0)
			alert("密码不能为空");
	
		
}