//购物车显示部分
function shop()
{
	var textshop=document.getElementById("shopping")
	var boxshop=document.getElementById("shoppinghide")
	textshop.onmouseover=function(){boxshop.style.display="block"};
	textshop.onmouseout=function(){boxshop.style.display="none"};
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
		var img=document.getElementById("imglb");//获取中间图片id
		var left=document.getElementById("arrowleft");//获取左边按钮id
		var right=document.getElementById("arrowright");//获取右边按钮id
		var imgArr=['twinkle-lb11.jpg','twinkle-lb22.jpg','twinkle-lb333.jpg'];//创建数组存放图片路径
		var li=document.querySelectorAll('dd');//获取元素dd
		var middlebox=document.getElementById("middlepic");//获取中间大图片区域
			//图片动的时候 下标样式也变化
			var index=0;
			function change()
			{
				img.src='image/'+imgArr[index];
				for(let i=0;i<li.length;i++)
				{
					
					li[i].className='liMovereset';
				}
				
				li[index].className='liMove';
				
			}
			//左键切换图片
			left.onclick=up;
			function up()
			{
				index--;//将图片切换到前一张
				if(index<0)
				{
					index=imgArr.length-1;
				}
				change();
			}
			//右键切换图片
			right.onclick=next;
			function next()
			{
				index++;//将图片切换到后一张
				if(index>=3)
				{
					index=0;
				}
				change();
			}
			//定义自动切换 定时器跳转
			var timer=setInterval(nextimg,3000);
			function nextimg()
			{
				index++;
				if(index==imgArr.length)
				{
					index=0;
				}
				change();
			}
			//给li添加鼠标移入事件
			for(let i=0;i<li.length;i++)
			{
				li[i].id=i;
				li[i].onmouseover=function()
				{
					index=this.id;
					change();
				}
			}
			//鼠标移入暂停轮播图片
			middlebox.onmouseover=function()
			{
				clearTimeout(timer);//暂停调用函数
				left.style.display="block";
				right.style.display="block";
			}
			//鼠标移走继续轮播图片
			middlebox.onmouseout=function()
			{
				timer=setInterval(nextimg,3000);
				left.style.display="none";
				right.style.display="none";
			}
			
		
	 
}
