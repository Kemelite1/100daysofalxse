'use strict';

const friends = ['Bovi', 'Maria', 'Dozie', 'Gigi', 'Saheed', 'Val', 'Dayemi', 'Nandom', 'Israel', 'Zoe']

//accessing elements
console.log(friends[0]);
console.log(friends[5]); 

//the push method
friends.push('Becky');
console.log(friends);

//pop method
let removedFriend = friends.pop();
console.log(removedFriend);
console.log(friends);

//forEach method
friends.forEach(function(friend){
    console.log(friend)
});

friends.splice(5)

console.log(friends.slice(2, 4));