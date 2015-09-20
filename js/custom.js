var wrap = $("#wrap");
var window_height = $(window).height();

wrap.on("scroll", function() {
    
  if (this.scrollTop > window_height-1) {
    wrap.addClass("fix-nav");
  } else {
    wrap.removeClass("fix-nav");
  }
});

