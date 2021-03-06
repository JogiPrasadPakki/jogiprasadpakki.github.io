$(document).ready(function () {
  $("#top-nav").load(
    "https://jogiprasadpakki.github.io/doc/android-native-core/models/top-nav.html"
  ),
    $(".doc-sidebar").load(
      "https://jogiprasadpakki.github.io/doc/android-native-core/models/side-nav.html"
    ),
    $("#fotter").load(
      "https://jogiprasadpakki.github.io/doc/android-native-core/models/fotter.html"
    );
  var o = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  $(".doc-sidebar a").each(function () {
    var a = this.href,
      i = a.substring(a.lastIndexOf("/") + 1);
    if (o == i) {
      $('a[href*="' + o + '"]').addClass("link-active");
    }
  });
  var a = o.split(/[#.]+/);
  if (1 != a.length) {
    var i = "#" + a[0];
    console.log(i),
      $(i).addClass("show"),
      $(i + " a").click(function () {
        var o = window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        );
        $('a[href*="' + o + '"]').removeClass("link-active");
      }),
      $(window).on("hashchange", function () {
        var o = window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        );
        $('a[href*="' + o + '"]').addClass("link-active");
      });
  }
  $("#Varhilighter").click(function () {
    $("html, body").animate({ scrollTop: $("#ConstValues").offset().top }, 1e3),
      $("#ConstValues").effect("highlight", {}, 3e3);
  }),
    $("#sidebarCollapse").on("click", function () {
      $("#doc-side-nav").toggleClass("active");
    });
});
