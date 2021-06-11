!(function (i) {
  var t,
    n,
    a = {
      init: function (i, o) {
        (t = i), (n = o), a.bind();
      },
      bind: function () {
        i(window).scroll(function () {
          a.animate(t, n);
        }),
          i(window).trigger("scroll");
      },
      animate: function (t, n) {
        var a = i(window).height(),
          o = i(window).scrollTop(),
          s = o + a;
        i.each(t, function () {
          var t = i(this).data("animate"),
            a = i(this).data("offset"),
            e = i(this).data("duration"),
            d = i(this).data("delay"),
            r = i(this).data("iteration"),
            h = i(this).outerHeight(),
            c = i(this).offset().top,
            l = c + h;
          a && ((c += a), (l -= a)),
            i(this).css({
              "-webkit-animation-duration": e,
              "animation-duration": e,
            }),
            i(this).css({ "-webkit-animation-delay": d, "animation-delay": d }),
            i(this).css({
              "-webkit-animation-iteration-count": r,
              "animation-iteration-count": r,
            }),
            l >= o && c <= s
              ? (i(this).css("visibility", "visible"),
                i(this).addClass(t),
                i(this).addClass("animated"))
              : n.once === !1 &&
                (i(this).css("visibility", "hidden"),
                i(this).removeClass(t),
                i(this).removeClass("animated"));
        });
      },
    };
  jQuery.fn.scrolla = function (t) {
    return (
      (t = i.extend({ mobile: !1, once: !1 }, t)),
      (t.mobile !== !1 ||
        !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )) &&
        void a.init(this, t)
    );
  };
})(jQuery);
