var Interaction = (function(){
    let step = 0;

    let user1 = {id: 1, classid : "#user_1", name:"user1", isVisible:true, src: "res\\avatars\\dany.jpg" };
    let user2 = {id: 2, classid : "#user_2", name:"user2", isVisible:false, src: "res\\avatars\\dofu.jpg" };
    let user3 = {id: 3, classid : "#user_3", name:"user3", isVisible:false, src: "res\\avatars\\duarte.jpg" };
    let user4 = {id: 4, classid : "#user_4", name:"user4", isVisible:false, src: "res\\avatars\\pedro.jpg" };

    let users = [user1, user2, user3, user4];

    // this array defined the interactions in the game.
    // It is sorted meaning the interactions will roll from top to bottom
    const interaction = [
        {user: user1, text:"test1", animation:"bounce", timer: 2000, special:null},
        {user: user1, text:"test2", animation:"bounce", timer: 2000, special:null},
        {user: user2, text:"test3", animation:"bounceInRight", timer: 2000, special:null},
        {user: user1, text:"test4", animation:"bounce", timer: 1000, special:null},
        {user: user2, text:"test5", animation:"bounce", timer: 2000, special:null},
        {user: user3, text:"test6", animation:"bounceInTop", timer: 2000, special:null},
        {user: user2, text:"test7", animation:"bounce", timer: 2000, special:null},
        {user: user4, text:"test8", animation:"bounceInRight", timer: 2000, special:null},
        {user: user1, text:"test9", animation:"bounce", timer: 2000, special:null},
        {user: user2, text:"test10", animation:"tada", timer: 1000, special:null},
        {user: user3, text:"test11", animation:"bounce", timer: 2000, special:null},
        {user: user4, text:"test12", animation:"bounce", timer: 2000, special:null},
        {user: user3, text:"test13", animation:"bounce", timer: 2000, special:null},
        {user: user4, text:"test14", animation:"bounce", timer: 2000, special:null},
        {user: user1, text:"test15", animation:"bounce", timer: 2000, special:null},
        {user: user2, text:"test16", animation:"bounce", timer: 2000, special:null},
        {user: user3, text:"test17", animation:"bounce", timer: 1000, special:null},
        {user: user4, text:"test18", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test19", animation:"pulse", timer: 1000, special:null},
        {user: user1, text:"test20", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test21", animation:"pulse", timer: 750, special:null},
        {user: user1, text:"test22", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test23", animation:"pulse", timer: 750, special:null},
        {user: user1, text:"test24", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test25", animation:"pulse", timer: 750, special:null},
        {user: user1, text:"test26", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test27", animation:"bounce", timer: 750, special:null},
        {user: user1, text:"test28", animation:"bounce", timer: 750, special:null},
        {user: user3, text:"test29", animation:"bounce", timer: 750, special:null},
        {user: user1, text:"test30", animation:"bounce", timer: 750, special:null},
        {user: user1, text:"test31", animation:"bounce", timer: 2000, special:null},
        {user: user2, text:"test32", animation:"bounce", timer: 2000, special:null},
    ];

    var getInteraction = function() {
        console.log(`Executing interaction no. ${step}`)
        let interact = interaction[step];
        step++;
        return interact;
    }

    var getCharacters = function() {
        return users;
    }

    var toggleVisibility = (user, visibility) => {
        user.IsVisible = visibility;
    }

    return {
        getInteraction: getInteraction,
        getCharacters : getCharacters,
        toggleVisibility : toggleVisibility
    };

})();