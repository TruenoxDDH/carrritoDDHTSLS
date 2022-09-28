
// variables

const carrito = document.querySelector('#carrito');

const contenedorCarrito = document,querySelector('#lista-carrito tbody');

const listaCursos = document.querySelector('#lista-Cursos');

const vaciarCarritoBtn =document.querySelector('#vaciar-carrito');


cargaEventListener();
function cargaEventListener(){


listaCursos.addEventListener(



'click',agregarCurso);



}




function agregarCurso(e){


   

if (e.target.classList.contains('Agregar-carrito')){
console.log(e.target);


}


}
