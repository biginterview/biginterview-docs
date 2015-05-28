//= require ./lib/jquery-2.1.4
//= require ./lib/jquery_ui
//= require ./lib/jquery.tocify
//= require bootstrap/collapse
//= require bootstrap/scrollspy
//= require bootstrap/affix
//= require_self

$(document).ready(function() {
  var showAndHide = !($(window).width() <= 768);

  $('#docs table').addClass('table table-bordered');

  $('#toc').tocify({
    context: '#docs',
    selectors: 'h1, h2, h3',
    highlightOffset: 105,
    highlightDefault: showAndHide,
    theme: 'none',
    showAndHide: showAndHide,
    smoothScroll: false,
    scrollTo: showAndHide ? 85 : 75,
    showEffectSpeed: 0,
    hideEffectSpeed: 180,
    scrollHistory: true,
    hashGenerator: function (text, element) {
      return element.prop('id').replace(':', '').replace('/', '-');
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
  }

  $(window).resize();
});
