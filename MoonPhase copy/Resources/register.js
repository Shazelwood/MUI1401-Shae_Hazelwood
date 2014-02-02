var currentWin = Ti.UI.currentWindow;
var holder = Ti.UI.createView({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL
});
var array = [];

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
	currentWin.array = array;
	currentWin.close();
	
	});


	
holder.add(name, user, pass, register);
currentWin.add(holder);
