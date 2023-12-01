function toggleMenu() {
  const menuContainer = document.getElementById('menuContainer');
  const contentToBlur = document.querySelectorAll('.pagina1, .pagina2, footer');

  // Verifica si el menú está abierto usando la clase 'show-menu'
  const isOpen = menuContainer.classList.contains('show-menu');

  // Si el menú está abierto, se oculta; de lo contrario, se muestra
  if (!isOpen) {
    menuContainer.classList.add('show-menu');
    contentToBlur.forEach(element => {
      element.classList.add('blur');
    });
  } else {
    menuContainer.classList.remove('show-menu');
    contentToBlur.forEach(element => {
      element.classList.remove('blur');
    });
  }
}

// Cerrar el menú al hacer clic en un elemento del menú
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
  item.addEventListener('click', toggleMenu);
});
