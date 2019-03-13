// Audio Object.
let audio = new Audio('file/bart.mp3');

// Game Variables.
let usersActive = {user1:true, user2:false, user3:false, user4:false};

$(document).ready(() => {
    // audio.volume = 0.1;
    // audio.loop = true;
    // audio.autoplay = true;

    $(".avatar").on("click", playNextInteraction);
})

/** 
 * Main Game Function
 */
function playNextInteraction() {

    $(".avatar").off("click");

    if(audio.paused) {
        audio.play();
    }

    // grab the new interaction
    let interaction = Interaction.getInteraction();

    // If the interaction is popping someone new
    if(!$(`#user_${interaction.user.id}`).is(":visible")) {
        $(`#user_${interaction.user.id}.avatar`).attr("src", interaction.user.img); 
        $(`#user_${interaction.user.id}`).addClass(interaction.user.name);
        $(`#user_${interaction.user.id}`).show(300);
    }

    // Add cascading effect
    for(let i = 1; i <= 4; i++) {
        if(i == interaction.user.id) {
            $(`#user_${i}`).animate({
                marginTop: "0",
            }, 300)
        } else {
            $(`#user_${i}`).animate({
                marginTop: "+=50",
            }, 300)
        }
    }

    $(`#user_${interaction.user.id}`).animateCss(interaction.animation);

    // Update text
    setTimeout(() => {
        $("h1", `#user_${interaction.user.id}`).fadeOut(200, function() {
            $(this).text(interaction.text).fadeIn(200);
        })
    }, 200);

        //TODO: If the interaction is popping out someone

    // Timer to set the next trigger
    setTimeout(() => {
        playNextInteraction();
    }, interaction.timer)

    //$(".avatar").on("click", playGame);
}

/**
 * Animation Function
 * When the animation ends this function cleans up the leftovers css
 * And also accepts a call to do something when the animation ends.
 */
$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });