;(function( $ ){

/* Odoros navigation + footer menu overrides (run before plugins init) */
function applyOdorosMenus() {
  // Main nav (desktop + source for mobile menu)
  var nav = document.getElementById("navigation");
  if (nav) {
    var ul = nav.querySelector("ul");
    if (ul) {
      var path = (window.location.pathname || "").toLowerCase();
      var isCurrent = function (file) {
        return path.endsWith("/" + file.toLowerCase()) || path.endsWith(file.toLowerCase());
      };
      var currentClass = function (file) {
        return isCurrent(file) ? ' class="current-menu-item"' : "";
      };

      ul.innerHTML =
        '<li' + currentClass("index.html") + '><a href="index.html">Home</a></li>' +
        '<li' + currentClass("about.html") + '><a href="about.html">About us</a></li>' +
        '<li class="menu-item-has-children"><a href="#">Solutions</a>' +
          '<ul>' +
            '<li><a href="drought.html">Drought</a></li>' +
            '<li><a href="climate.html">Climate</a></li>' +
            '<li><a href="health-nutrition.html">Health and Nutrition</a></li>' +
            '<li><a href="population-movement.html">Population movement</a></li>' +
            '<li><a href="environment.html">Environment</a></li>' +
            '<li><a href="food-markets.html">Food markets</a></li>' +
          '</ul>' +
        '</li>' +
        '<li' + currentClass("volunteer.html") + '><a href="volunteer.html">Our team</a></li>' +
        '<li' + currentClass("contact.html") + '><a href="contact.html">Contacts</a></li>';
    }
  }

  // Footer bottom menu: make last item "Live Dashboard"
  var footerMenuUl = document.querySelector(".footer-menu ul");
  if (footerMenuUl) {
    var items = footerMenuUl.querySelectorAll("li");
    var li = items.length ? items[items.length - 1] : null;
    if (!li) {
      li = document.createElement("li");
      footerMenuUl.appendChild(li);
    }
    li.innerHTML = '<a href="live-dashboard.html">Live Dashboard</a>';
  }
}

try { applyOdorosMenus(); } catch (e) {}

/* Fixed header nav */
 document.addEventListener("DOMContentLoaded", function(){
   window.addEventListener('scroll', function() {
       var headerHeight = document.querySelector('.top-header').offsetHeight;
       if($(window).width() >= 992)
       {
         if ( window.scrollY > headerHeight ) {
           document.getElementById('masthead').classList.add('fixed-header');
         }else {
           document.getElementById('masthead').classList.remove('fixed-header');
         }
       } else {
         var bottomheaderHeight = document.querySelector('.bottom-header').offsetHeight;
         var mobileheaderHeight =  headerHeight + bottomheaderHeight;
         if ( window.scrollY > mobileheaderHeight ) {
           document.getElementById('masthead').classList.add('fixed-header');
         }else {
           document.getElementById('masthead').classList.remove('fixed-header');
         }
       }
   });
 }); 

/* Show or Hide Search field on clicking search icon */
$( document ).on( 'click', '.header-search-icon .search-icon', function(e){
	e.preventDefault();
	$( '.header-search-form' ).addClass( 'search-in' );
});

$( '.header-search-form, .search-close' ).on( 'click', function(e) {   
    e.preventDefault();
    if(!$(e.target).is( '.header-search-form input' )) {
        $( '.header-search-form' ).removeClass( 'search-in' );
    }
});

/* Mobile slick nav */
$('#navigation').slicknav({
  duration: 500,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: '.mobile-menu-container',
  allowParentLinks: true,
  nestedParentLinks : false,
  label: "Menu", 
  closeOnClick: true, // Close menu when a link is clicked.
});

/* Home client slider */
$('.client-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  autoplay: false,
  responsive: [{
    breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }, {
    breakpoint: 479,
      settings: {
        slidesToShow: 2,
      }
  }]
});

/* Home testimonial slider */
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
});

$(document).ready(function(){
  /* Count down */
  loopcounter('time-counter');

  setInterval(function(){ 
   // toggle the class every five second
   $('.section-head').toggleClass('animated-line');  
   setTimeout(function(){
     // toggle back after 1 second
     $('.section-head').toggleClass('animated-line');  
   },1000)

  },5000);

  // Progress bar
  $(".example").progressBar({
    duration: 1000,
  });
  
});

/* Single gallery slider */
$('.gallery-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 2,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
  responsive: [{
    breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
  }]
});

/* Blog masonry */
function MasonryGrid (){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
  });
}

/* product detail slider */
 $('.product-thumbnails').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-thumb-nav'
});
$('.product-thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-thumbnails',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

$(window).scroll(function() {
  /* back to top */
  if ($(this).scrollTop() > 300) {
    $('#backTotop').fadeIn(200);
  } else {
    $('#backTotop').fadeOut(200);
  }
});
 /* back to top */
$("#backTotop").on( 'click', function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 1000);
});

/* preloader */
$( window ).on( "load", function() {
  $( '#siteLoader' ).fadeOut( 500 );
  /* Blog masonry */
  MasonryGrid ();
});

$(document).on( "resize", function(){
  MasonryGrid ();
});

