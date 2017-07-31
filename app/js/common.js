$(function() {

$(".scrolldown").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	// мобильное меню
	$(".nav-mobile").on("click", function(){
		$(this).toggleClass("active");
		$("ul.menu").toggleClass("showed");

	});

	$(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 992) {
       $(".menu").removeClass("showed");
	   $(".nav-mobile").removeClass("active");
    }
  });


$("a").on("click", function(){
	setTimeout($("body").css("paddingRight", "0px"), 1500);

});
$(window).scroll(function() { return false; });





var wrapItem = document.getElementById("wrapItem");
var mas = document.getElementsByClassName("item");
var j = 0;
var y = 0;
wrapItem.onmousewheel = function(event){
	event = event || window.event;
	if(event.deltaY > 0)
{}
	console.log(event);
	y += Math.round(event.deltaY);
	mas[j].style.top = -(y*0.1) +"px";
	if (y*0.1 > 400){
		j++;
		y=0;
		
		if (j >= mas.length-1){
			wrapItem.onmousewheel = null;
		}
	}
	console.log(y);
	return false;

}






});
