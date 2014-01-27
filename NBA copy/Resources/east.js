var currentWin = Ti.UI.currentWindow;
Ti.include("json.js");


var table = Titanium.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
	
});




var theSections = [];
//create TableViewRows
for(var n in eastData){
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: eastData[n].headerTitle,
		footerTitle: eastData[n].footerTitle
	});
	for ( var i = 0, j = eastData[n].rowData.length; i < j ; i++){
	var theRow = Ti.UI.createTableViewRow({
		header: eastData[n].headerTitle,
		title: eastData[n].rowData[i].name,
		record: eastData[n].rowData[i].record,
		rank: eastData[n].rowData[i].rank,
		ppg: eastData[n].rowData[i].ppg,
		apg: eastData[n].rowData[i].apg,
		rpg: eastData[n].rowData[i].rpg,
		bpg: eastData[n].rowData[i].bpg,
		scorer: eastData[n].rowData[i].scorer,
		assist: eastData[n].rowData[i].assist,
		fg: eastData[n].rowData[i].fg,
		logo: eastData[n].rowData[i].logo,
		name1: eastData[n].rowData[i].name1,
		name2: eastData[n].rowData[i].name2,
		name3: eastData[n].rowData[i].name3,
		stat1: eastData[n].rowData[i].stat1,
		stat2: eastData[n].rowData[i].stat2,
		stat3: eastData[n].rowData[i].stat3,
		hasChild: true
	});
	
	
	tableSection.add(theRow);
	};
	theSections.push(tableSection);
	
}
//source property holds the properties of the Row. 
table.addEventListener("click", function(event){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "222222",
		barColor: "black",
		layout: "horizontal",
		title: event.source.header
	});
	var logo = Ti.UI.createImageView({
		image: event.source.logo,
		height: 150,
		width: 170,
		left: 5,
		right: 5
	});
	var holder = Ti.UI.createView({
		height: 150,
		width: 140,
		layout: "vertical",
	});
	var name = Ti.UI.createLabel({
		color: "eaeaea",
		text: event.source.title,
		textAlign: "center",
		font: {fontSize: 26},
		bottom: 5
	});
	var rank = Ti.UI.createLabel({
		color: "eaeaea",
		text: event.source.rank,
		font: {fontSize: 40},
		
	});
	var record = Ti.UI.createLabel({
		color: "eaeaea",
		text: event.source.record,
		font: {fontSize: 20},
		bottom: 5
	});
	var holder2 = Ti.UI.createView({
		backgroundColor: "white",
		layout: "horizontal",
		height: 70,
		width: 320,
		// left: 10,
		// right: 10,
		top: 5
	});
	var ptsHolder = Ti.UI.createView({
		//backgroundColor: "red",
		width: 100,
		height: 150,
		layout: "vertical"	
	});
	var astHolder = Ti.UI.createView({
		//backgroundColor: "blue",
		width: 80,
		height: 150,
		layout: "vertical"	
	});
	var rebHolder = Ti.UI.createView({
		//backgroundColor: "green",
		width: 80,
		height: 150,
		layout: "vertical"	
	});
	var blkHolder = Ti.UI.createView({
		//backgroundColor: "yellow",
		width: 60,
		height: 150,
		layout: "vertical"	
	});
	var pts = Ti.UI.createLabel({
		text : "PTS"
	});
	var ast = Ti.UI.createLabel({
		text : "AST"
	});
	var reb = Ti.UI.createLabel({
		text : "REB"
	});
	var blk = Ti.UI.createLabel({
		text : "BLK"
	});
	var ppg = Ti.UI.createLabel({
		font: {fontSize: 35},
		text: event.source.ppg
	});
	var apg = Ti.UI.createLabel({
		font: {fontSize: 35},
		text: event.source.apg
	});
	var rpg = Ti.UI.createLabel({
		font: {fontSize: 35},
		text: event.source.rpg
	});
	var bpg = Ti.UI.createLabel({
		font: {fontSize: 35},
		text: event.source.bpg
	});

	var holder3 = Ti.UI.createView({
		backgroundColor: "white",
		layout: "horizontal",
		height: 150,
		width: 320,
		// left: 10,
		// right: 10,
		top: 5
	});
//Leading scorer information
	var playPic1 = Ti.UI.createImageView({
		image: event.source.scorer,
		width: 100,
		height: 100,
	});
	
	var name1 = Ti.UI.createLabel({
		text: event.source.name1
	});
	var scorerHolder = Ti.UI.createView({
		//backgroundColor: "green",
		layout: "horizontal",
		left: 5,
		width: 100,
		height: 150,
	});
	
	var stat1 = Ti.UI.createLabel({
		text: event.source.stat1
	});
//Leading assist Information
	var playPic2 = Ti.UI.createImageView({
		image: event.source.assist,
		width: 100,
		height: 100,
	});
	
	var name2 = Ti.UI.createLabel({
		text: event.source.name2
	});
	var assistHolder = Ti.UI.createView({
		//backgroundColor: "yellow",
		layout: "horizontal",
		left: 5,
		width: 100,
		height: 150,
		
	});
	var stat2 = Ti.UI.createLabel({
		text: event.source.stat2
	});
//Leading fg information
	var playPic3 = Ti.UI.createImageView({
		image: event.source.fg,
		width: 100,
		height: 100,
	});
	
	var name3 = Ti.UI.createLabel({
		text: event.source.name3
	});
	var fgHolder = Ti.UI.createView({
		//backgroundColor: "purple",
		layout: "horizontal",
		left: 5,
		width: 100,
		height: 150,
	});
	var stat3 = Ti.UI.createLabel({
		text: event.source.stat3
	});
	
	fgHolder.add(name3, playPic3, stat3);
	assistHolder.add(name2, playPic2, stat2);
	scorerHolder.add(name1, playPic1, stat1);
	holder3.add(scorerHolder, assistHolder, fgHolder);
	ptsHolder.add(ppg, pts);
	astHolder.add(apg, ast);
	rebHolder.add(rpg, reb);
	blkHolder.add(bpg, blk);
	holder.add(name, record, rank);
	holder2.add(ptsHolder, astHolder, blkHolder, rebHolder);
	detailWindow.add(logo,holder,holder2, holder3);
	currentWin.nav.openWindow(detailWindow, {animate: true});
});

table.setData(theSections);

currentWin.add(table);