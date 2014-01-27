var currentWin = Ti.UI.currentWindow;
Ti.include("json.js");



var scrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	width: Ti.UI.FILL,
	contentWidth: Ti.Platform.displayCaps.platformWidth
});
	
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "leaders");
var folderContents = gallery.getDirectoryListing();

var numberOfViews = folderContents.length;

for(var i = 0; i < numberOfViews; i++){
	var newView = Ti.UI.createView({
		backgroundColor: "white",
		width: Ti.UI.FILL,
		height: 70,
		top: 2
	});
	var statHolder = Ti.UI.createView({
		height:50,
		length: 100
	});
	var pictures = Ti.UI.createImageView({
		image: "leaders/" + folderContents[i],
		width: "auto",
		right: 240,
		//right: 5,
	});
	
	var stat = Ti.UI.createLabel({
		text: lead.Leaders[i].stat,
		height: "auto",
		length: "auto",
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		font: {fontSize: 30}
	});
	var statName = Ti.UI.createLabel({
		text: lead.Leaders[i].statname,
		height: "auto",
		length: "auto",
		top: 50,
		font: {fontSize: 16}
	});
	
	var name = Ti.UI.createLabel({	
		text: lead.Leaders[i].name,
		height: "auto",
		length: "auto",
		bottom: 50,
		font: {fontSize: 20}
	});
	
	var teamName = Ti.UI.createLabel({		
		text: lead.Leaders[i].team,
		height: "auto",
		length: "auto",
		left: 240,
		font: {fontSize: 16}
	});
	statHolder.add(stat);
	newView.add(statHolder, statName, name, teamName, pictures);
	scrollView.add(newView);
};

currentWin.add(scrollView);
