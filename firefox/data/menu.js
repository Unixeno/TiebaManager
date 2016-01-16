document.getElementById('switch').addEventListener('click',function(event){
	self.port.emit('menuEvent', "switch");
}, false);

document.getElementById('setting').addEventListener('click',function(event){
	self.port.emit('menuEvent', "setting");
	alert(unsafeWindow.datas);
	var t=unsafeWindow.foo;
	t();
}, false);

document.getElementById('help').addEventListener('click',function(event){
	self.port.emit('menuEvent', "help");
alert('hello');
}, false);

document.getElementById('about').addEventListener('click',function(event){
	
	window.open('./about.html', 'newwindow', 'height=350, width=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
	//self.port.emit('menuEvent', "about");
}, false);