// Audio Object.
let audio = new Audio('file/bart.mp3');

// Animation Variables.
let animationEnter = ["bounceIn","bounceInDown","bounceInLeft","rollIn","flipInX"],
    animationExit = ["bounceOut","bounceOutLeft","rollOut","flipOutX"],
    prevAnimEnter = "bounceIn",
    prevAnimExit = "bounceOut";

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

    let newEntry = animationEnter[Math.floor(Math.random() * animationEnter.length)];
    let newExit = animationExit[Math.floor(Math.random() * animationExit.length)];

    // grabs the new interaction
    let interaction = Interaction.getInteraction();


    $("#user"+ interaction.user).removeClass(prevAnimEnter);
    $("#user"+ interaction.user).addClass('animated ' + newExit);
    prevAnimExit = newExit;

    // Update next user speach
    setTimeout(() => {
        $("#user"+ interaction.user +" .avatar").attr("src", interaction.img);
        $("h1", "#user" + interaction.user).text(interaction.text);
    }, 700)

    // Animate it.
    setTimeout(() => {
        
        if(interaction.special){
            interaction.special.call(null, interaction.name2);
        }

        $("#user"+ interaction.user).removeClass(prevAnimExit);
        $("#user"+ interaction.user).addClass('animated ' + newEntry);
        prevAnimEnter = newEntry;

        $(this).on("click", avatarAnim);
    }, 1500)
}

function enableTwo(name){
    $("#user2").removeClass();
    $("#user2").addClass("section " + name + " animated bounceIn");
    $("#user2").show();
    usersActive.user2 = true;
}

function disableTwo(){
    $("#user2").hide();
    usersActive.user2 = false;
}