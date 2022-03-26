const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    /*padStart()내가 갖고있는 String을 보다 길게 만들어야할 때 시용*/
}

// setInterval(sayHello, 5000)

getClock();//getclock()으로 시간을 먼저 호출해주고
setInterval(getClock, 1000);//setInterval로 1초마다 갱신
