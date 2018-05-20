

$( document ).ready(() => {
    jQuery(function(){
        jQuery("#bgndVideo").YTPlayer();
    });
      
    function play() {
        jQuery('#bgndVideo').YTPPlay();
        jQuery('#bgndVideo').YTPUnmute();
    }
})
