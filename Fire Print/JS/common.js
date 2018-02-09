
$(document).ready(function() {

	var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
	if (!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	}
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	if (hasClass(elem, className)) {
		while (newClass.indexOf(" " + className + " ") >= 0 ) {
			newClass = newClass.replace( " " + className + " " , " " );
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	} else {
		elem.className += ' ' + className;
	}
}

theToggle.onclick = function() {
	toggleClass(this, 'on');
	return false;
}

$( "#toggle-close" ).on( "click", function() {
	$("#toggle").removeClass("on");
});


$("#header__slide").owlCarousel({
	navigation : true,
	navigationText : false,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
    autoPlay: true,
    stopOnHover: true,
    autoHeight: true,
    margin:0
});

$("#trigger__slide").owlCarousel({

    // Most important owl features
    items : 5,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    navigation : true,
    navigationText : false,

    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

});

$("#gallery").owlCarousel({
	navigation : true,
	navigationText : false,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true
});





$('.twentytwenty-container').imagesLoaded( function() {
	$(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});
});


var owl = $('#otziv');

owl.owlCarousel({
	navigationText : false,
	slideSpeed : 300,
    autoHeight : true,
	paginationSpeed : 400,
	singleItem:true
});

$(".next").click(function(){
	owl.trigger('owl.next');
})

$(".prev").click(function(){
	owl.trigger('owl.prev');
})

$(".tabs").lightTabs();



	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100}); 

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Плавный скролл
	$(".header-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

    
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	$('.form').validate({ 
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true
			}
		},
		errorPlacement: function(){
			return false;
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST", 
				url: "mail.php", 
				data: $(".form").serialize(), 
				success: function(html)
				{		



				} 
			}); 
			return false;
		}

	});

	 // Прокрутка до блока
	 $('.vorota-arr').on('click', function(e){
	 	$('html,body').stop().animate({ scrollTop: $('#vorota1').offset().top }, 1000);
	 	e.preventDefault();
	 });

	});

jQuery(function($){
	$(".tel").mask("(999) 999-9999");
});