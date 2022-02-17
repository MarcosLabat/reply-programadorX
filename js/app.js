const btnMenu = document.querySelector('#btn-menu');
const navegacion = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const preguntas = document.querySelectorAll('.contenedor__pregunta');
const seccionCursos = document.querySelector('#observar');

btnMenu.addEventListener('click',() => {
    btnMenu.classList.toggle('is-active')
    mostrarMenu()
})

const mostrarMenu = () => {
    menu.classList.toggle('active')
}

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => pregunta.classList.toggle('activa'))
})

const observar = new IntersectionObserver( (entries) => {
    if(entries[0].isIntersecting) navegacion.classList.remove('fijo') 
    else navegacion.classList.add('fijo')
})

console.log(observar.observe(seccionCursos))