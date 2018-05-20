let audio = new Audio('file/bart.mp3');
let twoEnabled = false;

const interaction = [
    {name:"dany", img:"res/avatars/dany.jpg", text:"ｄａｎｙｂｏｓｓ　コッ猿", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"rude", special:enableTwo, name2: "dofu"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"oh hai dofu", special:null, img2:"res/avatars/dofu.jpg", text2:"oh hai"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"oh yeah I can talk", special:null, img2:"res/avatars/dofu.jpg", text2:"thats just amazing then"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"suprising huh", special:null, img2:"res/avatars/dofu.jpg", text2:"who are you even talking to?"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"is this even talking though?", special:null, img2:"res/avatars/dofu.jpg", text2:"yeah it is dumbass"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"anyway you can call me Dany", special:null, img2:"res/avatars/dofu.jpg", text2:"call me faglord6000"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"I bet you're wondering how much I can talk right?", special:null,img2:"res/avatars/dofu.jpg", text2:"a lot"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"dofu pls", special:null,img2:"res/avatars/dofu.jpg", text2:"lmao this nigga"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"PLS", special:null,img2:"res/avatars/dofu.jpg", text2:"im out of here"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"this can't go on forever right", special:disableTwo, img2:"res/avatars/duarte.jpg", text2:"HELLO"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"well I got bad news for you uwu", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"answer is yeah this won't stop", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"i can do some cool stuff in here too", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"i'm gonna summon a fox", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"*does black magic*", special:enableTwo, name2:"duarte"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"hello fox", special:null, img2:"res/avatars/duarte.jpg", text2:"IM A FURRY"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"oh...", special:null, img2:"res/avatars/duarte.jpg", text2:"IM SUPER <b>GAY</b>"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"aight then", special:null, img2:"res/avatars/duarte.jpg", text2:"huahuhueheuh"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"hmm", special:null, img2:"res/avatars/duarte.jpg", text2:"*sees other fox* *runs off*"},
    {name:"dany", img:"res/avatars/dany.jpg", text:"well that happened", special:disableTwo},
    {name:"dany", img:"res/avatars/dany.jpg", text:"maybe i'll even scare you c:<", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"I won't :3", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"or will I", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"wondering how i can scare you?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"in here i can do anything", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"BOOOOO", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"ahah gotchu x3", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"so, how did you find me?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"steam I bet", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"danyboss's profile?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"don't you have anything else better to be doing?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"...", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"im actually kind of glad you want to stay here", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"gets pretty lonely", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"at least its aesthetic right", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"dofu is a fgt", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"oh sorry i just wanted to say that", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"sooooo ...", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"how are you?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"are you?", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"you know what i'm asking right", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"look up", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"okay then keep doing this", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"ur a meme", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
    {name:"dany", img:"res/avatars/dany.jpg", text:"okay have a cookie", special:null},
    ];

let counter = 0;
let animationEnter = ["bounceIn","bounceInDown","bounceInLeft","rollIn","flipInX"],
    animationExit = ["bounceOut","bounceOutLeft","rollOut","flipOutX"],
    prevAnimEnter = "bounceIn",
    prevAnimExit = "bounceOut";

$(document).ready(()=>{
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

    $(".section").removeClass(prevAnimEnter);
    $(".section").addClass('animated ' + newExit);
    prevAnimExit = newExit;

    setTimeout(() => {
        counter++;
        $("#first .avatar").attr("src", interaction[counter].img);
        $("h1", "#first").text(interaction[counter].text);

        // if two players are enabled
        if(twoEnabled) {
            $("#second .avatar").attr("src", interaction[counter].img2);
            $("h1", "#second").text(interaction[counter].text2);
        }

    }, 700)

    setTimeout(() => {
        if(interaction[counter].special){
            interaction[counter].special.call(null, interaction[counter].name2);
        }
        $(".section").removeClass(prevAnimExit);
        $(".section").addClass('animated ' + newEntry);
        prevAnimEnter = newEntry;

        $(this).on("click", avatarAnim);
    }, 1500)
}

function enableTwo(name){
    console.log("eanbling" + name);
    $("#second").removeClass();
    $("#second").addClass("section " + name + " animated bounceIn");
    $("#second").show();
    twoEnabled = true;
}

function disableTwo(){
    $("#second").hide();
    twoEnabled = false;
}