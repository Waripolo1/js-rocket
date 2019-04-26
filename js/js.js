var timer = null;
var countdownNumber = 10;

var changeState = function(state){
	document.body.className = 'body-state'+ state;
		clearInterval(timer);
		countdownNumber = 10;
			document.getElementById('countdown').innerHTML = countdownNumber;
					countdownNumber	= countdownNumber-1;			

	if (state==2) {
		timer = setInterval(function(){
			document.getElementById('countdown').innerHTML = countdownNumber;
					countdownNumber	= countdownNumber-1;
				if (countdownNumber <= 0) {
					changeState(3)
				};
		}, 500);
	} else if (state==3) {
			var success = setTimeout(function(){
				var random = Math.round(Math.random()*10);
				if (random >= 4) {
					changeState(4)
				}else{
					changeState(5)
				} 
		},2000);
	}
}
