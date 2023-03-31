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
		
		// //实现中间壁纸轮播
		// var img=document.getElementById("imglb");//获取中间图片id
		// var left=document.getElementById("arrowleft");//获取左边按钮id
		// var right=document.getElementById("arrowright");//获取右边按钮id
		// var imgArr=['fashionlb.jpg','fourr.jpg'];//创建数组存放图片路径
		// var li=document.querySelectorAll('dd');//获取元素dd
		// var middlebox=document.getElementById("middlepic");//获取中间大图片区域
		// 	//图片动的时候 下标样式也变化
		// 	var index=0;
		// 	function change()
		// 	{
		// 		img.src='image/'+imgArr[index];
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
		// 		if(index>=2)
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
			
			
			
			
			
		// 	// 鼠标移动改变图片的样式
		// 	var img=document.getElementById('origin');//获取图片区域id
		// 	var imgarry=['15Problue1.png','15Problue3.jpg','15Problue4.png','15Problue5.png'];//创建图片数组路径
		// 	var changell=document.querySelectorAll('dd');//获取元素
		// 	var index=0;
		// 	function change()
		// 	{
		// 		img.src='../img/'+imgarry[index];
		// 		for(let i=0;i<changell.length;i++)
		// 		{
		// 			changell[i].className='imgmovenoselect';
		// 		}
		// 		changell[index].className='imgmoveselect';
		// 	}
		
		// 	for(let j=0;j<changell.length;j++)
		// 	{
		// 			changell[j].id=j;
		// 			changell[j].onmouseover=function()
		// 			{
		// 				index=this.id;
		// 				change();
		// 			}
		// 	}
		
		
		
		var img=document.getElementById('origin');
		var imgarry=['v5pic1.png','v5pic2.webp','v5pic3.webp','v5pic4.png'];
		var ysu=document.querySelectorAll('dd');
		var index=0;
		function change()
		{
			img.src='../img/'+imgarry[index];
			for(let i=0;i<ysu.length;i++)
			{
				ysu[i].className='imgmovenoselect';
			}
			ysu[index].className='imgmoveselect';
		}
		
		for(let j=0;j<ysu.length;j++)
		{
			ysu[j].id=j;
			ysu[j].onmouseover=function()
			{
				index=this.id;
				change();
			}
		}
		
		// 将边框颜色和文字颜色变为红色
		var color=document.getElementById('color1');
		color.style="border-color:red;color:red";
		
		
	 
}
// 选中版本事件

function selected()
		{
			var k1=document.getElementById('edtxt1');
			var k2=document.getElementById('edtxt2');
			var k3=document.getElementById('edtxt3');
			var k4=document.getElementById('editionmax');
			var k5=document.getElementById('pricenumber1');
			var k6=document.getElementById("pricenumber2");
			var count=0;
			k1.onclick=function()
			{
				k4.innerHTML="8GB+256GB";//改变顶部标题文本
				k5.innerHTML="5699";//改变初始价格
				k6.innerHTML="5689";//改变打折后的价格
				count=count+1;
				if(count%2==0)
				{
					k1.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k1.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
					k3.style="border-color:none;color:none";
				}
			}
		}
function selecteds()
		{
			var k1=document.getElementById('edtxt1');
			var k2=document.getElementById('edtxt2');
			var k3=document.getElementById('edtxt3');
			var k4=document.getElementById('editionmax');
			var k5=document.getElementById('pricenumber1');
			var k6=document.getElementById("pricenumber2");
			var count=0;
			k2.onclick=function(){
				k5.innerHTML="6099";//改变初始价格
				k4.innerHTML="12GB+512GB";//改变顶部标题文本
				k6.innerHTML="6089";//改变打折后的价格
				count=count+1;
				if(count%2==0)
				{
					k2.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k2.style="border-color:red;color:red";
					k1.style="border-color:none;color:none";
					k3.style="border-color:none;color:none";
				}
			}
		}
function selectedse()
		{
			var k1=document.getElementById('edtxt1');
			var k2=document.getElementById('edtxt2');
			var k3=document.getElementById('edtxt3');
			var k4=document.getElementById('editionmax');
			var k5=document.getElementById('pricenumber1');
			var k6=document.getElementById("pricenumber2");
			var count=0;
			k3.onclick=function(){
				k4.innerHTML="12GB+256GB";//改变顶部标题文本
				k5.innerHTML="5899";//改变初始价格
				k6.innerHTML="5989";//改变打折后的价格
				count=count+1;
				if(count%2==0)
				{
					k3.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k3.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
					k1.style="border-color:none;color:none";
				}
			}
		}
		
// 选中颜色事件

function selectcolor()
		{
			var k1=document.getElementById('color1');
			var k2=document.getElementById('color2');
			var k3=document.getElementById('color3');
			var k4=document.getElementById('colormax');//获取顶部标题文本
			var k5=document.getElementById('originone');//获底部第一张图片id
			var k6=document.getElementById('origintwo');//获底部第二张图片id
			var k7=document.getElementById('originthree');//获底部第三张图片id
			var k8=document.getElementById('originfour');//获底部第四张图片id
			var count=0;
			k1.onclick=function()
			{
				// k4.innerHTML="回蓝";
				// k5.src='../img/15Problue1.png';//改变图片
				// k6.src='../img/15Problue3.jpg';
				// k7.src='../img/15Problue4.png';
				// k8.src='../img/15Problue5.png';
				count=count+1;
				if(count%2==0)
				{
					k1.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k1.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
					k3.style="border-color:none;color:none";
				}
			}
			
		}
