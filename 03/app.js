const h1= document.querySelector("div.hello:first-child h1");

// // title.innerText = "Hello";
// // //app.js가 있기 때문에 javascript를 통해 html의 내용을 가져올 수 있음
// // console.log(title);
// //
// // title.style.color = "blue";
//
// //event를 listen하는 것
// function handleTitleClick(){
//     h1.style.color = "blue";
// }
//
// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }
//
// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
//
// function handleWindowCopy(){
//     alert("copier!");
// }
//
// function handleWindowOffLine(){
//     alert("SOS no WIFI");
// }
//
// function handleWindowOnLine() {
//     alert("ALL GOOD");
// }
//
// //유저가 title을 click할 경우 JavaScript가 실행버튼을 대신 눌러주길 바라는것
// //handleTitleClick은 event가 발생하묜 호출할 function을 전달
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter );
// h1.addEventListener("mouseleave", handleMouseLeave);
// //winow event
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);