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
		var imgArr=['fashionlb.jpg','fourr.jpg'];//创建数组存放图片路径
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
				if(index>=2)
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
// 鼠标移动改变购物卡位置
function moveshadow_one()
{
	var card1=document.getElementById('card1');
	card1.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_one()
{
	var card1=document.getElementById('card1');
	card1.style="none";
}
function moveshadow_two()
{
	var card2=document.getElementById('card2');
	card2.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_two()
{
	var card2=document.getElementById('card2');
	card2.style="none";
}
function moveshadow_three()
{
	var card3=document.getElementById('card3');
	card3.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_three()
{
	var card3=document.getElementById('card3');
	card3.style="none";
}
function moveshadow_four()
{
	var card4=document.getElementById('card4');
	card4.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_four()
{
	var card4=document.getElementById('card4');
	card4.style="none";
}
function moveshadow_five()
{
	var card5=document.getElementById('card5');
	card5.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_five()
{
	var card5=document.getElementById('card5');
	card5.style="none";
}
function moveshadow_six()
{
	var card6=document.getElementById('card6');
	card6.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_six()
{
	var card6=document.getElementById('card6');
	card6.style="none";
}
function moveshadow_seven()
{
	var card7=document.getElementById('card7');
	card7.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_seven()
{
	var card7=document.getElementById('card7');
	card7.style="none";
}
function moveshadow_eight()
{
	var card8=document.getElementById('card8');
	card8.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_eight()
{
	var card8=document.getElementById('card8');
	card8.style="none";
}
function moveshadow_nine()
{
	var card9=document.getElementById('card9');
	card9.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_nine()
{
	var card9=document.getElementById('card9');
	card9.style="none";
}
function moveshadow_ten()
{
	var card10=document.getElementById('card10');
	card10.style="position: relative;top: -2px;box-shadow: 0px 2px 10px #d1d1c8;cursor: pointer";
}
function movenoshadow_ten()
{
	var card10=document.getElementById('card10');
	card10.style="none";
}