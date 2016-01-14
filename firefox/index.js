var buttons = require("sdk/ui/button/toggle");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var panels = require("sdk/panel");

tabs.on("ready",handleOpen);		//处理tab开启事件



var MonitorStatus = false;



var menuPanel = panels.Panel({
	contentScriptFile:"./menu.js",
  contentURL: self.data.url("menu.html"),
  onHide: handleHide
});



var button = buttons.ToggleButton({
	id : "status-switch",
	label:"监视已关闭",
	icon:"./tieba_disable.png",
	//onClick:handleClick,
	onChange:handleChange
});


menuPanel.port.on('menuEvent',function(menuMessage){
	console.log(menuMessage);
		if(menuMessage == "switch")
	{
		toggleStatus();
	}
	else if (menuMessage == "setting") {
		console.log('open setting!');
	}
	else if (menuMessage == "about") {
		console.log('open about');
	}
	else if(menuMessage == "help"){
		console.log('open help');
	}
})

function handleChange(state)
{
if (state.checked) {
    menuPanel.show({width: 100,
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

function toggleStatus()
{
	if(MonitorStatus == false)
	{

		button.state("window",{
		"label":"监视已开启\n将自动监视页面！",
		"icon":"./tieba_enable.png"
		});
	}
	
	else
	{
		//pageMod.destroy();
		button.state("window",{
			"label":"监视已关闭",
			"icon":"./tieba_disable.png"})
	}

	MonitorStatus = !MonitorStatus;
}




function handleOpen(tab)
{
	console.log(tab.url);
	//if(MonitorStatus)
		
	if(tab.url == "http://tieba.baidu.com/")
	{
		tab.attach({contentScriptFile:[self.data.url('jquery.js'),self.data.url('monitor.js')]
  });
	}
}