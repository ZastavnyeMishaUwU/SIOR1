let radioButtons = document.querySelectorAll('.input');
let submitButton = document.querySelector('.button');
let salle = document.querySelector('.salle');
let viev = document.querySelector('.viev')
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');

b1.onclick = function(){
salle.textContent = "57 300 грн";
viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
} 
b2.onclick = function(){
  salle.textContent = "46 550 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b3.onclick = function(){
  salle.textContent = "51 670 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b4.onclick = function(){
  salle.textContent = "44 190 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b5.onclick = function(){
  salle.textContent = "49 330 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b6.onclick = function(){
  salle.textContent = "66 420 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b7.onclick = function(){
  salle.textContent = "64 180 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b8.onclick = function(){
  salle.textContent = "96 860 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b9.onclick = function(){
  salle.textContent = "169 100 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
  }       
for(let radioButton of radioButtons){
  submitButton.onclick = function() {
    let evaluation = radioButton.getAttribute('data-evaluation');
    if (evaluation === 'good') {
      submitButton.disabled = false;
      alert("Товар в кошику");
    }
  };
};


