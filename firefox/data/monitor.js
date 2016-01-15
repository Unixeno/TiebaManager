$(document).ready(function(){
	//alert('run');
	for(var i = 0; i < $("a.j_th_tit").length; i++) {
		//alert($("a.j_th_tit").eq(i).text());
		self.port.emit('title', $("a.j_th_tit").eq(i).text());
	} 
	//alert($(a.j_th_tit).text());
})
if (document.body) document.body.style.border = '5px solid red';