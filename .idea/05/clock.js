const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

// setInterval(sayHello, 5000)

getClock();//getclock()으로 시간을 먼저 호출해주고
setInterval(getClock, 1000);//setInterval로 1초마다 갱신
