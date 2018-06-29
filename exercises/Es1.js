$(document).ready(function(){

	function ciao(){
		if($("#qPiccolo").hasClass("compare")){
			$("#qPiccolo").addClass("ruota2")
			$("#qGrande").addClass("ruota1")
		}
			else
				if($("#qGrande").hasClass("ruota"))
					$("#qPiccolo").addClass("compare");
				else
					$("#qGrande").addClass("ruota");
	}


	$("#qGrande").click(ciao);
	$("#qPiccolo").click(ciao);
});