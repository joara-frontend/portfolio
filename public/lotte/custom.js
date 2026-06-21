$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
  
  // Sliding jQuery
  $('.gnb a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  })
  
  // Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    }
    else {
      $('header, .gototop').removeClass('active')
    }    
  })

  // Logo Desc 
  $('.about .right-desc li').mouseover(function(){
    $(this).find('span').attr('class', 'show');
  })
  $('.about .right-desc li').mouseleave(function(){
    $(this).find('span').attr('class', 'hidden');
  })
  
  // Slick.js
  $('.items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  if($(".mySwiper").length > 0) {
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
      },
      effect: "fade",
      loop: "infinite",
      pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            }
    });
    
    swiper.on('slideChange', function(sld) {
      document.querySelector(".work").setAttribute('data-sld', sld.realIndex);
    })
  }


  /* 롯데면세점 모달 html import */
  if ($('#lotte-content').length > 0) {
    var modalFrame = document.createElement('iframe');
    modalFrame.src = './modal.html';
    modalFrame.style.cssText = 'width:100%;border:none;display:block;';
    modalFrame.onload = function () {
      try {
        modalFrame.style.height =
          modalFrame.contentDocument.documentElement.scrollHeight + 'px';
      } catch (e) {}
      // lotte.html을 감싸는 부모 iframe(LotteFrame)에 최종 높이 전달
      try {
        window.parent.postMessage(
          {
            type: 'lotteHeight',
            height: document.documentElement.scrollHeight,
          },
          '*'
        );
      } catch (e) {}
    };
    document.getElementById('lotte-content').appendChild(modalFrame);
  }
})