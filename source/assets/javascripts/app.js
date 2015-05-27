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
    selectors: 'h1, h2, h3',
    highlightOffset: 100,
    theme: 'none',
    smoothScroll: false,
    scrollTo: 85,
    showEffectSpeed: 0,
    hideEffectSpeed: 180,
    scrollHistory: true,
    hashGenerator: function (text, element) {
      return element.prop('id');
    }
  });

  $('#docs a[href^="#"]').click(function(e) {
    var href, $toc;
    e.preventDefault();

    href = $(this).attr('href').replace('#', '');
    $toc = $('[data-unique="' + href + '"] > a');
    console.log(href, $toc);
    $toc.click();
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
