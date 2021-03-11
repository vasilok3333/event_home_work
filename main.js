let span = document.getElementById("text");
let input = document.getElementById("input");

document.addEventListener("keydown", (evt) => {
    if (evt.altKey && evt.key == "a") {
        span.style.display = "none";
        input.style.display="block"
    }
})



document.addEventListener("keydown", (evt) => {
    if (evt.shiftKey && evt.key == "s" ) {
        span.style.display = "block";
        input.style.display = "none";
        span.textContent = input.value;
        alert("11111");

    }
}, { useCapture: true }) /* я ніяк не можу зрозуміти. я хочу, щоб при натисканні alt + a - 
замість span появлявся input, де вводиш текст, після чого натискаєш shift + s і типу той текст стає значенням span.         
з alt+a - працює, але shift + s - не працює, бо воно по дефолту просто збільшує букву, і я пробув з preventDefault(), але мені шось не виходить */


