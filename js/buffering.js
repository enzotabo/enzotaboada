$(document).ready(function(){
	$(window).on("load", function(){
	   $.ready.then(function(){
	   		$("body").removeClass("body_overlay");
		    $("#buffering").addClass("Scompari");
		   	$("#img_buffering").addClass("Scompari");
	   });
	});
});