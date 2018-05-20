function play() {
    jQuery('#bgndVideo').YTPUnmute();
    jQuery('#bgndVideo').YTPPlay();
}

$(document).ready(() => {
    jQuery(function(){
        jQuery("#bgndVideo").YTPlayer();
    });

    setTimeout(()=>{
        play(); 
    }, 2500);

})
