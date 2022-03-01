const h1 = document.querySelector("div.hello:first-child h1");

function  handleTitleClick() {
    h1.classList.toggle("clicked");
} //toggle is checking h1 의 classList가 이미 있는지 확인해 있디면 clicked 제거 없다면 clicked추가

h1.addEventListener("click", handleTitleClick)
