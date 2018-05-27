var Interaction = (function(){

    const interaction = [
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", animation:"bounce", timer: 2000, special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"rude", animation:"bounce", timer: 2000, special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"waddupnerd", animation:"bounceInRight", timer: 2000, special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"oh hai", animation:"bounce", timer: 1000, special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"where are the cookies", animation:"bounce", timer: 2000, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"I PAINTED MY HAIR RED", animation:"bounceInDown", timer: 2000, special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"who cares", animation:"bounce", timer: 2000, special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"hellooo", animation:"bounceInRight", timer: 2000, special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"well we're a crowd already", animation:"bounce", timer: 2000, special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"TOO MANY PEOPLE TBH", animation:"tada", timer: 1000, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"GAY", animation:"bounce", timer: 2000, special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"...", animation:"bounce", timer: 2000, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"pedro fuck off", animation:"bounce", timer: 2000, special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"but i love you duarte senpai", animation:"bounce", timer: 2000, special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"guys please chill", animation:"bounce", timer: 2000, special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"fuck this", animation:"bounce", timer: 2000, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"what the fuck", animation:"bounce", timer: 1000, special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"HAHAHA", animation:"bounce", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"stop laughing", animation:"pulse", timer: 1000, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"i swear to god", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"this is so fucking dumb", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"you fucking autistic weeb", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"im gonna go there", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"and rip ur weeb arms off", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"ur all gonna die", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"im the villain of this shit", animation:"pulse", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"i don't even let animations play out", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"get the fuck off my screen nibbas", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"and stay down there", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"oh yeah now this is my place", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"ahahahahha", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text: "im suicidal as fuck boiii", animation:"", timer: 750, special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"btw i deleted pedro off my steam L M A O", animation:"bounce", timer: 3000, special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"im baaaaaaaaaaaaack", animation:"bounce", timer: 2000, special:null},
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