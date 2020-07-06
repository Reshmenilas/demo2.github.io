$(document).ready(function(){
  // MIXITUP 
  var mixer = mixitup('.grid');
  // MAGNIFIC POPUP
	 $('.pop_up').magnificPopup({
      
		type: 'image',
		gallery: {
			 enabled: true
		},
		
    });
    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
 
  
  // sticky menu
 $(window).scroll( function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 50)
  
});
    // Add active class to the current button (highlight it)
  var header = document.getElementById("menu");
  var links = header.getElementsByClassName("nav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  } 
  
  
  
  
  
});
  
// mobile menu javascript
  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
// progress bar js 
 
  $(function(){
	  "use strict";
  var myWindow=$(window);
  myWindow.on('scroll',function(){
  $(".skills-progress span").each(function(){
   var bottom_of_object=$(this).offset().top+$(this).outerHeight();
   var bottom_of_window=$(window).scrollTop()+$(window).height();
   var myVal=$(this).attr('data-value');
   if(bottom_of_window>bottom_of_object){
     $(this).css({width:myVal});
	 }
	 
	 });
	 
	 });
  });
  

  
  
  
 
  
  
  
  
  
  
  
  