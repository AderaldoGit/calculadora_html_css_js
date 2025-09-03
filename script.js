const inputsA = document.getElementById("preview-inputsA");
const operador_selected = document.getElementById("operator_user");
const inputsB = document.getElementById("preview-inputsB");
const pre_results = document.getElementById("pre_result");

function inputs_user(command) {
  if (operador_selected.textContent == "") {
    inputsA.textContent = inputsA.textContent + command;
  } else {
    inputsB.textContent = inputsB.textContent + command;
    const result = operacoes(inputsA.textContent, inputsB.textContent, operador_selected.textContent);
    pre_results.textContent = result;
  }
}

function operations_user(command) {
  console.log(`Operação: ${command}`);
  if (operador_selected.textContent == "") {
    operador_selected.textContent = command;
  } else if (pre_results.textContent != "") {
    inputsA.textContent = pre_results.textContent;
    inputsB.textContent = "";
    operador_selected.textContent = command;
  } else {
    const result = operacoes(inputsA.textContent, inputsB.textContent, command);
    pre_results.textContent = result;
    inputsA.textContent = result;
    inputsB.textContent = "";
  }
}

function backspace() {
  if (operador_selected.textContent == "") {
    let linha = inputsA.textContent.slice(0, -1);
    inputsA.textContent = linha;
  } else {
    let linha = inputsB.textContent.slice(0, -1);
    inputsB.textContent = linha;
    const result = operacoes(inputsA.textContent, inputsB.textContent, operador_selected.textContent);
    pre_results.textContent = result;
  }
}

function clearDisplay() {
  inputsA.textContent = "";
  operador_selected.textContent = "";
  inputsB.textContent = "";
  pre_results.textContent = "";
}

function calculate() {
  if (inputsA.textContent != "" && inputsB.textContent != "" && operador_selected.textContent != "") {
    const result = operacoes(inputsA.textContent, inputsB.textContent, operador_selected.textContent);
    inputsA.textContent = result;
    operador_selected.textContent = "";
    inputsB.textContent = "";
  }
}

function convert(valor) {
  if (valor.indexOf(".") >= 0) {
    return parseFloat(valor);
  }

  return parseInt(valor);
}

function operacoes(num1, num2, operador) {
  const valor1 = convert(num1);
  const valor2 = convert(num2);

  switch (operador) {
    case "/":
      return valor1 / valor2;
    case "*":
      return valor1 * valor2;
    case "-":
      return valor1 - valor2;
    case "+":
      return valor1 + valor2;
  }
}
