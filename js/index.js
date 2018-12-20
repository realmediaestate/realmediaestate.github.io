(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('.tap-target').tapTarget();
    
    $('.aboutus').click(function(){
      $('#about').addClass("active");
    });
    $('.contactus').click(function(){
      $('#contact').addClass("active");
    });
    $('.service').click(function(){
      $('.services').addClass("active");
    });
    $('.property').click(function(){
      $('.properties').addClass("active");
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space