// price handel
 $( "#slider-range" ).slider({
  range: "max",
  min: 0,
  max: 1000,
  value: 500,
  slide: function( event, ui ) {
    $( "#maxAmount" ).val( ui.value );
  }
});
$( "#maxAmount" ).val( $( "#slider-range" ).slider( "value" ) );

/* popup video */
$("#video-container, #video-container-two").modalVideo({
  youtube:{
    controls:0,
    nocookie: true
  }
});

/* counter up*/
$('.counter').counterUp();

// cart page input increasing order
$('.quantity').prop('disabled', true);
$(document).on('click','.plus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) + 1 );
});
$(document).on('click','.minus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) - 1 );
    if ($('.quantity').val() == 0) {
    $('.quantity').val(1);
  }
});

/* Site branding/content overrides (Odoros) */
document.addEventListener("DOMContentLoaded", function () {
  var BRAND = {
    name: "Odoros",
    email: "Hello@odoros.info",
    website: "Odoros.info",
    address: "Afgooye Road, Mogadishu",
    titleSeparator: " | ",
    socials: {
      facebook: null,
      twitter: null,
      instagram: null,
      youtube: null,
      linkedin: null
    },
    cta: {
      donate: "Donate",
      learnMore: "Learn More"
    }
  };

  // Title (Odoros | <Page Name>)
  try {
    var pageName = "";
    var innerTitle = document.querySelector(".inner-banner-content .inner-title");
    if (innerTitle && innerTitle.textContent) pageName = innerTitle.textContent.trim();

    if (!pageName) {
      var h1 = document.querySelector("h1");
      if (h1 && h1.textContent) pageName = h1.textContent.trim();
    }

    if (!pageName && document.title) {
      pageName = document.title
        .replace(/environ/ig, "")
        .replace(/odoros/ig, "")
        .replace(/\|/g, " ")
        .trim();
    }

    document.title = BRAND.name + (pageName ? (BRAND.titleSeparator + pageName) : "");
  } catch (e) {}

  // Email links (also fixes common "mailtop:" typo)
  var emailLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="mailtop:"]');
  emailLinks.forEach(function (a) {
    a.setAttribute("href", "mailto:" + BRAND.email);
    if (a.textContent && /domain\.com|info@domain\.com|company@domain\.com/i.test(a.textContent)) {
      a.textContent = BRAND.email;
    }
  });

  // Replace visible placeholder emails even if href is missing/wrong
  document.querySelectorAll("a, span, p, li").forEach(function (el) {
    if (!el || !el.textContent) return;
    if (/company@domain\.com|info@domain\.com/i.test(el.textContent)) {
      el.textContent = el.textContent.replace(/company@domain\.com|info@domain\.com/ig, BRAND.email);
    }
  });

  // Address in top header (map-marker list item)
  var headerAddressLi = document.querySelector(".top-header .header-contact-info li i.fas.fa-map-marker-alt");
  if (headerAddressLi && headerAddressLi.parentElement) {
    headerAddressLi.parentElement.innerHTML =
      '<i class="fas fa-map-marker-alt"></i> ' + BRAND.address;
  }

  // Footer "Contact Information" widget (address/email)
  var footer = document.querySelector("footer");
  if (footer) {
    footer.querySelectorAll("aside.widget").forEach(function (widget) {
      var title = widget.querySelector(".widget-title");
      if (!title) return;
      if (/contact information/i.test(title.textContent || "")) {
        // Address (first <li> with map-marker icon class)
        var addrLi = widget.querySelector("li i.icon-map-marker1");
        if (addrLi && addrLi.parentElement) {
          addrLi.parentElement.innerHTML =
            '<i aria-hidden="true" class="icon icon-map-marker1"></i> ' + BRAND.address;
        }
        // Email (li containing envelope icon)
        var emailIcon = widget.querySelector("li i.icon-envelope1");
        if (emailIcon) {
          var emailA = emailIcon.closest("a");
          if (emailA) {
            emailA.setAttribute("href", "mailto:" + BRAND.email);
            emailA.textContent = BRAND.email;
          }
        }
      }
    });
  }

  // Social links: if not provided, point to your website (or you can set real URLs above)
  var defaultSocialUrl = "https://" + BRAND.website.replace(/^https?:\/\//i, "");
  document.querySelectorAll('.social-links a[target="_blank"]').forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (/facebook\.com/i.test(href) && BRAND.socials.facebook) a.href = BRAND.socials.facebook;
    else if (/twitter\.com/i.test(href) && BRAND.socials.twitter) a.href = BRAND.socials.twitter;
    else if (/instagram\.com/i.test(href) && BRAND.socials.instagram) a.href = BRAND.socials.instagram;
    else if (/youtube\.com/i.test(href) && BRAND.socials.youtube) a.href = BRAND.socials.youtube;
    else if (/linkedin\.com/i.test(href) && BRAND.socials.linkedin) a.href = BRAND.socials.linkedin;
    else a.href = defaultSocialUrl;
  });

  // Common CTA button text tweaks (safe, minimal)
  document.querySelectorAll('a.button-round-primary[href$="donate.html"]').forEach(function (a) {
    if (/donate/i.test(a.textContent || "")) a.textContent = BRAND.cta.donate;
  });

  // Home "service cards" buttons text
  document.querySelectorAll(".service-section .service-item a.button-round-primary").forEach(function (a) {
    a.textContent = "Live Dashboard";
  });
});

})( jQuery );