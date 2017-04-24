$(document).on("mousedown", function(e) {
    if ($(e.target).is('#sliding-border-1') === false) {
      $('.border-over-1').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border-1') === true){
        $('.border-over-1').addClass('clicked');
    }
    if ($(e.target).is('#sliding-border-2') === false) {
      $('.border-over-2').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border-2') === true){
        $('.border-over-2').addClass('clicked');
    }
    if ($(e.target).is('#sliding-border-3') === false) {
      $('.border-over-3').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border-3') === true){
        $('.border-over-3').addClass('clicked');
    }
});
