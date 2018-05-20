function play() {
    jQuery('#bgndVideo').YTPUnmute();
}

$(document).ready(() => {
    jQuery(function(){
        jQuery("#bgndVideo").YTPlayer();
    });

    setTimeout(()=>{
        play(); 
    }, 2000);

})
