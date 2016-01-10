var buttons = require("sdk/ui/button/toggle");
var self = require("sdk/self");
require("sdk/tabs").on("ready",handleOpen);
var tabs = require("sdk/tabs");


var MonitorStatus = false;

var button = buttons.ToggleButton({
	id : "status-switch",
	label:"监视已关闭",
	icon:"./tieba_disable.png",
	onClick:handleClick
});

function handleClick(status)
{
	if(MonitorStatus == false)
	{

		button.state("window",{
		"label":"监视已开启",
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
	//button.state("tab",{		"label":"监视已开启",		"icon":"./tieba_enable.png"	});
		//handleClick();
		tab.attach({contentScriptFile:[self.data.url('jquery.js'),self.data.url('monitor.js')]
    //contentScript: "if (document.body) document.body.style.border = '5px solid red';"
  });
	}

}