function selectcolors()
		{
			var k1=document.getElementById('color1');//获取回蓝的id
			var k2=document.getElementById('color2');//获取雅黑的id
			var k3=document.getElementById('color3');//获取青装的id
			var k4=document.getElementById('colormax');//获取最顶部标题文字
			var k5=document.getElementById('originone');//获底部第一张图片id
			var k6=document.getElementById('origintwo');//获底部第二张图片id
			var k7=document.getElementById('originthree');//获底部第三张图片id
			var k8=document.getElementById('originfour');//获底部第四张图片id
			
			var count=0;
			k2.onclick=function()
			{
				// k4.innerHTML="雅黑";
				// k5.src='../img/15Problack1.png';//改变图片
				// k6.src='../img/15Problack2png.png';
				// k7.src='../img/15Problack3.png';
				// k8.src='../img/15Problack4.png';
				count=count+1;
				if(count%2==0)
				{
					k2.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k2.style="border-color:red;color:red";
					k1.style="border-color:none;color:none";
					k3.style="border-color:none;color:none";
				}
			}
		}
function selectcolorss()
		{
			var k1=document.getElementById('color1');
			var k2=document.getElementById('color2');
			var k3=document.getElementById('color3');
			var k4=document.getElementById('colormax');
			var k5=document.getElementById('originone');//获底部第一张图片id
			var k6=document.getElementById('origintwo');//获底部第二张图片id
			var k7=document.getElementById('originthree');//获底部第三张图片id
			var k8=document.getElementById('originfour');//获底部第四张图片id
			var count=0;
			k3.onclick=function()
			{
				// k4.innerHTML="青装";
				// k5.src='../img/15Procyan1.png';//改变图片
				// k6.src='../img/15Procyan2.png';
				// k7.src='../img/15Procyan3.png';
				// k8.src='../img/15Procyan4.png';
				count=count+1;
				if(count%2==0)
				{
					k3.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k3.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
					k1.style="border-color:none;color:none";
				}
			}
		}
function selectcolorsss()
		{
			var k1=document.getElementById('color1');
			var k2=document.getElementById('color2');
			var k3=document.getElementById('color3');
			var k4=document.getElementById('color4');
			var k4=document.getElementById('colormax');
			var k5=document.getElementById('originone');//获底部第一张图片id
			var k6=document.getElementById('origintwo');//获底部第二张图片id
			var k7=document.getElementById('originthree');//获底部第三张图片id
			var k8=document.getElementById('originfour');//获底部第四张图片id
			var count=0;
			k3.onclick=function()
			{
				// k4.innerHTML="青装";
				// k5.src='../img/15Procyan1.png';//改变图片
				// k6.src='../img/15Procyan2.png';
				// k7.src='../img/15Procyan3.png';
				// k8.src='../img/15Procyan4.png';
				count=count+1;
				if(count%2==0)
				{
					k4.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k4.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
					k1.style="border-color:none;color:none";
				}
			}
		}
		
// 选中价格事件

function selectprice()
		{
			var k1=document.getElementById('price1');
			var k2=document.getElementById('price2');
			var k3=document.getElementById('official');
			var k5=document.getElementById('pricenumber1');
			var k6=document.getElementById("pricenumber2");
			var count=0;
			k1.onclick=function()
			{
				// k5.innerHTML="2699";//改变初始价格
				// k6.innerHTML="2689";//改变打折后的价格
				k3.innerHTML="官方标配";
				count=count+1;
				if(count%2==0)
				{
					k1.style="border-color:#C7C7C7;color:black";
					
				}
				else
				{
					k1.style="border-color:red;color:red";
					k2.style="border-color:none;color:none";
				}
			}
		}
// function selectprices()
// 		{
// 			var k1=document.getElementById('price1');
// 			var k2=document.getElementById('price2');
// 			var k3=document.getElementById('official');
// 			var k5=document.getElementById('pricenumber1');
// 			var k6=document.getElementById("pricenumber2");
// 			var count=0;
// 			k2.onclick=function()
// 			{
// 				k5.innerHTML="3198";//改变初始价格
// 				k6.innerHTML="3188";//改变打折后的价格
// 				k3.innerHTML="加499元赠&nbsp;光幻&nbsp;Buds&nbsp;Pro&nbsp;降噪耳机";
// 				count=count+1;
// 				if(count%2==0)
// 				{
// 					k2.style="border-color:#C7C7C7;color:black";
					
// 				}
// 				else
// 				{
// 					k2.style="border-color:red;color:red";
// 					k1.style="border-color:none;color:none";
// 				}
// 			}
// 		}
// 加入购物车按钮
function joincar()
{
	alert("加入购物车成功");

}
