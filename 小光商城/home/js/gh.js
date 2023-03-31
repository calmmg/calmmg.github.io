// //购物车显示部分
// function shop()
// {
// 	var textshop=document.getElementById("shopping")
// 	var boxshop=document.getElementById("shoppinghide")
// 	textshop.onmouseover=function(){boxshop.style.display="block"};
// 	textshop.onmouseout=function(){boxshop.style.display="none"};
// }

//单机轮播图跳转详情页面
function jumpone()
{window.location.href='../../shoppingdetail/page/小光p50one.html';}
function jumptwo()
{window.location.href='../../shoppingdetail/page/光幻k7.html';}
function jumpthree()
{window.location.href='../../shoppingdetail/page/光幻k7four.html';}
function jumpfour()
{window.location.href='../../shoppingdetail/page/星光watchECG.html';}
function jumpfive()
{window.location.href='../../shoppingdetail/page/光幻k7two.html';}
function jumpsix()
{window.location.href='../../shoppingdetail/page/光幻k7three.html';}


// 鼠标移入购物车更变颜色
function changecarcolor()
{
	var car=document.getElementById("smallcar");
	var gwc=document.getElementById("gwc");
	gwc.onmouseover=function(){car.style.color="#FF6A00"};
}
// 鼠标移走购物车更变颜色
function rechangecarcolor()
{
	var car=document.getElementById("smallcar");
	var gwc=document.getElementById("gwc");
	gwc.onmouseout=function(){car.style.color="white"};
}





//鼠标移入时改变箭头颜色左
function changecolor()
{
	var z=document.getElementById("arrowleft");
	var contentone=document.getElementById("leftcolor");
	z.onmouseover=function(){contentone.style.color="white"};
}
//鼠标移还原颜色左
function recovery()
{
	var z=document.getElementById("arrowleft");
	var contentone=document.getElementById("leftcolor");
	z.onmouseout=function(){contentone.style.color="#e2e2e2"};

}
//鼠标移入改变颜色右边
function changecolorto()
{
	var k=document.getElementById("arrowright");
	var contenttwo=document.getElementById("rightcolor");
	k.onmouseover=function(){contenttwo.style.color="white"};
}
//鼠标移还原颜色右
function recoveryto()
{
	var k=document.getElementById("arrowright");
	var contenttwo=document.getElementById("rightcolor");
	k.onmouseout=function(){contenttwo.style.color="#e2e2e2"};
}
// 右边列表鼠标移入事件 显示图片
// 第一文本

function righticon()
{
	var p=document.getElementById("right-one");
	var k=document.getElementById("rightpic1");
	p.onmouseover=function(){k.style.display="block"};
	p.onmouseout=function(){k.style.display="none"};
	

	
}
// // 第二文本
function righticontwoo()
{
	var pp=document.getElementById("right-two");
	var kk=document.getElementById("rightpc2");
	pp.onmouseover=function(){kk.style.display="block"};
	pp.onmouseout=function(){kk.style.display="none"};

	
}
// // 第三张文本
function righticonthree()
{
	var pp=document.getElementById("right-three");
	var kk=document.getElementById("rightpc3");
	pp.onmouseover=function(){kk.style.display="block"};
	pp.onmouseout=function(){kk.style.display="none"};

	
}
// // 第四张文本
function righticonfour()
{
	var pp=document.getElementById("right-four");
	var kk=document.getElementById("rightpc4");
	pp.onmouseover=function(){kk.style.display="block"};
	pp.onmouseout=function(){kk.style.display="none"};

	
}
// // 第五张 文本
function righticonfive()
{
	var pp=document.getElementById("right-five");
	var kk=document.getElementById("rightpc5");
	pp.onmouseover=function(){kk.style.display="block"};
	pp.onmouseout=function(){kk.style.display="none"};

	
}
// // 第六张 文本
function righticonsix()
{
	var pp=document.getElementById("right-six");
	var kk=document.getElementById("rightpc6");
	pp.onmouseover=function(){kk.style.display="block"};
	pp.onmouseout=function(){kk.style.display="none"};

	
}


