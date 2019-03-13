var Interaction = (function(){

    let step = 0;

    // define the users here, they should have an ID, Name and an default image
    // max 4 users for now
    let dany = {id: 1, name:"dany", img:"res/avatars/dany.jpg" };
    let dofu = {id: 2, name:"dofu", img:"res/avatars/dofu.jpg" };
    let duarte = {id: 3, name:"duarte", img:"res/avatars/duarte.jpg" };
    let pedro = {id: 4, name:"pedro", img:"res/avatars/pedro.jpg" };

    // this array defined the interactions in the game.
    // It is sorted meaning the interactions will roll from top to bottom
    const interaction = [
        {user: dany, text:"hey pls don't do that", animation:"bounce", timer: 2000, special:null},
        {user: dany, text:"rude", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"waddupnerd", animation:"bounceInRight", timer: 2000, special:null},
        {user: dany, text:"oh hai", animation:"bounce", timer: 1000, special:null},
        {user: dofu, text:"where are the cookies", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"I PAINTED MY HAIR RED", animation:"bounceInDown", timer: 2000, special:null},
        {user: dofu, text:"who cares", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"hellooo", animation:"bounceInRight", timer: 2000, special:null},
        {user: dany, text:"well we're a crowd already", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"TOO MANY PEOPLE TBH", animation:"tada", timer: 1000, special:null},
        {user: duarte,  text:"GAY", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"...", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"pedro fuck off", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"but i love you duarte senpai", animation:"bounce", timer: 2000, special:null},
        {user: dany, text:"guys please chill", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"fuck this", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"what the fuck", animation:"bounce", timer: 1000, special:null},
        {user: pedro, text:"HAHAHA", animation:"bounce", timer: 750, special:null},
        {user: duarte, text:"stop laughing", animation:"pulse", timer: 1000, special:null},
        {user: duarte, text:"i swear to god", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"this is so fucking dumb", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"you fucking autistic weeb", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"im gonna go there", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"and rip ur weeb arms off", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"ur all gonna die", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"im the villain of this shit", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"i don't even let animations play out", animation:"", timer: 750, special:null},
        {user: duarte, text:"get the fuck off my screen nibbas", animation:"", timer: 750, special:null},
        {user: duarte, text:"and stay down there", animation:"", timer: 750, special:null},
        {user: duarte, text:"oh yeah now this is my place", animation:"", timer: 750, special:null},
        {user: duarte, text:"ahahahahha", animation:"", timer: 750, special:null},
        {user: duarte, text: "im suicidal as fuck boiii", animation:"", timer: 750, special:null},
        {user: duarte, text:"btw i deleted pedro off my steam L M A O", animation:"bounce", timer: 3000, special:null},
        {user: dany, text:"im baaaaaaaaaaaaack", animation:"bounce", timer: 2000, special:null},
        ];

    var getInteraction = function() {
        console.log(`Executing interaction no. ${step}`);
        
        let interact = interaction[step];
        step++;
        return interact;
    }

    return {
        getInteraction: getInteraction
    };

})();