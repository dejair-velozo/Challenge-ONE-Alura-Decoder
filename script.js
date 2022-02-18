const brandInput = document.querySelector("#input-texto");
brandInput.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }
}

const btnCripto = document.querySelector("#btn-cripto");

btnCripto.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#input-texto");

    const value = name.value;

    var texto = value;

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    document.getElementById("msg").value = texto;
    console.log(texto);

    document.getElementById("msgcripto").innerHTML = "Mensagem criptografada:"
})


const btnDescripto = document.querySelector("#btn-descripto");

btnDescripto.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#input-texto");

    const value = name.value;

    var texto = value;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    document.getElementById("msg").value = texto;
    console.log(texto);

    document.getElementById("msgcripto").innerHTML = "Mensagem descriptografada:"
})

let btnCopy = document.querySelector("#btn-copy");

btnCopy.addEventListener("click", function(e) {

    e.preventDefault();

    let mensagem = document.querySelector("#msg");
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Seu texto foi copiado.");
})