var tabMenu = (function(){
  var init = function(){
    $('.tabs').find('a').on('click', function (event) {
      event.preventDefault();
      var href = $(this).attr('href');
      var $targetContent = $(href);
      $('.tabs').find('a').removeClass('is_active');
      $(this).addClass('is_active');
    });
  };
  return {
    init: init
  };
})();
tabMenu.init();
