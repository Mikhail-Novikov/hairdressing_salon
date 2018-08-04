
//прелодер (без картинки)
$(window).load(function() {
  $('#preloader').find('i').fadeOut().end().delay(400).fadeOut('slow');
});


$(".js-mask").mask("9 (999) 999-9999");

$(document).ready(function() {
// вертикальная поблочная прокрутка
	$('#fullpage').fullpage({
		anchors: ['onepage', 'twopage', 'threepage', 'fourpage'],
		css3: true,
		navigation: false,
		responsiveWidth: 768,
    responsiveHeight: 600,    
		afterLoad: function(anchorLink, index){
			switch(index) {
			  case 1:
				$('img.fp-onepage').css('display', 'inline-block').siblings().fadeOut(0);	
			    break;
			  case 2:
				$('img.fp-twopage').css('display', 'inline-block').siblings().fadeOut(0);
			    break;
			  case 3:
				$('img.fp-threepage').css('display', 'inline-block').siblings().fadeOut(0);
			    break;
			  case 4:
				$('img.fp-fourpage').css('display', 'inline-block').siblings().fadeOut(0);
			    break;
			  default:
				$('img.fp-onepage').css('display', 'inline-block').siblings().fadeOut(0);
			    break;
			}
		}
	});

// передача событий клика по кнопкам
	$(document).on('click', 'i.icon-arrow-right', function(){  $.fn.fullpage.moveSectionDown(); });
	$(document).on('click', 'i.icon-arrow-left', function(){ $.fn.fullpage.moveSectionUp(); });

// слайдер карточек с услугами
    $('.js-cart-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      prevArrow: "<div class='slick-arrow slick-next sd-arrow-right'></div>",
      nextArrow: "<div class='slick-arrow slick-prev sd-arrow-left'></div>", 
      appendArrows: $('span.sd-button-container-logos'),
      responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              infinite: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              infinite: false
            }
          }   
        ]
    });

/*-------------- modal -------------------*/
	// открытие модального окна

	$('.js-open-modal').click( function(event){

        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){ 
                $('.js-show-modals') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
        $('.js-show-modals-menu ')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                }
            );
            $('body').addClass('no-scroll');
    });

  $('.js-open-menu').click( function(event){

        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){ 
                $('.js-show-modals-menu ') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: 0}, 200);
        });
            $('body').addClass('no-scroll');        
    });


    // закрытие модального окна
    $('.btn-close-modal, .overlay').click( function(){
        $('.js-show-modals, .js-show-modals-menu ')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
            $('body').removeClass('no-scroll'); 
            $(".js-send-ok").fadeOut();
            $(".js-btn-form").fadeIn(); 
            $('.js-ajax-form').trigger( 'reset' ).find('input:not(.checkbox)').attr('class','').end().find('span.error').fadeOut(0);              
    });  



/*----------- modal end ------------------*/


    $(".modal-form").validate({
        rules: {
            nic: {
                required: true,
                minlength: 4,
                maxlength: 120,
            },
            phone: {
                required: true,
                minlength: 9,
                maxlength: 17,
            },
            regl: {
               required : true

            }            
        },
        messages: {

            nic: {
                required: "Пожалуйста, введите корректное имя",
                minlength: "Логин должен быть минимум 3 символа",
                maxlength: "Максимальное число символо - 120",
            },
            phone: {
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 9 символа",
                maxlength: "Телефон должен быть максимум 17 символов",
            },
            regl: "Подтвердите своё согласие на обработку персональных данных"   
        },

    	errorElement: "i"
    });


// карты ЯНДЕКС


  ymaps.ready(init);

  var myMap;

  function init () {
      
    var myCollection = new ymaps.GeoObjectCollection(),
        marker = $('#map').data('marker'),
        cartAdress = $('.contacts').find(".cart_item-content");

     myMap = new ymaps.Map('map', {
            center: [ cartAdress.data('lat'), cartAdress.data('lng')],
            zoom: 14,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.behaviors.disable('scrollZoom');

    $('.contacts').find(".cart_item-content").each(function(index, el) {

          var myPlace = new ymaps.Placemark([
            $(this).data('lat') , $(this).data('lng')
            ],
             {
                hintContent: 'Парикмахерская ENJOY YOUR SELF',
                balloonContent: 'Парикмахерская ENJOY YOUR SELF'
            }, {
                // тип макета
                iconLayout: 'default#image',
                //изображение иконки метки
                iconImageHref: marker,
                // Размеры метки
                iconImageSize: [32, 32]
            }); 
              // добавит точку в коллекцию
              myCollection.add(myPlace);

            $(this).click(function (){
              myMap.panTo([ $(this).data('lat') , $(this).data('lng') ],14, {delay: 1300,checkZoomRange:true });
            });              
    });

    myMap.geoObjects.add(myCollection);

  }

});
