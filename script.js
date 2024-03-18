document.addEventListener("DOMContentLoaded", function() {
    const btnCriptografar = document.querySelector(".btn-criptografar");
    const btnDescriptografar = document.querySelector(".btn-descriptografar");
    const boneco = document.querySelector(".conteudoimagem");
    const conteudoParagrafo = document.querySelector(".conteudoparagrafo");
    const textoResultado = document.querySelector(".textoresultado");
    const caixaTexto = document.querySelector(".caixadetexto");

    btnCriptografar.addEventListener("click", criptografar);
    btnDescriptografar.addEventListener("click", descriptografar);

    function criptografar() {
        ocultarElementos();
        textoResultado.textContent = criptografarTexto(caixaTexto.value);
    }

    function descriptografar() {
        ocultarElementos();
        textoResultado.textContent = descriptografarTexto(caixaTexto.value);
    }

    function ocultarElementos() {
        boneco.style.display = "none";
        conteudoParagrafo.style.display = "none";
    }

    function criptografarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoFinal += "ai";
                    break;
                case "e":
                    textoFinal += "enter";
                    break;
                case "i":
                    textoFinal += "imes";
                    break;
                case "o":
                    textoFinal += "ober";
                    break;
                case "u":
                    textoFinal += "ufat";
                    break;
                default:
                    textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function descriptografarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoFinal += "a";
                    break;
                case "e":
                    textoFinal += texto.slice(i, i + 4);
                    i += 3;
                    break;
                case "i":
                    textoFinal += texto.slice(i, i + 3);
                    i += 2;
                    break;
                case "o":
                    textoFinal += texto.slice(i, i + 3);
                    i += 2;
                    break;
                case "u":
                    textoFinal += texto.slice(i, i + 3);
                    i += 2;
                    break;
                default:
                    textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", function() {
        var conteudo = textoResultado.textContent;
        navigator.clipboard.writeText(conteudo);
        console.log("Texto copiado: " + conteudo);
    });
});
