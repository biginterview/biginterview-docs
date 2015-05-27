//= require ./lib/jquery-2.1.4
//= require ./lib/jquery_ui
//= require ./lib/jquery.tocify
//= require bootstrap/collapse
//= require bootstrap/scrollspy
//= require bootstrap/affix
//= require_self

$(document).ready(function() {
  $('#toc').tocify({
    context: '#docs',
    selectors: 'h1, h2',
    highlightOffset: 65,
    extendPage: false,
    theme: 'none',
    smoothScroll: false,
    scrollTo: 60,
    showEffectSpeed: 0,
    hideEffectSpeed: 180,
    scrollHistory: true
  });

  var $resizable = $('[data-width-resize]');
  if ($resizable.length > 0) {
    $(window).resize(function() {
      $resizable.each(function() {
        var el = $(this),
            target = $(el.data('widthResize')),
            paddingLeft,
            paddingRight;

        paddingLeft = parseInt(target.css('padding-left'));
        paddingRight = parseInt(target.css('padding-right'));
        target.width(el.width() - (paddingLeft + paddingRight));
      });
    });

    $(window).resize();
  }
});
