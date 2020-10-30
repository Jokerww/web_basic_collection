// 缓动函数
function animate(obj,target,callback){
	/* 
	obj:移动的目标 要有定位
	target:要移动的目标位置
	callback:回调函数 移动完了之后要做的事情
	 */
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		// step的数值是要更新的 如果放在计时器外边他就会一直不变
		 // 因为已经设置好了
		var step = (target-obj.offsetLeft)/20;
		step = step<0 ? Math.floor(step) : Math.ceil(step);
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer);
			callback&&callback();
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	},1);
}

