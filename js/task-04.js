
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');


let counterValue = 0;


decrementButton.addEventListener('click', (event) => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
});


incrementButton.addEventListener('click', (event) => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
});