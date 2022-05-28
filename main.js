$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass("sticky");
    } else {
      $('.nav-bar').removeClass("sticky");
    }
  });
    //menu  button  toggle
    $('.menu-btn').click(function () {
        $('.nav-bar .menu').toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })
  
  //owl carousel script
  $('.carousel').owlCarousel({
    
  })
});
