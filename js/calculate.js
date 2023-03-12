


/* funcao eval e  o aviso de erro  */
export default function calculate() {
    const resultado = document.getElementById("result");

    resultado.value = "ERROR";
    resultado.classList.add("error");
    const result = eval(input.value);
    resultado.value = result;
    resultado.classList.remove("error");
}