// When the user scrolls
$(document).scroll(function(){
  // Find out how far they've scrolled
  var distanceScrolled = $(window).scrollTop();
  // Log it in the console
  console.log('distanceScrolled');

//if distance scrolled is more than 260
  //fade in babylogo
if (distanceScrolled > 280) {
  $(".babylogo").css("opacity", "1");
  //fade out biglogo
  $(".biglogo").css("opacity", "0");
  }
});

//if user scrolls back up to top
  //fade in big logo
  //fade out babylogo
$(window).scroll(function () {
      if ($(this).scrollTop()  <= 10 ){
        $('.babylogo').css("opacity", "0");
        $('.biglogo').css("opacity", "1");
      }
  });

//if user clicks on "contact", sidebar opens
  //.sidebar width = 33%
  //.sidebar display = block
  //.main width = 33%
  $(document).ready(function(){
     $(".open").click(function(){
         $("#sidebar").css("width", "33%");
         $('#main').css("margin-left", "33%");
         $('.no').css('opacity',"1");
         $('.no').css('transition', 'all 500ms ease-in-out 300ms');
     });
     $(".close").click(function(){
         $('#sidebar').css("width", "0");
         $("#main").css("margin-left", "0");
         $('.no').css('opacity', '0');
         $('.no').css('transition', 'all 200ms ease-in-out');
     });

 });
