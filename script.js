let audio = new Audio('file/bart.mp3');
const arr = [
    "ｄａｎｙｂｏｓｓ　コッ猿",
    "hey pls don't do that",
    "rude",
    "oh yeah I can talk",
    "suprising huh",
    "is this even talking though?",
    "anyway Dany",
    "i bet you're wondering how much I can talk right?",
    "answer is, well a lot",
    "maybe i'll even scare you c:<",
    "wondering how i can do that",
    "in here i can do anything",
    "im a faggot",
    "how did you find me?", 
    "steam I bet", 
    "danyboss's profile?", 
    "don't you have anything else better to be doing?", 
    "...", 
    "im actually kind of glad you want to stay here",
    "gets pretty lonely in here",
    "at least its aesthetic right",
    "dofu is a fgt",
    "oh sorry i just wanted to say that",
    "sooooo ...",
    "how are you?", 
    "are you?", 
    "you know what i'm asking right", 
    "look up", 
    "okay then keep doing this", 
    "ur a meme",
    ":^)"];

let counter = 0;
let animationEnter = ["bounceIn","bounceInDown","bounceInLeft","fadeIn","flipInX"],
    animationExit = ["bounceOut","bounceOutLeft","fadeOut","flipOutX"],
    prevAnimEnter = "bounceIn",
    prevAnimExit = "bounceOut";

$( document ).ready(()=>{
    audio.loop = true;
    audio.autoplay = true;

    $(".section").on("mouseenter", avatarAnim);
})


function avatarAnim() {
    audio = new Audio('file/bart.mp3');
    audio.play();
    
    $(".section").off("mouseenter");

    let newEntry = animationEnter[Math.floor(Math.random() * animationEnter.length)];
    let newExit = animationExit[Math.floor(Math.random() * animationExit.length)];

    $(this).removeClass(prevAnimEnter);
    $(this).addClass('animated ' + newExit);
    prevAnimExit = newExit;

    setTimeout(()=>{
        counter++;
        $("h1", this).text(arr[counter]);
        
        specialTriggers();

    }, 700)

    setTimeout(()=>{

        $(this).removeClass(prevAnimExit);
        $(this).addClass('animated ' + newEntry);
        prevAnimEnter = newEntry;

        $(".section").on("mouseenter", avatarAnim);
    }, 2000)
}

function specialTriggers(){
    switch(counter){
        case 9:
            $(".avatar").attr("src", "res/avatars/dofu.jpg");
            break;
        case 10:
            $(".avatar").attr("src", "res/avatars/dany.jpg");
            break;
        default:
            break;
    }   
}