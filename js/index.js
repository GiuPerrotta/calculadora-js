//imports
import calculate from "./calculate.js";
import clear from "./clear.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress, handleTyping } from "./keyHandlers.js";


const main = document.querySelector("main");



//pressionar do botão
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
});

// calcular
document.getElementById("equal").addEventListener("click", calculate);


/* botão clear */
document.getElementById("clear").addEventListener("click", clear )


/*  tecla enter, backspace e limitacao de teclas */
document.getElementById("input").addEventListener("keydown",handleTyping )

//botão copiar resultado
document.getElementById("copyResult").addEventListener("click", copyToClipboard)