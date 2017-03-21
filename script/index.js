$(document).ready(function(){
	//change icon color
	$(".icon").mouseover(function(){
		this.src = "icon/" + this.id + "_b.png";
	});
	$(".icon").mouseout(function(){
		this.src = "icon/" + this.id + "_w.png";
	});
	//

});