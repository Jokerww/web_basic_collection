/* 
 轮播图动画分为5个小任务来完成:
  1,鼠标经过轮播图 左右按钮显示 离开隐藏左右按钮
  2,点击右按钮一次,图片往左走一张,以此类推左按钮
  3,图片播放的同时 下边的小圆圈跟着一起变化
  4,点击小圆圈可以播放相应的图片
  5,鼠标离开轮播图 自动播放图片
  2,鼠标经过轮播图 轮播图停止自动播放
 */
/* 重要的点:
 1,控制小圆点和点击次数的变量一定要跟着点击小圆点事件同步 不然就会混乱
 2,自动播放事件一定要先全局定义 让他播  鼠标放上去再关  鼠标离开再打开(再一次给定时函数)
	不然只在进去停止 移动打开的话 刚刷新的时候没有鼠标离开事件 他是不会自动播放的
 3,element.click();可实现element元素的自动点击功能 而不需要手动点他
 4,节流阀通过回调函数来实现 动画执行完了再执行回调函数  
   与之前定时器叠加效应不一样 叠加利用的是排他思想
 5,无缝切换实际上就是把第一张图放在最后 利用代码执行的非常快 肉眼基本无法辨识达到以假乱真的效果
   一定要先生成小圆点 再复制图片 不然就会多了一个小圆点
 6,距离一定要加'px'
 */

window.addEventListener('load',function(){
	var focus = document.querySelector('.focus');
	var arr_l = document.querySelector('.arrow_l');
	var arr_r = document.querySelector('.arrow_r');
	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('ol');
	var focus_width = focus.offsetWidth;
	var slide = 0; //控制图片滑动的位置
	var circle = 0;//控制圆圈
	//  1,鼠标经过轮播图 左右按钮显示 离开隐藏左右按钮
	focus.addEventListener('mouseenter',function(){
		arr_l.style.display = 'block';
		arr_r.style.display = 'block';
		// 鼠标经过就停止计时器
		clearInterval(timer);
		timer = null;
	});
	focus.addEventListener('mouseleave',function(){
		arr_l.style.display = 'none';
		arr_r.style.display = 'none';
		// 鼠标离开就开始计时器
		var timer = setInterval(function(){
			// 类似于自己点了右侧按钮 每个两秒点击一次 可以利用手动调佣点击事件
			// 让他自己调用点击事件 而不用我来点击 element.click()
			arr_r.click();
		},2000);
		
	});
	// 2,点击小圆圈可以播放相应的图片
	// 当然 按钮的数目要与图片的数目相等  当图片的数目变化时 按钮的数目就跟着变化
	// 则可以动态生成小圆圈的 然他与图片的数目相等
	for (var i=0;i<ul.children.length;i++) {
		var o_li = document.createElement('li');
		o_li.setAttribute('index',i);
		ol.appendChild(o_li);
		// 在生成圆圈的时候就顺便把圆圈的点击事件给添加了
		// 点击圆圈 切换到相应的图片 给圆圈加索引
		o_li.addEventListener('click',function(){
			// 缓动函数 让图片划出来
			var index = this.getAttribute('index');
			slide = index;//让滑动的图片与点击的图片同步
			circle = index; //让下边的小圆圈与点击的图片同步
			moveslow1(ul,-index*focus_width);
			// 圆圈变色 排他思想
			for (var i=0;i<ol.children.length;i++){
				ol.children[i].className = '';
			}
			this.className = 'current';
			// 点击小圆圈之后 为了使左右键与小圆圈同步 选用将index赋值给slide
			
		});
	};
	// 3,点击右侧按钮 图片往左滑 往右显示一张
	
	
		// 无缝切换:把第一张copy到最后面 当图片显示到最后一张时 
		 // 再点击就迅速跳到第一张 假装她刚刚是第一张 +1 滑到第二张
	ul.appendChild(ul.children[0].cloneNode(true));
	ol.children[0].className = 'current';
	var flag = true;//设置节流阀 true为允许播放
	arr_r.addEventListener('click',function(){
		// 为避免点击过快导致图片轮播的过快 可声明一个节流阀变量 当图片播完了 才能执行下一次点击事件
		if (flag) {
			flag = false;//关闭节流阀 播完了再打开 利用回调函数 再缓动动画里边打开
			// 如果已经到了最后一张了 就迅速调到第一张 然后再滑到第二张
			// 假装刚刚的最后一张是第一张
			if(slide == ul.children.length-1){
				ul.style.left = 0 + 'px';
				slide = 0;
			};
			slide++;
			circle++;
			moveslow1(ul,-slide*focus_width,function(){flag=true;});
			// 用slide代替circle
			/* if(slide==ol.children.length){
				
				ol.children[0].className = 'current';
			}else{
				ol.children[slide].className = 'current';
			} */
			circle = circle==ol.children.length?0:circle;
			changeCircle();
		}
	});
	
	// 左侧按钮的功能与右侧按钮正好相反
	arr_l.addEventListener('click',function(){
		if (flag) {
			flag = false;
			// 如果已经到了第一张了 就迅速跳回到最后一张 然后往回滑
			// 假装刚刚的第一张是最后一张
			if(slide == 0){
				slide = ul.children.length-1;
				// 此时他应该在最左边 距离左边是个负值
				ul.style.left = -slide*focus_width + 'px';
			};
			slide--;
			moveslow1(ul,-slide*focus_width,function(){flag = false;});
			circle--;
			// 小于零的话就说明已经点了 就跳到最后一个小圆圈的上边
			circle = circle<0 ? ol.children.length-1 : circle;
			changeCircle();
		}
	});
	
	// 给小圆圈的变化定义一个函数 直接调用就行了
	function changeCircle(){
		// 排他思想 先清除其它的类名 在给自己加类名
		for (var i=0;i<ol.children.length;i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'current';
	}
	
	// 4,自动播放
	// 自动播放 用定时器就行了 每个多久播放一次 必须得先定义 才能使用 
	// 否则如果没有鼠标离开操作的话 图片是不会自己播放的
	var timer = setInterval(function(){
		// 类似于自己点了右侧按钮 每个两秒点击一次 可以利用手动调佣点击事件
		// 让他自己调用点击事件 而不用我来点击 element.click()
		arr_r.click();
	},2000);
});
 