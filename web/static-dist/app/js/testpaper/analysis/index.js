webpackJsonp(["app/js/testpaper/analysis/index"],{"1006050c1484c795a092":function(e,s,t){"use strict";var a=t("f898520c5384ef4c819c"),n=t("45d3c796d523fa97ecd2"),c=function(e){return e&&e.__esModule?e:{default:e}}(n);(0,a.initScrollbar)(),(0,a.testpaperCardFixed)(),(0,a.testpaperCardLocation)(),new c.default,$(".js-analysis").click(function(){var e=$(this);e.addClass("hidden"),e.siblings(".js-analysis.hidden").removeClass("hidden"),e.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()})},"45d3c796d523fa97ecd2":function(e,s,t){"use strict";function a(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(s,"__esModule",{value:!0});var n=function e(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("html");a(this,e),s.attr("unselectable","on").css("user-select","none").on("selectstart",!1)};s.default=n}},["1006050c1484c795a092"]);