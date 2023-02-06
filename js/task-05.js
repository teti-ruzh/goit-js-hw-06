const inputNameRef = document.querySelector('input#name-input');
const outputNameRef = document.querySelector('span#name-output');

inputNameRef.addEventListener('input', onInputChange);

function onInputChange (event) {
   const enteredName = event.currentTarget.value.trim();
    if (enteredName !== "") {
        outputNameRef.textContent = enteredName;   
} else {
    return outputNameRef.textContent = 'Anonymous';}    
};