//网页自动加载部分
function allauto()
{
		//候选框中的自动更换文本功能
	 	var kk=0;//设置全局变量
	 	var txtarr=["光幻7plus","星光大师探索版","小光FindX14","家用冰箱","大屏幕彩电","手机周边","今日好物推荐","榜单热销","Watch Ones","小光Fixd14s","光幻K8Pro","小光Y15","光幻P10pro","小光P50s","荣光X7Pro 至尊版","荣光Buds","小光12","小光Y20Pro尊享版"];//创建数组存放内容
	 	var input=document.getElementById("inputs");//获取控件id
	 	setInterval(xg,3000);//创建间隔调用函数
	 	function xg()
	 	{
			
	 		kk++;//过3秒变量自动加1
	 		if(kk==txtarr.length)//判断意外情况
	 		{kk=0;}//如果变量大于数组最大长度将变量重置
			input.setAttribute("placeholder",txtarr[kk]);//输出当前数组索引下的文本内容
			
	 	}
		
		//实现中间壁纸轮播
		// var img=document.getElementById("imglb");//获取中间图片id
		// var left=document.getElementById("arrowleft");//获取左边按钮id
		// var right=document.getElementById("arrowright");//获取右边按钮id
		// var imgArr=['lbpic1.png','ghlb11.jpg','ghlb2.jpg','lbpic2.png','ghlb3.jpg','ghlb44.jpg' ];//创建数组存放图片路径
		// var li=document.querySelectorAll('dd');//获取元素dd
		// var middlebox=document.getElementById("middlepic");//获取中间大图片区域
		// 	//图片动的时候 下标样式也变化
		// 	var index=0;
		// 	function change()
		// 	{
		// 		img.src='../image/'+imgArr[index];
		// 		for(let i=0;i<li.length;i++)
		// 		{
					
		// 			li[i].className='liMovereset';
		// 		}
				
		// 		li[index].className='liMove';
				
		// 	}
		// 	//左键切换图片
		// 	left.onclick=up;
		// 	function up()
		// 	{
		// 		index--;//将图片切换到前一张
		// 		if(index<0)
		// 		{
		// 			index=imgArr.length-1;
		// 		}
		// 		change();
		// 	}
		// 	//右键切换图片
		// 	right.onclick=next;
		// 	function next()
		// 	{
		// 		index++;//将图片切换到后一张
		// 		if(index>=4)
		// 		{
		// 			index=0;
		// 		}
		// 		change();
		// 	}
		// 	//定义自动切换 定时器跳转
		// 	var timer=setInterval(nextimg,3000);
		// 	function nextimg()
		// 	{
		// 		index++;
		// 		if(index==imgArr.length)
		// 		{
		// 			index=0;
		// 		}
		// 		change();
		// 	}
		// 	//给li添加鼠标移入事件
		// 	for(let i=0;i<li.length;i++)
		// 	{
		// 		li[i].id=i;
		// 		li[i].onmouseover=function()
		// 		{
		// 			index=this.id;
		// 			change();
		// 		}
		// 	}
		// 	//鼠标移入暂停轮播图片
		// 	middlebox.onmouseover=function()
		// 	{
		// 		clearTimeout(timer);//暂停调用函数
		// 		left.style.display="block";
		// 		right.style.display="block";
		// 	}
		// 	//鼠标移走继续轮播图片
		// 	middlebox.onmouseout=function()
		// 	{
		// 		timer=setInterval(nextimg,3000);
		// 		left.style.display="none";
		// 		right.style.display="none";
		// 	}
			
		
	 
}
//新轮播图
//定时调用
var timerk=setInterval(qh,4000);
function qh()
{
	//class=show 向下传递
	//获取正在显示的图片show
	var imgshow = document.querySelector(".imgbox>img.show");
	var left=document.getElementById("arrowleft");//获取左边按钮id
	var right=document.getElementById("arrowright");//获取右边按钮id
	var imgbox=document.getElementById("imgbox");//获取中间图片盒子
	var btn = document.getElementById("btn");//获取两个按钮
	var top = document.getElementById('top');//获取顶部区域
	var banner=document.getElementById("banner")//获取banner区域
	var lishow = document.querySelector(".btnlist>li.showli");//获取当前li的显示
	//判断是否是最后一张图片
	//如果有值 true 说明不是最后一张
	if(imgshow.nextElementSibling)
	{//向下传递 给正在显示图片的下一个对象 添加class = show
		imgshow.nextElementSibling.className='show';
		lishow.nextElementSibling.className='showli';
	}
	else//null flase 最后一张
	{//第一张图片添加class=show
		document.getElementById('imgbox').firstElementChild.className='show';
		document.getElementById('btnlist').firstElementChild.className='showli';
	}
	//清空原来图片的class=show
	imgshow.className='';
	lishow.className='';
	//左右箭头单击事件
	left.onclick=back;
	right.onclick=next;

	//鼠标移入 显示左右按钮
	banner.onmouseover=function ()
	{btn.style.display="block";}
	//鼠标移走 隐藏左右按钮
	banner.onmouseout=function ()
	{btn.style.display="none";}
	//鼠标移入 暂停轮播图片
	imgbox.onmouseover=function ()
	{clearInterval(timerk);}
	//鼠标移出 继续轮播图片
	imgbox.onmouseout=function ()
	{timerk=setInterval(qh,4000);}
}
//左边箭头 调用back 切换上一张图片
function back()
{
	//先暂停定时器
	clearInterval(timerk);
	//切换上一张图片
	var imgshow = document.querySelector(".imgbox>img.show");//获取当前class位置
	var lishow = document.querySelector(".btnlist>li.showli");//获取当前li的显示
	if(imgshow.previousElementSibling)//判断上一张图片是否为null 不为null值则为true
	{
		lishow.previousElementSibling.className='showli';//上一个li赋值class
		imgshow.previousElementSibling.className='show';
	}
	else//值为null
	{
		//切换最后一张图片
		document.getElementById('imgbox').lastElementChild.className='show';
		//切换最后一个li
		document.getElementById('btnlist').lastElementChild.className='showli';

	}
	//清空原来的class
	imgshow.className='';
	lishow.className='';
	//恢复定时器
	timerk=setInterval(qh,4000);
}

