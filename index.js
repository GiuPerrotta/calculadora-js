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

function calculate() {
  resultado.value = "ERROR";
  resultado.classList.add("error");
  const result = eval(input.value);
  resultado.value = result;
  resultado.classList.remove("error");
}
