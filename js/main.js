if (Modernizr.touch) {
    $('html').addClass('touch');
} else {
    $('html').addClass('no-touch');
}

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
                }, 300);
            return false;
            }
        }
    });
}); 


$(document).ready(function() {
    console.log('document ready');

    var iframe = $('.video')[0],
            player = $f(iframe);

    player.addEvent('ready', function () {
        console.log('video ready');

        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });

    // Call the API when a button is pressed
    $('.featured .controls button').bind('click', function (e) {
        player.api($(this).val());
    });

    function bodyStatus(state){
        $('body').attr('data-video-status',state);
    }

    function onPause(id) {
        //console.log('paused');
        bodyStatus('paused');
    }

    function onFinish(id) {
        //console.log('finished');
        bodyStatus('finished');
    }

    function onPlayProgress(data) {
        //console.log(data.seconds + 's played');
        bodyStatus('playing');
    }


    $('.showEpisodes').click(function(){
        $('body').addClass('showEpisodes');
    });


});

$(window).load(function(){
    $('body').addClass('loaded');
})
