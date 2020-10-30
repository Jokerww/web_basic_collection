/* 实现放大镜的效果分为3步:
1,鼠标放上去 显示遮罩层和放大层 鼠标离开它们就隐藏
2,鼠标移动遮罩层就随着鼠标动 鼠标在遮罩层的中间位置 遮罩层不能出图片框的范围
	(1),遮罩层的top和left与鼠标相对于盒子的位置有关 而非鼠标相对于页面的位置
		因此要先获得鼠标在盒子内的位置 让鼠标位于遮罩层的中心
	(2),遮罩层的范围不能超过图片框 因此在给遮罩层的位置赋值前 
		要先判断遮罩层距离图片框左边的位置(top)是否合理 
		不能让其超过图片框的范围
3,遮罩层动的时候 放大层的图片随着遮罩层 成比例的动
	(1),mask是300x300 而大图片是800x800 所以大图片移动的距离与mask移动的距离
		肯定不能相等 但要同步移动 则成比例移动
		mask移动的距离/mask的最大可移动距离 = img的移动距离/img的最大可移动距离
	(2),mask往左边移动 大图片也往左移 所以图片的left要减小 正好与mask左移的距离相反
*/

// 页面加载完成之后再运行这些程序
window.addEventListener('load',function(){
	var pre_img = document.querySelector('.pre_img');
	var mask = document.querySelector('.mask');
	var big = document.querySelector('.big');
	// 1,鼠标放上去 显示遮罩层和放大层 鼠标离开它们就隐藏
	pre_img.addEventListener('mouseover',function(){
		mask.style.display = 'block';
		big.style.display = 'block';
	});
	pre_img.addEventListener('mouseout',function(){
		mask.style.display = 'none';
		big.style.display = 'none';
	});
	
	//2,遮罩层随着鼠标移动 鼠标的移动事件限定在图片框内
	pre_img.addEventListener('mousemove',function(e){
		// 获取鼠标的在图片框里的位子 先确定图片框的父级有无定位 
		//否则图片框offsetLeft就不能得到其相对于页面左边的距离
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		// 计算mask的top 和left值 因为鼠标要在mask中间
		var maskTop = y - mask.offsetHeight/2;
		var maskLeft = x - mask.offsetWidth/2;
		// 获取图片框与mask的宽度差(高度差) 就是mask的最大移动范围
		var diff_mask = pre_img.offsetWidth - mask.offsetWidth;
		// 判断mask是否超出图片框的范围
		if(maskTop <= 0){ //太往上了 就卡住 让他为0
			maskTop = 0;
		}else if(maskTop >= diff_mask ){ //太往下了 卡住 让他为diff
			maskTop = diff_mask;
		}
		if (maskLeft <=0) { //太往左了卡住
			maskLeft = 0;
		} else if(maskLeft >= diff_mask){
			maskLeft = diff_mask;
		}
		// 然后把位置给mask 要加px单位
		mask.style.top = maskTop + 'px';
		mask.style.left = maskLeft + 'px';
		
	// 3, mask动了 big里的图片也跟着动
		var big_img = document.querySelector('.big_img');
		var diff_img = big_img.offsetHeight - big.offsetHeight;
		// 移动的比例为n
		var n = diff_img / diff_mask;
		// 得到img移动的距离
		var imgTop = maskTop*n;
		var imgLeft = maskLeft*n;
		// img的位置 直接overflow:hidden; 
		big_img.style.top = -imgTop + 'px';
		big_img.style.left = -imgLeft + 'px';
 	});
	
});