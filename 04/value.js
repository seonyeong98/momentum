// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
//
// loginButton.addEventListener("click", handleLoginBtnClick);//click event가
//발생했을 시 onLoginSubmit함수 실행
////버튼 이벤트 적용, 값 빋이오기
// function  handleLoginBtnClick() {
//     const username = loginInput.value;
//     if(username === "") {
//         alert("please write your name");
//     } else if(username.length > 15) {
//         console.log("your name is too long");
//     }
// }
//input의 유효성 검사를 하기 위해 input아 form 안에 있어야

//submit event
//const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
//
// const link = document.querySelector("a");
//
// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }
//
// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
// }
//
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

//Event
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username"; // 반복되는 string들은 대문자 변수로 저장

function OnLoginSubmit(event){
    event.preventDefault();//event의 원래 행동 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME);//form 숨김
    const username = loginInput.value;//loginInput.value를 username이라는 변수로 저장
    localStorage.setItem(USERNAME_KEY, username);//username값을 인자로 넣어주고
    // ㅎgreeting안애 텍슽츠 넣어줌
    paintingGreetings(username)
}

function paintingGreetings(username) {
    greeting.innerText = `Hello ${username}` ;
    greeting.classList.remove(HIDDEN_CLASSNAME);// greeting 보여주기
}

loginForm.addEventListener("submit", OnLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { //저장된 이름이 없을때, form의 hiddenclass 지움
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form숨겨진 클래스 삭제
    loginForm.addEventListener("submit", OnLoginSubmit)//submit event발생하면 onlogin함수 실행
} else {
   paintingGreetings(savedUsername);
}
