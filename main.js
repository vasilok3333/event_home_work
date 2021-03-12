// Task 1 

let span = document.getElementById("text");
let input = document.getElementById("input");


document.addEventListener("keydown", (evt) => {
  if (evt.altKey && evt.code == "KeyA") { 
    evt.preventDefault();
    span.style.display = "none";
    input.style.display = "inline-block";
    input.focus();
  }
  if (evt.shiftKey && evt.code == "KeyS") {
    evt.preventDefault();
    span.style.display = "inline-block";
    input.style.display = "none";
    span.innerText = input.value;
    if (span.innerHTML.length == 0) {
      span.innerHTML = "Очікую на введення даних"
    }
    
}
  }
);

// TASK 2 

let span2 = document.getElementById("text2");
window.addEventListener("load", () => {
  if (innerWidth < 600) {
    span2.innerHTML = "Ви використовуєте мобільну версію";
  } if (innerWidth > 600) {
    span2.innerHTML = "Ви використовуєте десктопну версію";
  }
}
)
window.addEventListener("resize", () => {
  if (innerWidth < 600) {
    span2.innerHTML = "Ви використовуєте мобільну версію";
    console.log("Ви використовуєте мобільну версію") 
  } if (innerWidth > 600) {
    span2.innerHTML = "Ви використовуєте десктопну версію";
    console.log("Ви використовуєте десктопну версію") 
  }
})

// TASK 3 

let input3 = document.getElementById("input3");
let span3 = document.getElementById("text3");


input3.addEventListener("input", (evt) => {
  span3.innerHTML = input3.value;
  console.log(input3.value)
})

// TASK4


let modal = document.getElementById("modal");

document.addEventListener("keydown", (evt) => {
  if (evt.altKey && evt.code == "KeyO") {
    modal.classList.add("active");
  }
  if (evt.altKey && evt.code == "KeyC") {
    modal.classList.remove("active");
  }
})



// TASK 5 

let btn_open = document.querySelector(".button-open");
console.log(btn_open);
let btn_close = document.querySelector(".button-close");
let modalWindow = document.querySelector(".modal-absolute");
console.log(modalWindow)

btn_open.addEventListener("click", () => {
  modalWindow.classList.add("active");
  btn_open.style.opacity = "0";
  console.log(modalWindow)

})

btn_close.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  btn_open.style.opacity = "1";
})





