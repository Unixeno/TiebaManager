var buttons = require("sdk/ui/button/toggle");

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
	button.state("window",{
		"label":"监视已开启",
		"icon":"./tieba_enable.png"
	})
	else
		button.state("window",{
			"label":"监视已关闭",
			"icon":"./tieba_disable.png"})

	MonitorStatus = !MonitorStatus;
	
}