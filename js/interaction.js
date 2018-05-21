var Interaction = (function(){

    const interaction = [
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", animation:"flash", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"rude", animation:"pulse", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"waddupnerd", animation:"shake", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", animation:"headShake", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"do what", animation:"swing", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"this is a test", animation:"tada", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"aaaayayyaya", animation:"wobble", special:null}
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