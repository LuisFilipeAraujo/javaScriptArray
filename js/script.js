const enviaNome = document.querySelector("#send1");
const enviaIdade = document.querySelector("#send2");

enviaNome.addEventListener("click", function(e){
// evita evitar o formulário
e.preventDefault();
const name = document.querySelector("#name");
const value = name.value;
console.log(value);
});


enviaIdade.addEventListener("click", function(e){
    // evita evitar o formulário
    e.preventDefault();
    const name = document.querySelector("#idade");
    const value = name.value;
    console.log(value);
    });