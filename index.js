const main = document.querySelector("main");
const input = document.getElementById("input");
const resultado = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("equal").addEventListener("click", calculate);

/* funcao eval e  o aviso de erro  que sera implementado futuramente   */
function calculate() {
  resultado.value = "ERROR";
  resultado.classList.add("error");
  const result = eval(input.value);
  resultado.value = result;
  resultado.classList.remove("error");
}
/* botão clear */
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});
/*  tecla enter, backspace e limitacao de teclas */
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});
/* botão copy */
document.getElementById("copyResult").addEventListener("click", function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultado.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});
