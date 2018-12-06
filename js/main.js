$(document).ready(function () {

    var url = window.location.href;
    var indices = [];
    for(var i=0; i<url.length;i++) {
    if (url[i] === "/") indices.push(i);
    }
    url=url.substring(0,(indices[(indices.length)-1])+1);
    $("#top-nav").load(url+"models/top-nav.html");
    $("#fotter").load(url+"models/fotter.html")

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
        
    });
});