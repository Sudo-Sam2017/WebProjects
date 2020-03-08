function spinDiv()
{
    var $spinElem = $(".divSpin");

    function rotateDiv(degrees) 
    {
     $spinElm.css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
    }

      $({
    deg: 0
  }).animate({
    deg: 360 * 40
  }, {
    duration: 7000,
    easing: "easeInOutQuart",
    step: function(now) {
      var deg = now < 6000 || now > 8000 ? now / 8 : now;
      rotateDiv(deg);
    }
  });
}

spinDiv();