const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

// evita evitar o formulário
e.preventDefault();

const name = document.querySelector("#name");

const value = name.value;

console.log(value);

});
