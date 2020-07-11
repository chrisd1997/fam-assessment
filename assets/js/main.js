(function() {

    $('#openMobileNav').click(() => {
        $('.slide-nav').addClass('open');
    });

    $('#closeMobileNav, .slide-nav a').click(() => {
        $('.slide-nav').removeClass('open');
    });

})();