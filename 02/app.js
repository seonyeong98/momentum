//document 는 우리가 html에 접근할 수 있는 방법
//document.getElementById()
// -> string을 전달 받는 함수, html에서 id를 통해 element를 찾아줌
// const title = document.getElementById("title");
// console.dir(title);

// const rtitle = document.getElementById("title");

// title.innerText = "change";

//browser에서 사용할 수 있는document라는 object

//uncaught TypeError: Cannot set property 'innerText' of...null
// -> title이 존재하지 않으니 title 내부의 innertext를 호출하지 마십시오

// const hellos = document.getElementsByClassName("hello");
// //위 코드의 클래스 네임은 html의 클래스 네임과 같아야함
// //많은 element를 한 번애 가지고 와야 할 때 사용
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

//querySelector: element를 css방식으로 검색 가능, 첫 번째 element만 가져옴
//모든 element를 가져오고 싶다면 querySelectAll 대신 array로 가져옴
const title = document.querySelectorAll("div h1");
console.log(title);

//event
