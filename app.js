// let a = 5;
// const b = 2;
// const myName = "yeong"
//
// console.log(a + b);
// console.log(myName);

/*Array*/
// const daysOfWeek = ["mon" , "tue" , "wed" , "thu", "fri", "sat"];
//
// console.log(daysOfWeek);
//
// daysOfWeek.push("sun");
//
// console.log(daysOfWeek);
//
// const toBuy = ["potato", "tomato"];
//
// console.log(toBuy[1]);

// const playerName ="yeong";
// const playerPoints = 121212;
// const playerPretty = true;
// const playerFat = "nope";
//
// /*위의 코드들은 비효율적 -> player.name*/
//
// /*아래의 배열은 뭘 의미하는지 알 수 없어 이렇게 설명해줘야함
// player[0] == name
// player[1] == points*/
// const player = ["yeong", 121212, false, "nope"];

/*
Object
player 자체를 바꿀 순 없지만 player의 내용을 바꿀 순 있음*/
// const player = {
//     name: "yeong",
//     points: 10,
//     fat: false,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
//
// player.lastName = "potato";/*데이터 추가가능*/
//
// console.log(player)
// player.fat = false;/*데이터 업데이트*/

/*function 계속 사용할 수 있는 조각*/

// function sayHello(nameOfPerson, age){
//     /*argument를 받는 방법*/
//     console.log("Hello my name is" + nameOfPerson + "and I'm" + age);
// }
//
// /*function에 argument를 보내는 방법*/
// sayHello("yeong", 20);
// sayHello("nico", 10);
// sayHello("hong",5);

// function plus(a,b){
//     console.log(a + b);
// }
// plus(8 , 60);

// const player = {
//     name: "yeong",  //name=property
//     sayHello: function(otherPersonsName){
//         console.log("my name is" + otherPersonsName)
//     }
// };
//
// player.sayHello("ddeonung");

/*const는  변경할 수 없음 변수를 바꾸려면 let사용(update), var 사용 금지*/


