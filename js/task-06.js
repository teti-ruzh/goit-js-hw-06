const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onCheckData);

function onCheckData(event) {
  event.preventDefault();
    const enteredData = event.currentTarget.value.trim();
    const dataToCompare = Number(inputRef.dataset.length);
    
  if (enteredData.length === dataToCompare) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  } 
  return inputRef.classList.add('invalid');
}
