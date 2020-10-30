function moveslow1(obj, distance ,callback){
		// 先清除其他的定时器
		clearInterval(obj.timer);
		// 设置定时器
		obj.timer = setInterval(function(){
			var step = (distance - obj.offsetLeft) / 15;
			step = step<0 ? Math.floor(step) : Math.ceil(step);
			console.log(step,obj.offsetLeft,distance);
			// 不能用obj.offsetLeft>=distance 如果元素往回走(后退)的话 那么
			// distance就是个负值 那么就用永远都不会执行else里边的函数 元素就不会动
			// 所以还是要准确一点 判断目标距离与现在的距离是否相等
			if (obj.offsetLeft == distance) {
				clearInterval(obj.timer);
				// 判断有无回调函数
				if (callback) {
					callback();
				}
			} else{
				obj.style.left = obj.offsetLeft + step + 'px';
				}
		},50);
	};