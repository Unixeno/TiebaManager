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
	//console.log(menuMessage);
	if(menuMessage == "switch")
	{
		
		MonitorStatus = !MonitorStatus;
		toggleStatus();
		console.log("status changed");
	}
	else if (menuMessage == "setting") {
		console.log('open setting!');
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
  //button.state('window', {checked: false});
  toggleStatus();
}

function toggleStatus()
{
	console.log('当前状态为：'+MonitorStatus);
	if(MonitorStatus)
	{
		console.log('开启监视');
		button.state("window",{
			checked:false,
		"label":"监视已开启\n将自动监视页面！",
		"icon":"./tieba_enable.png"
		});
	}
	
	else
	{
		console.log('关闭监视...');
		button.state("window",{checked:false,
			"label":"监视已关闭",
			"icon":"./tieba_disable.png"})
	}
}




function handleOpen(tab)
{
	console.log(tab.url);
	//if(MonitorStatus)
		console.log('now MonitorStatus为'+MonitorStatus)
	if(tab.url == "http://tieba.baidu.com/f?ie=utf-8&kw=c%E8%AF%AD%E8%A8%80")
	{
		console.log('working')
		worker=tab.attach({contentScriptFile:[self.data.url('jquery.js'),self.data.url('monitor.js')]  });
		worker.port.on("title", handleMessage);
	}
}

function handleMessage(message)
{
	console.log("帖子标题："+message);
}