$(document).ready(function(){
/*
   $("nav a").click(function(event){
      event.preventDefault();
      $('article').hide();
      $(this).parents('li').addClass('active').siblings('li').removeClass('active');
      $('#' + $(this).data('target')).show();
   });
*/
   $('#devwidth').html($(window).width());
   $(window).resize(function() {
      $('#devwidth').html($(window).width());
   });

});