!function(e){"use strict";function t(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var n=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},i=function(){e.toc=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,highlightDefault:!0,scrollTo:-1,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(n),$(".tocify-item").click(n)};$(i),$(t)}(window);