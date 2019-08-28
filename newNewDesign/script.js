$('document').ready(function(){
   $('.parallax').parallax();

   $(window).on('resize', function() {
       $('.parallax-container').css('height', $(window).height());
   });

   $('.parallax-container').css('height', $(window).height());

})
