console.log("Проверка")

// 1
const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));

// 2

const time = (a = 0, b = 1) => {
    if (a > 144) return;
    console.log(a)
    setTimeout(() => time(b, a + b), 1000);
};

time();

// 3

const request = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const product = await response.json();
        product.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error("ошибка", error);
    }
};

request();

//4

const buttons = document.querySelector("#buttons")

buttons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const buttonClass = event.target.classList[0];
        if (buttonClass) {
            document.body.style.backgroundColor = buttonClass;
        }
    }
});

//5

const square = document.getElementById("square");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    if (square.style.display === "none") {
        square.style.display = "block";
    } else {
        square.style.display = "none";
    }
});

//6

const counterElement = document.querySelector("#counter")

let counter = 0;

const intervalId = setInterval(() => {
    counter++;
    counterElement.textContent = counter;

    if (counter >= 100) {
        clearInterval(intervalId);
    }
}, 1);

//7

async function data() {
    try {
        const response = await fetch("any.json");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка", error);
    }
}

const fetchDataButton = document.querySelector("#data")
fetchDataButton.addEventListener("click", data);

