document.getElementById('switch').addEventListener('click',function(event){
	self.port.emit('menuEvent', "switch");
}, false);

document.getElementById('setting').addEventListener('click',function(event){
	self.port.emit('menuEvent', "setting");
}, false);

document.getElementById('help').addEventListener('click',function(event){
	self.port.emit('menuEvent', "help");
}, false);

document.getElementById('about').addEventListener('click',function(event){
	self.port.emit('menuEvent', "about");
}, false);