$(document).ready(function(){
	$("#sole").on("click",function(){
		if ($(".qterra").hasClass("ruotagiove")) {
			$(".qgiove").removeClass("ruotaterra")
			$(".qterra").removeClass("ruotagiove");
		}
		else
			if($(".qgiove").hasClass("ruotagiove")){
				$(".qgiove").removeClass("ruotagiove");
				$(".qgiove").addClass("ruotaterra");
				$(".qterra").removeClass("ruotaterra");
				$(".qterra").addClass("ruotagiove");
			}
			else
				if ($(".qterra").hasClass("ruotaterra")){
				$(".qgiove").addClass("ruotagiove");
				}
				else
					$(".qterra").addClass("ruotaterra");
	})
});