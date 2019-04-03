$(document).ready(function(){
function openMenu() {
    document.getElementById("side-menu").style.width = '250px';
    
    document.getElementById("menu_js").style.marginRight = '250px';
    document.getElementById("menu_js").style.marginLeft = '-250px';
}
function closeMenu() {
    document.getElementById("side-menu").style.width = '0';
    
    document.getElementById("menu_js").style.marginRight = '0';
    document.getElementById("menu_js").style.marginLeft = '0';
}
$(function(){
	var navbar = $('.nav');
    var icon = $('.menu-icon');
	var dropdown = $('#menudrop');
    
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('scroll');
            icon.addClass('menu-icon-scroll');
            dropdown.removeClass('dropdown');
            var oldSrc = 'img/logoC.png';
            var newSrc = 'img/logoB.png';
            $('#logo_topbar img[src="' + oldSrc + '"]').attr('src', newSrc);
            
		} else {
			navbar.addClass('scroll');
            icon.removeClass('menu-icon-scroll');
            dropdown.addClass('dropdown');
            var oldSrc = 'img/logoB.png';
            var newSrc = 'img/logoC.png';
            $('#logo_topbar img[src="' + oldSrc + '"]').attr('src', newSrc);
		}
	}).scroll();
});
});