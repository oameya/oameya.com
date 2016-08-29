$(document).ready(function(){
  $('#slider').nivoSlider({
    effect: 'fold',
    pauseTime: 5000
  });

  $("#logo").css({marginTop: "-150px"});
  $("#logo").animate({marginTop: "9px"}, "slow");
  $("#logo").bind("mouseover", function() {
    $(this).wiggle('start', {limit: 2});
  });
  $("#logo").bind("mouseout", function() {
    $(this).wiggle('stop');
  });

})
