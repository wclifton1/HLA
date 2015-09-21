var wrap = $("#wrap");
var window_height = $(window).height();

wrap.on("scroll", function() {
    
  if (this.scrollTop > window_height-1) {
    wrap.addClass("fix-nav");
  } else {
    wrap.removeClass("fix-nav");
  }
});

$('.text').hide();
$('.text#multitasking').show();

$('.phone-base div.btn-floating').click(function(){
    var target = "#" + $(this).data("target");
    console.log("target: %s", target);
    $(".text").not(target).hide();
    $(target).show();
});

$('.phone-text-panel span.js-phone-trigger').click(function(){
    var target = "#" + $(this).data("target");
    console.log("target: %s", target);
    $(".text").not(target).hide();
    $(target).show();
});