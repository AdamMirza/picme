$(document).ready(function(){

    $(document).click(function() {
        if($(document).hasClass('slide-up')) {
          $(document).addClass('slide-down', 10000, 'easeOutBounce');
          $(document).removeClass('slide-up');
        } else {
          $(document).removeClass('slide-down');
          $(document).addClass('slide-up', 10000, 'easeOutBounce');
        }
    });

  $(document).click(function(e){
    //animation
    if (e.button == 0 ) {
      window.location.href="./index.html";
    }
  });

});
