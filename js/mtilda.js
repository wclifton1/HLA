// @codekit-prepend "jquery.easing.1.3.js";
// @codekit-prepend "global.js";
// @codekit-prepend "velocity.min.js";
// @codekit-prepend "buttons.js";
// @codekit-prepend "cards.js";
// @codekit-prepend "collapsible.js";
// @codekit-prepend "forms.js";
// @codekit-prepend "slider.js";
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
    $(".js-phone-trigger").removeClass("active");
    $(this).addClass("active");
    $(".text").not(target).hide();
    $(target).show();

});

$('.phone-text-panel span.js-phone-trigger').click(function(){
    var target = "#" + $(this).data("target");
    var target2 = "#" + $(this).data("target") + "-button";
    console.log(target2);
    $(".js-phone-trigger").removeClass("active");
    $(target2).addClass("active");
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
          //var $target = $("#demo"), target = "#demo";
          //var $target = $("#top"), target = "#top";
          var $target = $(this.hash), target = this.hash;
          var targetOffset = $target.offset().top ;
          if (target) {
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
          var $target2 = $("#top"), target2 = "#top";
          if (target2) {
            var targetOffset = $target2.offset().top;
            $(this).click(function(event) {
              event.preventDefault();
              $(scrollElem).animate({scrollTop: targetOffset}, 0, function() {
                location.hash = target2;
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

      function scrollToView(element){
          var offset = element.offset().top;
          if(!element.is(":visible")) {
              element.css({"visiblity":"hidden"}).show();
              var offset = element.offset().top;
              element.css({"visiblity":"", "display":""});
          }

          var visible_area_start = $(window).scrollTop();
          var visible_area_end = visible_area_start + window.innerHeight;

          if(offset < visible_area_start || offset > visible_area_end){
               // Not in view so scroll to it
               $('html,body').animate({scrollTop: offset - window.innerHeight/3}, 1000);
               return false;
          }
          return true;
      }
$(document).ready(function(){
      $('.slider').slider({full_width: true});

   
    $('#demo-btn').click(function(){
        $('.wrap').animate({scrollTop:$('#to-demo').height()-$('.tab-nav').height()}, 750, 'easeInOutExpo');
        return false;
    });

    $('#demo-btn2').click(function(){
        $('.wrap').animate({scrollTop:$('#to-demo').height()-$('.tab-nav').height()}, 750, 'easeInOutExpo');
        return false;
    });

});