// Audio Object.
let audio = new Audio('file/bart.mp3');

// Animation Variables.
let prevAnimEnter = "bounce",
    prevAnimExit = "bounce";

// Game Variables.
let usersActive = {user1:true, user2:false, user3:false, user4:false};

$(document).ready(() => {
    audio.volume = 0.1;
    audio.loop = true;
    audio.autoplay = true;

    $(".avatar").on("click", avatarAnim);
})

function avatarAnim() {
    $(this).off("click");

    if(audio.paused){
        audio.play();
    }

    // grabs the new interaction
    let interaction = Interaction.getInteraction();

    $("#user"+ interaction.user).animateCss(interaction.animation);
    prevAnimExit =  interaction.animation;

    // Update next user speech
    setTimeout(() => {
        
        if(!$("#user"+interaction.user).is(":visible")) {
            console.log("hidden, displaying");
            $("#user"+interaction.user ).show();
        }

        $("#user"+ interaction.user +" .avatar").attr("src", interaction.img);
        $("h1", "#user" + interaction.user).text(interaction.text);
    }, 200)

    // Animate exit.
    setTimeout(() => {
        if(interaction.special){
            interaction.special.call(null, interaction.name2);
        }

        $(this).on("click", avatarAnim);
    }, 1500)
}


function enableTwo(name){
    $("#user2").removeClass();
    $("#user2").addClass("section " + name + " animated bounce");
    $("#user2").show();
    usersActive.user2 = true;
}

function disableTwo(){
    $("#user2").hide();
    usersActive.user2 = false;
}

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