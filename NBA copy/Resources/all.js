var currentWin = Ti.UI.currentWindow;
Ti.include("json.js");
var scrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	width: Ti.UI.FILL,
	contentWidth: Ti.Platform.displayCaps.platformWidth
});

for(var i = 0; i < gallery.pics.length; i++){
	var newView = Ti.UI.createView({
		//title: "Billionaire Gallery",
		backgroundColor: "white",
		width: 150,
		height: 150,
		top: 8,
		left: 5,
	});
	var pictures = Ti.UI.createImageView({
		image: gallery.pics[i].pic,
		text: gallery.pics[i].explanation,
		width: "auto"
	});
	
	newView.add(pictures);
	scrollView.add(newView);
	
	pictures.addEventListener("click", function(event){
		
		var holder = Ti.UI.createView({

			});
		var trans = Ti.UI.createView({
			backgroundColor: "373737",
			opacity: 0.9,
			});
		var imagelarge = Ti.UI.createImageView({
			image: event.source.image,
		});
		var explain = Ti.UI.createLabel({
			top: 300,
			width: "auto",
			backgroundColor: "eaeaea",
			text: event.source.text
		});
		holder.add(trans,imagelarge, explain);
		
		holder.addEventListener("click", function(){
			holder.hide();
				
		});
			currentWin.add(holder);
	});

};

currentWin.add(scrollView);