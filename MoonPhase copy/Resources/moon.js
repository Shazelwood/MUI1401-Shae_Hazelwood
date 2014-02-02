var currentWin = Ti.UI.currentWindow;
var test = Ti.UI.createButton({
	title: "test"
});
alert("Choose a date from the picker to display the phase of the moon for that night.");

Ti.include("moonPhase.js");

var pickHolder = Ti.UI.createView({
	top:50,
});

var picker = Ti.UI.createPicker({
  bottom: 0,
});

var column1 = Ti.UI.createPickerColumn();
var column2 = Ti.UI.createPickerColumn();

var month = [];
month[0]=({title:'January', val: 0});
month[1]=({title:'February', val: 31});
month[2]=({title:'March', val: 59});
month[3]=({title:'April', val: 90});
month[4]=({title:'May', val: 120});
month[5]=({title:'June', val: 157});
month[6]=({title:'July', val: 181});
month[7]=({title:'August', val: 212});
month[8]=({title:'September', val: 243});
month[9]=({title:'October', val: 273});
month[10]=({title:'November', val: 304});
month[11]=({title:'December', val: 334});

var number = [];

for (var i = 1; i <= 31; i++){
	number.push((i).toString());
};

for(var i=0, ilen=number.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: number[i]
  });
  column2.addRow(row);
};

for(var i=0, ilen=month.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: month[i].title,
    value: month[i].val
  });
  column1.addRow(row);
};

var moon = [];


for ( var i = 0, b = 0; i < 365; i++, b++){
	if (b <= 30){
		moon.push(moonPic[b]);
	}else if(b > 30){
		 b = 0;
	}
	
};


picker.addEventListener('change', function(e) {
    c1 = e.selectedValue[0];
    c2 = e.selectedValue[1];
    days = picker.getSelectedRow(0).value + Number(c2);
   
    var moonPic = Ti.UI.createImageView({
    	image: moon[days],
    	backgroundColor: "red",
    	top : 20,
    });
    
    
    currentWin.add(moonPic);
});


picker.add([column1, column2]);
picker.selectionIndicator = true;
pickHolder.add(picker);



currentWin.add(pickHolder, picker);

