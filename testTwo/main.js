// 1
const regExp = /^\d+$/;

const number = (str) => {
    return regExp.test(str);
}

console.log("12345", number("12345"));
console.log("12a45", number("12a45"));

// 2

const timer = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

timer();


// 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

// 4


const block = document.querySelector(".block");

block.addEventListener("click", () => {
    block.classList.toggle("red");
});

// 5


const request = new XMLHttpRequest()
request.open("GET","main.json")
request.setRequestHeader("Content-type", "application/json")
request.send()
request.onload = () => {
    const response = JSON.parse(request.responseText);
    console.log(response);
}


