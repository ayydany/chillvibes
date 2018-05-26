// Audio Object.
let audio = new Audio('file/bart.mp3');

// Game Variables.
let usersActive = {user1:true, user2:false, user3:false, user4:false};

$(document).ready(() => {
    // audio.volume = 0.1;
    // audio.loop = true;
    // audio.autoplay = true;

    $(".avatar").on("click", playGame);
})

/** 
 * Main Game Function
 * Loops through clicks currently
 */
function playGame() {

    if(audio.paused){
        audio.play();
    }

    // grabs the new interaction
    let interaction = Interaction.getInteraction();
    $("#user"+ interaction.user).animateCss(interaction.animation);

    // Add cascading effect
    for(let i = 1; i <= 4; i++) {
        if(i == interaction.user) {
            $("#user"+ i).animate({
                marginTop: "0",
            }, 200)
        } else {
            $("#user"+ i).animate({
                marginTop: "+=50",
            }, 200)
        }
    }

    // Update next user speech
    setTimeout(() => {
        $("#user"+ interaction.user +" .avatar").attr("src", interaction.img); 
        $("h1", "#user" + interaction.user).fadeOut(200, function() {
            $(this).text(interaction.text).fadeIn(200);
        })

        // If the interacction is popping someone new
        if(!$("#user"+interaction.user).is(":visible")) {
                $("#user"+interaction.user).addClass(interaction.name);
                $("#user"+interaction.user).show(200);
        }

        //TODO: If the interaction is popping out someone
    }, 300)

    // Timer to set the next trigger
    setTimeout(() => {
        playGame();
    }, 2000)
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