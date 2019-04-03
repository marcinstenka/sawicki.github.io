$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
	var scene1 = new ScrollMagic.Scene({triggerElement: "#stage1", duration: $("#stage1").height()}).setClassToggle(".sm1" , "scrollmagic").addTo(controller);
	
	var scene2 = new ScrollMagic.Scene({triggerElement: "#stage2", duration: $("#stage2").height()}).setClassToggle(".sm2" , "scrollmagic").addTo(controller);
	
	var scene3 = new ScrollMagic.Scene({triggerElement: "#stage3", duration: $("#stage3").height()}).setClassToggle(".sm3" , "scrollmagic").addTo(controller);
	
	var scene4 = new ScrollMagic.Scene({triggerElement: "#stage4", duration: $("#stage4").height()}).setClassToggle(".sm4" , "scrollmagic").addTo(controller);
	
	var scene5 = new ScrollMagic.Scene({triggerElement: "#stage5", duration: $("#stage5").height()}).setClassToggle(".sm5" , "scrollmagic").addTo(controller);
	
	
	
	
	
});