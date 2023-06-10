let display = document.getElementById('display');
let history = [];

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
    history.push(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

// Puedes guardar el historial en un repositorio o utilizar otra forma de almacenamiento persistente, como una base de datos o localStorage.
// Aquí simplemente mostramos el historial en la consola del navegador.
console.log(history);
