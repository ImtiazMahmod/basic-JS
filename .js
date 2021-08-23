/* 
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

const friends = ['abul','hablu','abdullah','hamdan'];

//function call
const myfriend = perfectFriend(friends);
console.log(myfriend);   */

// process.stdout.write("Hello, World."+"\n" + "Hello dear");
/* var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    let int = 12;
    let double = 4.0;
    let string = 'is the best place to learn and practice coding!';
    // Print the sum of both integer variables on a new line.
    console.log(i+int + '\n');
    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d+double) +'\n');
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+string +'\n'); */

    // var a;
    // let b;
    // a= 4.0;
    // b= 4.0;
    // console.log(parseFloat(a+b).toFixed(1));


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let i= 0; i<s.length; i++){
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
        {
            console.log(s[i]);
        }
        else{
        console.log(s[i]);
        }
    }
    
}

