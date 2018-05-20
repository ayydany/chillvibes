var playing = true;

function play() {
    jQuery('#bgndVideo').YTPUnmute();
}

$(document).ready(() => {
    jQuery(function(){
        jQuery("#bgndVideo").YTPlayer();
    });

    while(true){
        setTimeout(()=> {
            console.log("trying to unmute");
            
            play(); 
        }, 2000);
    }

})
