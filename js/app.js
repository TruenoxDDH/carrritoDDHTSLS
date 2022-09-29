
// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-Cursos');
const vaciarCarritoBtn =document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargaEventListener();
function cargaEventListener(){


listaCursos.addEventListener('click', agregarCurso);

}




function agregarCurso(e){


   

if (e.target.classList.contains('Agregar-carrito')){
console.log(e.target);


}

articulosCarrito =[...articulosCarrito,infoCurso];

console.log(articulosCarrito);
carritoHTML();
}
function carritoHTML(){

limpiarHTML();

    articulosCarrito.forEach(curso =>{
const row = document.createElement('tr');
row.inertHTML = `
<td>
  ${curso.titulo}
</td>
`;

contenedorCarrito.appendChild(row);
    });
}
function limpiarHTML(){
    contenedorCarrito.innerHTML='';
}
//porqueeee