var mainWin = Ti.UI.createWindow({
	backgroundColor: "black"
});
var image1 = Ti.UI.createImageView({
	image: "moon/o.jpg",
	top:20
});
var header = Ti.UI.createLabel({
	backgroundColor:"black",
	color: "white",
	text: "Moon Phase",
	font: {fontSize: 35},
});
var holder1 = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});
var array = [];

var username = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Enter Username",
  color: '#336699',
  top: 300,
  width: 250, 
  height: 60,
  left: "auto",
  right: "auto"
});

var pass = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Enter Password",
  color: '#336699',
  top: username.top + 70,
  width: 250,
  height: 60,
  left: "auto",
  right: "auto"
});

var register = Ti.UI.createLabel({
	text: "Register",
	backgroundColor: "red",
	top: pass.top + 80,
	left: 220
});

var login = Ti.UI.createLabel({
	text: "Log in",
	backgroundColor: "red",
	top: pass.top + 80,
	right: 240
});
register.addEventListener("click", function(){
	var form = Ti.UI.createWindow({
		backgroundColor: "black",
	});
	
	var holder = Ti.UI.createView({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL
});
	
	var name = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    color:'#336699',
	    top:100,
	    left:10,
	    width:300,
	    height:40,
	    hintText:'Name',
	    paddingLeft:8,
	    paddingRight:8,
	    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	    returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	    suppressReturn:false
	});
	
	var user = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    color:'#336699',
	    top:160,
	    left:10,
	    width:300,
	    height:40,
	    hintText:'username123',
	    paddingLeft:8,
	    paddingRight:8,
	    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	    returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	
	var pass = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    color:'#336699',
	    top:220,
	    left:10,
	    width:300,
	    height:40,
	    hintText:'password',
	    paddingLeft:8,
	    paddingRight:8,
	    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
	});
	
	register = Ti.UI.createButton({
		title: "Register",
		top:280
	});
	
	name.addEventListener('return',function(){
		user.focus();
		});
		
	user.addEventListener('return',function(){
		pass.focus();
		});
		
	register.addEventListener('click',function(){
		array.push(name.value, user.value, pass.value);
		form.close();
		
		});
	
	
		
	holder.add(name, user, pass, register);
	form.add(holder);
	form.open();
});
username.addEventListener("return", function(){
	pass.focus();
});


login.addEventListener("click", function(){
	if (array[1] === username.value)
	{
		if ( array[2] === pass.value)
		{
			var moonWindow = Ti.UI.createWindow({
				backgroundColor: "black",
				welcome: array[0],
				url: "moon.js"
			});
			moonWindow.open();
		}
		else
		{
			alert("Username or Password are incorect.");
		}
	}
	else
	{
		alert("Username or Password are incorect.");
	}
	
});

image1.add(header);
holder1.add(username, pass, login, register);
mainWin.add(holder1, image1);
mainWin.open();
