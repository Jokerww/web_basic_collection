	function moveslow1(obj, distance ,callback){
		// 先清除其他的定时器
		clearInterval(obj.timer);
		// 设置定时器
		obj.timer = setInterval(function(){
			var step = (distance - obj.offsetLeft) / 20;
			step = step<0 ? Math.floor(step) : Math.ceil(step);
			// console.log(step,obj.offsetLeft,distance);
			
			if (obj.offsetLeft == distance) {
				clearInterval(obj.timer);
				// 判断有无回调函数
				/* if (callback) {
					callback();
				} */
				// 利用逻辑逻辑短路运算
				callback&&callback();
			};
			obj.style.left = obj.offsetLeft + step + 'px';
		},15);
	};