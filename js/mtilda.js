// @codekit-prepend "jquery.easing.1.3.js";
// @codekit-prepend "global.js";
// @codekit-prepend "velocity.min.js";
// @codekit-prepend "buttons.js";
// @codekit-prepend "cards.js";
// @codekit-prepend "collapsible.js";
// @codekit-prepend "forms.js";
// @codekit-prepend "tabs.js";
// @codekit-prepend "waves.js";
// @codekit-prepend "init.js";


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
    $(".text").not(target).hide();
    $(target).show();
});

$('.phone-text-panel span.js-phone-trigger').click(function(){
    var target = "#" + $(this).data("target");
    $(".text").not(target).hide();
    $(target).show();
});

function filterPath(string) {
      return string
        .replace(/^\//,'')
        .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
        .replace(/\/$/,'');
      }
      var locationPath = filterPath(location.pathname);
      var scrollElem = scrollableElement('.wrap');//'html', 'body'
     
      $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/,'')
        && $(this).hasClass("smooth") ) {
        //var $target = $(this.hash), target = this.hash;
        var $target = $("#top"), target = "#top";
        //console.log("target: %s", target);
          if (target) {
            var targetOffset = $target.offset().top;
            $(this).click(function(event) {
              event.preventDefault();
              $(scrollElem).animate({scrollTop: targetOffset}, 750, 'easeInOutExpo', function() {
                location.hash = target;
              });
            });
          }
        }
        if (  locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/,'')
        && $(this).hasClass("default") ) {
        //var $target = $(this.hash), target = this.hash;
        var $target = $("#top"), target = "#top";
          if (target) {
            var targetOffset = $target.offset().top;
            $(this).click(function(event) {
              event.preventDefault();
              $(scrollElem).animate({scrollTop: targetOffset}, 0, function() {
                location.hash = target;
              });
            });
          }
        }
      });
     
      // use the first element that is "scrollable"
      function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
          var el = arguments[i],
              $scrollElement = $(el);
          if ($scrollElement.scrollTop()> 0) {
            return el;
          } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop()> 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
              return el;
            }
          }
        }
        return [];
      };