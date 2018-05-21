var Interaction = (function(){

    const interaction = [
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"rude", special:enableTwo, name2: "dofu"},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"waddupnerd", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"do what", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"this is a test", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"aaaayayyaya", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"oh hai dofu", special:null, img2:"res/avatars/dofu.jpg", text2:"oh hai"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"oh yeah I can talk", special:null, img2:"res/avatars/dofu.jpg", text2:"thats just amazing then"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"suprising huh", special:null, img2:"res/avatars/dofu.jpg", text2:"who are you even talking to?"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"is this even talking though?", special:null, img2:"res/avatars/dofu.jpg", text2:"yeah it is dumbass"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"anyway you can call me Dany", special:null, img2:"res/avatars/dofu.jpg", text2:"call me faglord6000"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"I bet you're wondering how much I can talk right?", special:null,img2:"res/avatars/dofu.jpg", text2:"a lot"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"dofu pls", special:null,img2:"res/avatars/dofu.jpg", text2:"lmao this nigga"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"PLS", special:null,img2:"res/avatars/dofu.jpg", text2:"im out of here"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"this can't go on forever right", special:disableTwo, img2:"res/avatars/duarte.jpg", text2:"HELLO"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"well I got bad news for you uwu", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"answer is yeah this won't stop", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"i can do some cool stuff in here too", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"i'm gonna summon a fox", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"*does black magic*", special:enableTwo, name2:"duarte"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hello fox", special:null, img2:"res/avatars/duarte.jpg", text2:"IM A FURRY"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"oh...", special:null, img2:"res/avatars/duarte.jpg", text2:"IM SUPER <b>GAY</b>"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"aight then", special:null, img2:"res/avatars/duarte.jpg", text2:"huahuhueheuh"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hmm", special:null, img2:"res/avatars/duarte.jpg", text2:"*sees other fox* *runs off*"},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"well that happened", special:disableTwo},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"maybe i'll even scare you c:<", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"I won't :3", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"or will I", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"wondering how i can scare you?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"in here i can do anything", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"BOOOOO", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"ahah gotchu x3", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"so, how did you find me?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"steam I bet", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"danyboss's profile?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"don't you have anything else better to be doing?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"...", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"im actually kind of glad you want to stay here", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"gets pretty lonely", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"at least its aesthetic right", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"dofu is a fgt", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"oh sorry i just wanted to say that", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"sooooo ...", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"how are you?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"are you?", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"you know what i'm asking right", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"look up", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"okay then keep doing this", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"ur a meme", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:":^)", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"okay have a cookie", special:null},
        ];
    
    let step = 0;

    var getInteraction = function() {
        console.log("playing interaction number: " + step)
        let interact = interaction[step];
        step++;
        return interact;
    }

    return {
        getInteraction: getInteraction
    };

})();