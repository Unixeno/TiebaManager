$(document).ready(function(){

	// if(unsafeWindow.PageData['user']['is_login']==false)
	// {
	// 	self.port.emit('login',"未登录");
	// }

	// else
	// {
		// self.port.emit('login', "已登陆！");
		getTitle();
	// }
})



function getTitle()
{
	var title;
	var grade;
	for(var i = 2; i < $("a.j_th_tit").length; i++) 
	{
		title = $("a.j_th_tit").eq(i);
		self.port.emit('title', title.text());
		if((grade = judge(title.text())) > 6)
		{
			title.css({'text-decoration': 'line-through', 'color':'black', 'background-color':'red'});
		}

		title.before("<span style='background-color:#FFFFFF; color:#5B5B5B'>得分："+grade.toFixed(2)+"||</span>");

	}
}


if (document.body) document.body.style.border = '5px solid red';




var keyWord = [
['求',		30],
['求资源',	200],
['题',		50],
['大神', 	100],
['vc6.0',	50],
['求大神',	200],
['求高手',	100],
['请大神',	100],
['帮忙',	50],
['考试',	40],
['作业',	40],
['小白',	50],
['新手',	50],
['谁来帮我',400],
['？？',	50],
['！！',	50],
['为什么',	30],
['帮我',	100],
['二级',	100],
['跪求',	500],
['在线等',	500],
['救急',	15],
['删.*帖',	20],
['不会', 30],
['2级', 100]
];

function judge(title)
{
	var grade = 0;

	for (x in keyWord)
	{
		var re=new RegExp(keyWord[x][0], "g");
		var arr = title.match(re);
		if(arr != null)
		grade = grade + arr.length * keyWord[x][1];
	}

	grade = grade / title.length;
//alert(title+'\n'+grade)
return grade;
}