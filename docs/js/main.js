$(document).ready(function() {
  //----------------------------------------choose-ball--------------------------------------//
function chooseBall () {
    $('.company-card__compare').on('click', function() {
    $(this).toggleClass('company-card__compare--red');
  })

  $('.choose--red').on('click', function() {
    $('.choose--ball').css({
      'display': 'block',
      'background': '#E95C62',
      'right': '16px',
      'left': 'auto'
    })
  })

  $('.choose--green').on('click', function() {
    $('.choose--ball').css({
      'display': 'block',
      'background': '#2AC012',
      'left': '16px',
      'right': 'auto'
    })
  })
}
chooseBall();
  //----------------------------------------choose-ball--------------------------------------//
  //----------------------------------------checkbox-fade-color--------------------------------------//
  $('.aside2__list-checkbox .filters__block-checkbox').change(function() {
    console.log('fadskjfasdlkf');
    if (this.checked) {
      $(this).parent().css('color', '#000');
    } else {
      $(this).parent().css('color', '#787878');
    }
  });
  //----------------------------------------checkbox-fade-color--------------------------------------//
  //----------------------------------------???--------------------------------------//
  $('.list-info__title').on('click', function() {
    $('.list-info__title').removeClass('active');
    $(this).addClass('active');

    i = $(this).attr("data-id");
    $('.list-info__text').removeClass('active');
    list = $('.list-info__text');
    $(list[i]).addClass('active');
  })
  //----------------------------------------???--------------------------------------//
  //----------------------------------------slide-comment--------------------------------------//
  $('.leave-comment').slideUp(10);
  $('#leave-comment').on('click', function() {
    $('.leave-comment').slideDown();
    $('#leave-comment').css('background', 'red');

  })

  $('.profile-form__link').on('click', function() {
    $('#edit-form').hide();
  })
  //----------------------------------------slide-comment--------------------------------------//
  //----------------------------------------star--------------------------------------//
  $('.changeable .star').on('mouseover', function() {
    list = $(this).parent().children();
    order = $(this).attr('data-id');

    for (var i = 1; i <= 5; i++) {
      if (i < order) {
        $(list[i]).addClass('star--yellow');
      } else {
        $(list[i]).removeClass('star--yellow');
      }
    }
  })

  $('.changeable .star').on('mouseleave', function() {
    order = $(this).parent().attr('data-val');

    for (var i = 1; i <= 5; i++) {
      if (i < order) {
        $(list[i]).addClass('star--yellow');
      } else {
        $(list[i]).removeClass('star--yellow');
      }
    }
  })

  $('.changeable .star').on('click', function() {
    order = $(this).attr('data-id');
    list = $(this).parent().attr('data-val', order);
  })
  //----------------------------------------star--------------------------------------//
  //----------------------------------------close-fancy-box-form--------------------------------------//
  $('.close-the-form').on('click', function() {
    $('.fancybox-close-small').click();
  })
  //----------------------------------------close-fancy-box-form--------------------------------------//
  //----------------------------------------show-hide-password--------------------------------------//
  $('.eye').on('click', function() {
    $(this).toggleClass('active');
    console.log(this);

    if ($(this).hasClass('active')) {
      $(this).parent().children('input').attr('type', 'text');
    } else {
      $(this).parent().children('input').attr('type', 'password');
    }
  })

  $('input[type=range]').on('input', function() {
    $(this).trigger('change');
  });

  //----------------------------------------show-hide-password--------------------------------------//
  //----------------------------------------range--------------------------------------//

  $("[type=range]").on('change', function() {
    var newval = $(this).val();
    $("#depositValId").text(newval * 10 + " $");
  });

  //----------------------------------------range--------------------------------------//
  //----------------------------------------menu-burger--------------------------------------//
  $('.list__link--burger').on('click', function() {
    $('.menu-burger').toggle(200).toggleClass('active');
  })
  $(window).on('resize', function() {
    if ($(window).width() > 1024) {
      $('.menu-burger').removeClass('active').hide(1000);
    }
  })

  //----------------------------------------menu-burger--------------------------------------//
  //----------------------------------------filter--------------------------------------//
  $('.list__link--filter').on('click', function() {
    $('.aside').toggleClass('active').toggle(300);
  })
  $(window).on('resize', function() {
    if ($(window).width() > 1024) {
      $('.aside').removeClass('active');
    }
  })

  $('.filters__closer').on('click', function() {
    $('.aside').removeClass('active').hide(300);
  })


  //----------------------------------------filter--------------------------------------//

  //----------------------------------------slider--------------------------------------//
  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider2').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });

  if ($(window).width() < 1024) {
    $('.kpk__list').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.broker__list').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.investition__list').slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if ($(window).width() > 1024) {
    $('.kpk__list').unslick();
    $('.broker__list').unslick();
    $('.investition__list').unslick();
  }

  //----------------------------------------slider--------------------------------------//

  if ($(window).width() < 640) {
    $('.search-form__input').attr('placeholder', 'Поиск по сайту');
  }

  $('.delete-card').on('mouseenter', function() {
    $(this).addClass('company-card__button--orange');
    $(this).text('Убрать');
  })
  $('.delete-card').on('mouseleave', function() {
    $(this).removeClass('company-card__button--orange');
    $(this).text('В сравнение');
  })

  //----------------------------------------aside-form-move--------------------------------------//

  if ($(window).width() < 786) {
    form = $('.aside2__form').remove();
    $('.to-place__aside2-form').append(form);

    chooseBall();
  }
  //----------------------------------------aside-form-move--------------------------------------//
//----------------------------------------fancy-box-no-grab--------------------------------------//

  // $.fancybox.open({
  //   src: "#authorisation-form",
  //   type: "inline",
  //   clickSlide : 'false',
  //   clickOutside : 'false',
  //   "touch":false 
  // });
//----------------------------------------fancy-box-no-grab--------------------------------------//

});