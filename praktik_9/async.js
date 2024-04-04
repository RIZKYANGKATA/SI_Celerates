// Callback
function myDisplayer(text) {
    console.log(text);
}

const myFirst = () => {
    myDisplayer("Haloooo");
}

function mySecond() {
    myDisplayer("Haloooo 2");
}

myFirst();
mySecond();

//SetTimeOut
console.log("Print First");
setTimeout(() => {
    console.log("Print This after 3 sec");
}, 3000);
console.log("Print Second");

//SetInterval
const setTime = () => {
    const time = document.getElementById("time");
    time.textContent = new Date().toLocaleString;
};

const intervalTime = setInterval(setTime, 1000);

setTimeout(() => {
    clearInterval(intervalTime);
    console.log("interval stop");
    console.log("interval finish");
})