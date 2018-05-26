var Interaction = (function(){

    const interaction = [
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", animation:"bounce", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"rude", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"waddupnerd", animation:"bounceInRight", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"hey pls don't do that", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"do what", animation:"bounce", special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"I PAINTED MY HAIR RED", animation:"bounceInDown", special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"wow", animation:"bounceInRight", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"BOP", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"AAAAAA", animation:"bounce", special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"GAY", animation:"bounce", special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"...", animation:"bounce", special:null},
        {user: 3, name:"duarte", img:"res/avatars/duarte.jpg", text:"wew a gurl", animation:"bounce", special:null},
        {user: 4, name:"pedro", img:"res/avatars/pedro.jpg", text:"wew a furry", animation:"bounce", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"fucking kek", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"fuck this bitches", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"What the fuck", animation:"bounce", special:null},
        {user: 1, name:"dany", img:"res/avatars/dany.jpg", text:"this is about to end", animation:"bounce", special:null},
        {user: 2, name:"dofu", img:"res/avatars/dofu.jpg", text:"its done", animation:"bounce", special:null}
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