let counter = 0;

let number = document.querySelector('#number1');
let number2 = document.querySelector('#output');
let btnPlus = document.querySelector('#plus');
let btnMinus = document.querySelector('#minus');

function plus() {
    let num = number.value;
    counter = counter += Number(num);
    number2.textContent = counter;
    if (counter < 0){
        number2.style.color = 'red';
    }else if (counter > 0) {
        number2.style.color = 'black';
    };
};

function minus() {
    let num = number.value;
    counter = counter -= Number(num);
    number2.textContent = counter;
    if (counter < 0){
        number2.style.color = 'red';
    }else if (counter > 0) {
        number2.style.color = 'black';
    };
}

btnPlus.addEventListener("click", function() {
    plus();
});

btnMinus.addEventListener("click", function() {
    minus();
});