var land = Ti.UI.createView({
	backgroundImage: "nbalogo.png"
});

land.addEventListener("click", function(){
	land.hide();
});
var menu = Ti.UI.createWindow({
	title: "NBA",
	backgroundColor: "#d5d5d5"
});
var mainWindow = Ti.UI.iOS.createNavigationWindow({
	backgroundColor: "grey",
	accessibilityElementsHidden: true,
	window: menu
});

var holder = Ti.UI.createView({
	backgroundColor: "grey"
});

var east = Ti.UI.createView({
	backgroundImage: "buttons/NBABackgrounds-1.jpg",
	top: 10,
	left: 5,
	right: 5,
	height: 147
});

var west = Ti.UI.createView({
	backgroundImage: "buttons/NBABackgrounds-2.jpg",
	top: east.top + 152,
	left: 5,
	right: 5,
	height: 147
});

var all = Ti.UI.createView({
	backgroundImage: "buttons/NBABackgrounds-4.jpg",
	top: west.top + 152,
	left: 5,
	width: 150,
	bottom: 5
});

var leaders = Ti.UI.createView({
	backgroundImage: "buttons/NBABackgrounds-3.jpg",
	top: west.top + 152,
	right: 5,
	width: 150,
	bottom: 5
});

east.addEventListener("click", function(){
	var win = Ti.UI.createWindow({
		backgroundColor: "blue",	
		text: "East",
		title: "East",
		url: "east.js",
		nav: mainWindow
	});
	mainWindow.openWindow(win, {animate: true});
});

west.addEventListener("click", function(){
	var win = Ti.UI.createWindow({
		backgroundColor: "blue",	
		text: "West",
		title: "West",
		url: "west.js",
		nav: mainWindow
	});
	mainWindow.openWindow(win, {animate: true});
});

all.addEventListener("click", function(){
	var win = Ti.UI.createWindow({
		backgroundColor: "blue",	
		text: "Gallery",
		title: "Gallery",
		url: "all.js",
		nav: mainWindow
	});
	mainWindow.openWindow(win, {animate: true});
});

leaders.addEventListener("click", function(){
	var win = Ti.UI.createWindow({
		backgroundColor: "blue",	
		text: "League Leaders",
		title: "League leaders",
		url: "leaders.js",
		nav: mainWindow
	});
	mainWindow.openWindow(win, {animate: true});
});

holder.add(leaders);
holder.add(all);
holder.add(west);
holder.add(east);
menu.add(holder);
mainWindow.add(land);
mainWindow.open();