//右边箭头 调用next 切换下一张图片
function next()
{
	//先暂停定时器
	clearInterval(timerk);
	//切换下一张图片
	var imgshow = document.querySelector(".imgbox>img.show")//获取当前class位置
	var lishow = document.querySelector(".btnlist>li.showli");//获取当前li的显示
	if(imgshow.nextElementSibling)//值为true 有值
	{
		imgshow.nextElementSibling.className='show';
		lishow.nextElementSibling.className='showli';
	}
	else//值为null
	{
		document.getElementById('imgbox').firstElementChild.className='show';
		document.getElementById('btnlist').firstElementChild.className='showli';
	}
	//清空原来的class
	imgshow.className='';
	lishow.className='';
	//恢复定时器
	timerk=setInterval(qh,4000);
}
//指示点的移入事件
function liclick(obj)
{
	//暂停定时器
	clearInterval(timerk);
	//1.清除正在显示的指示点和图片样式
	document.querySelector(".imgbox>img.show").className='';
	document.querySelector(".btnlist>li.showli").className='';
	//2.将当前指示点高亮
	obj.className='showli';
	//3.将对应的图片显示 class=show
	//指示点 和 图片 对应关系 所有图片和指示点 集合 下标对应
	var imglist = document.querySelectorAll(".imgbox>img");
	var lilist = document.querySelectorAll(".btnlist>li");
	//遍历 lilist 判断被点击的是哪一个
	for(var i=0;i<lilist.length;i++)
	{
		if (lilist[i]==obj)
		{
			//true 说明找到obj对应的下标
			imglist[i].className='show';
			break;//退出循环
		}

	}
	//启用定时器
	timerk=setInterval(qh,4000);
}



// 移动改变卡片效果 光幻x7系列
function move_one()
{
	var card=document.getElementById('pic1');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_one()
{
	var card1=document.getElementById('pic1');
	card1.style="none";
}
function move_two()
{
	var card=document.getElementById('pic2');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_two()
{
	var card1=document.getElementById('pic2');
	card1.style="none";
}
function move_three()
{
	var card=document.getElementById('pic3');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_three()
{
	var card1=document.getElementById('pic3');
	card1.style="none";
}
function move_four()
{
	var card=document.getElementById('pic4');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_four()
{
	var card1=document.getElementById('pic4');
	card1.style="none";
}

// 移动改变卡片效果 光幻watch系列
function move_five()
{
	var card=document.getElementById('pic5');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_five()
{
	var card1=document.getElementById('pic5');
	card1.style="none";
}
function move_six()
{
	var card=document.getElementById('card3');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_six()
{
	var card1=document.getElementById('card3');
	card1.style="none";
}
function move_seven()
{
	var card=document.getElementById('card2');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_seven()
{
	var card1=document.getElementById('card2');
	card1.style="none";
}
function move_eight()
{
	var card=document.getElementById('card1');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_eight()
{
	var card1=document.getElementById('card1');
	card1.style="none";
}
// 移动改变卡片效果 光幻耳机
function move_nine()
{
	var card=document.getElementById('card4');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_nine()
{
	var card1=document.getElementById('card4');
	card1.style="none";
}
function move_ten()
{
	var card=document.getElementById('card5');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_ten()
{
	var card1=document.getElementById('card5');
	card1.style="none";
}
function move_eleven()
{
	var card=document.getElementById('card6');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_eleven()
{
	var card1=document.getElementById('card6');
	card1.style="none";
}
function move_twelve()
{
	var card=document.getElementById('card7');
	card.style="position: relative;top: -3px;cursor: pointer;box-shadow: 0px 2px 10px #d1d1c8;";
}
function remove_twelve()
{
	var card1=document.getElementById('card7');
	card1.style="none";
}