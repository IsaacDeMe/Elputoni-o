//Llamando variables
let contador = 0;
//Funcion de darle al icono
function click_icono(){
    contador++;
    
    if (contador === 1) {
        mostrar_buscador();

    } else if (contador === 2) {
        ocultar_buscador();
        contador = 0;
    }
}

//Funcion ejecutar algo si le das click a esc
document.addEventListener("keyup", function(event){
    if(event.key ==  'Escape'){
        ocultar_buscador();
        ocultar_nav();

    } else if(event.key === "Enter"){
        searchByName();
        ocultar_buscador();
    }
})

function ctn_container(){
    ocultar_buscador();
    if (window.matchMedia("(max-width: 480px)").matches) {
        ocultar_nav();
    }
}

//Funcion de mostrar buscador 
function mostrar_buscador(){
    document.getElementById("input-search").value="";
    document.getElementById("ctn-search").style.top = "50px";
    document.getElementById("input-search").focus();
    document.getElementById("ctn-container").style.display="block";
}

//Funcion de ocultar el buscador
function ocultar_buscador(){
    document.getElementById("ctn-search").style.top = "-12px";
    document.getElementById("ctn-container").style.display="none";
    contador = 0;
}

//Funcion de buscar
function searchByName() {
    var input, filter, cards, cardContainer, h2, i;
    input = document.getElementById("input-search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementsByClassName("card");
    container = document.getElementsByClassName("container")[0];

    for (i = 0; i < cardContainer.length; i++) {
        h2 = cardContainer[i].getElementsByTagName("h2")[0];
        if (h2.innerText.toUpperCase().indexOf(filter) > -1) {
            cardContainer[i].style.display = "";
        } else {
            cardContainer[i].style.display = "none";
        }
    }
}

//Funcion del filtrado de las categorias
function filtrar(categoria) {

    const botones = document.querySelectorAll('.btn');
    // Restablece todos los botones
    botones.forEach(boton => {
        boton.classList.remove('btn-selected');
    });
    // Selecciona el botón que corresponda a la categoría
    const botonSeleccionado = document.querySelector(`.btn[data-categoria="${categoria}"]`);
    if (botonSeleccionado) {
        botonSeleccionado.classList.add('btn-selected');

    }
    const elementos = document.querySelectorAll('.card');

    // Primero filtra los elementos que no coincidan con la categoría
    // Si coinciden, se muestran, de lo contrario, se ocultan
    elementos.forEach(elemento => {
        if (categoria === "todo") {
            elemento.style.display = 'block';
        } else if (elemento.getAttribute('alt') !== categoria) {
            elemento.style.display = 'none';
        } else {
            elemento.style.display = 'block';
        }
    });
}

//Funcion de mostrar etiqueta de los productos
function openModal(id) {
    document.getElementById(id).style.display = "block";

}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

//Funcion de barras
function mostrar_nav(){
    document.getElementById("nav").style.left = "0px";
    document.getElementById("ctn-container").style.display="block";

}

function ocultar_nav(){
    document.getElementById("nav").style.left = "-500px";
    document.getElementById("ctn-container").style.display="none";

}