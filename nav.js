// recuperer la div avec un id menu
let menu = document.getElementById('menu')

// on ajoute un evenement lors du clic dessus
menu.addEventListener('click', () => {
    // on met les 3 barres ou bien la croix
    menu.classList.toggle('open')
})