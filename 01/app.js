// let a = 5;
// const b = 2;
// const myName = "yeong"
//
// console.log(a + b);
// console.log(myName);

/*Array*/
// const daysOfWeek = ["mon" , "tue" , "wed" , "thu", "fri", "sat"];

// console.log(daysOfWeek);

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

//const player = {
//   name: "yeong",
//    sayHello: function(otherPersonsName){
//       console.log("my name is" + otherPersonsName)
//    }
//};

//player.sayHello("ddeonung")

/*const 와 let 
UNdefined는 변수에 값을 부여하지 않은 상태*/

//let hello;
//console.log(hello); //undefined

//const me = "cute"
//const days = [1, 2, false, true, null, undefined,"fd", me];

// const player = {
//     name: "Nivo",
//     age: 98,
// };
// console.log(player);
// player.name = "seonyeong";
// console.log(player);

// player.cute = "soon";
// console.log(player);

// function plus(a, b) {
//     console.log(a + b);
// }

// plus(5, 10);

// const calculator = {
//     add: function(a, b){
//        return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     divide: function(a, b){
//        return a / b;
//     },
//     times: function(a, b){
//        return a * b;
//     }
// };

// calculator.add(5, 1);
// calculator.minus(6, 1);

// const age = 97;
// function calculateKrAge(ageOfForeigner){
//    return ageOfForeigner + 2; //계산을 담당하는 function의 코드는 그 function아 return하는 값과 같아짐
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);

// //type change
// const age = parseInt(prompt("how old are you?")); //자바 스크립트를 일시정지 시킴

// console.log(age);

//conditional
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age)) {
//    console.log("please write a number");
// }
// else {
//    console.log("Thank you for your writing");
// }

//conditional 2
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age > 18) {
  console.log("you can drink");
} else {
  console.log("you are too young");
}

//condition 3

//= value 할당
//=== 값이 같음
//!== 아니라면
