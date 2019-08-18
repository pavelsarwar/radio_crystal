$( document ).ready(function() {
	
  		$("#btn_pause").hide();
		

});


 var player = new Audio();
 player.autobuffer = true;

 var channel = ['http://38.96.175.22:8648/;stream'];
 var current_channel = 0;
 var channel_img = ["images/radiotoday.png"]

$("#btn_play").click(function(){

			$("#btn_play").hide();
			$("#btn_pause").show();
			play(channel[current_channel%5]);
			console.log("calling")
});


$("#btn_pause").click(function(){

			$("#btn_pause").hide();
			$("#btn_play").show();
			
			pause();
			// console.log("calling");
});


$("#btn_next").click(function(){

		player.pause();
		$("#logo").attr("src", channel_img[(current_channel+1)%5]);
		$("#btn_play").show();
		$("#btn_pause").hide();	
		current_channel += 1;
			
});



$("#btn_prev").click(function(){

		if(current_channel != 0)
		{
			player.pause();
		$("#logo").attr("src", channel_img[(current_channel-1)%5]);
		$("#btn_play").show();
		$("#btn_pause").hide();	
		current_channel -= 1;
			
		}
		
			
});
function play(url){

	 
	  player.src = url;
	  player.volume = 1;
	  player.play();
	  console.log("playing");
}

function pause(){

	player.pause();
}
