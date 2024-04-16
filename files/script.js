

   // Add hover effect to profile image
   document.getElementById('profileImage').addEventListener('mouseover', function() {
     this.style.transform = 'scale(1.1)';
   });

   document.getElementById('profileImage').addEventListener('mouseout', function() {
     this.style.transform = 'scale(1)';
   });
   
   
   $("document").ready(function(){
     $(".close-icon span").click(function(){
       $(".nav-items").fadeOut();
     });
     
     $(".toggle-nav").click(function(){
       $(".nav-items").fadeIn();
     });
   
   
  
  $('a[href^="#"]').click(function(event) {
    var target = $(this.getAttribute('href'));
    var navbarHeight = $('nav').outerHeight();
    
   var isMobile = $(window).width() <= 768;

  if(isMobile) {
   $(".nav-items").fadeOut();
  } 
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top- navbarHeight // Subtract navbar height
        }, 100);
    }
  })

   });