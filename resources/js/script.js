$(document).ready(function(){

// TITLE BUTTONS

document.querySelector('.js--scroll-to-plans').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section-plans').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})


document.querySelector('.js--scroll-to-start').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section--features').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// document.querySelector('.js--scroll-to-start').addEventListener('click', function (e) {
//   e.preventDefault();
//   var offsetTop = document.querySelector(".js--section--features").offsetTop ;
//   window.scrollTo({
//       top: offsetTop - 60,
//       behavior: "smooth"
//   });
// })


// document.querySelector('.js--scroll-to-start').addEventListener('click', function (e) {
//   e.preventDefault();
//   var offsetTop = document.querySelector(".js--section--features").offsetTop ;
//   window.scrollTo({
//       top: offsetTop - 60,
//       behavior: "smooth"
//   });
// })

// NAV BAR

document.querySelector('.main-nav li:nth-of-type(1) a').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section--features').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

document.querySelector('.main-nav li:nth-of-type(2) a').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section-steps').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

})

document.querySelector('.main-nav li:nth-of-type(3) a').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section-cities').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

document.querySelector('.main-nav li:nth-of-type(4) a').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js--section-form').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ANIMATIONS ON SCROLL

const wp1El = document.querySelector('.js--wp-1');
var waypoint = new Waypoint({
  element: wp1El,
  handler: function(direction) {
    wp1El.classList.add("animated", "fadeIn");
  },
  offset: "45%"
})


const wp2El = document.querySelector('.js--wp-2');
var waypoint = new Waypoint({
  element: wp2El,
  handler: function(direction) {
    wp2El.classList.add("animated", "fadeInUp");
  },
  offset: "45%"
})


const wp3El = document.querySelector('.js--wp-3');
var waypoint = new Waypoint({
  element: wp3El,
  handler: function(direction) {
    wp3El.classList.add("animated", "fadeIn");
  },
  offset: "45%"
})

const wp4El = document.querySelector('.js--wp-4');
var waypoint = new Waypoint({
  element: wp4El,
  handler: function(direction) {
    wp4El.classList.add("animated", "pulse");
  },
  offset: "45%"
})


// MOBILE NAV

function toggleNavbar () {
  nav.slideToggle(200);

  if(icon.hasClass('ion-ios-menu')){
    icon.removeClass('ion-ios-menu');
    icon.addClass('ion-ios-close');
  } else {
    icon.removeClass('ion-ios-close');
    icon.addClass('ion-ios-menu');
  }
}

var nav = $('.js--main-nav');
var icon = $('.js--nav-icon > i');
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon > i');

  toggleNavbar();
})

$(window).resize(function() {
  /*If browser resized, check width again */
  if ($(window).width() > 767) {
    if (nav.css('display') == 'none') {
      toggleNavbar();
    }
  }
});





// attempt without jQuery

// const iconEl = document.querySelector('.js--nav-icon');
// iconEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   const nav = document.querySelector('.js--main-nav');

// })


// STICKY NAV 

var waypoint = new Waypoint({
  element: document.querySelector('.js--section--features'),
  handler: function(direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },
  offset: 65
})






  // $('.js--scroll-to-plans').click(function (e) {
  //   e.preventDefault();
  //   $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  // })


  /* scroll on buttons */

  // js--scroll-to-start
  // js--section--features



 


});