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

/*player 자체를 바꿀 순 없지만 player의 내용을 바꿀 순 있음*/
const player = {
    name: "yeong",
    points: 10,
    fat: false,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "potato";/*데이터 추가가능*/

console.log(player)
player.fat = false;