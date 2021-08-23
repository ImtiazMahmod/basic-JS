
//problem 04

function perfectFriend(friends){
    for(const friend of friends){
               
        if ( friend.length == 5){
            return friend;
        }       
       
    }
    //not get 5 length friend
    return 'Not get perfect friend, Try again later.';
}

const friends = ['akl','slad',565,6];

//function call
const myfriend = perfectFriend(friends);
console.log(myfriend); 