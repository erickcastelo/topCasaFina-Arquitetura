$(function () {
    $('#navbar-topCasaFina').on('show.bs.collapse', function() {
        $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');
    });

    $('#navbar-topCasaFina').on('hide.bs.collapse', function() {
        $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
    });

    var $doc = $('html, body');
    $('li a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});