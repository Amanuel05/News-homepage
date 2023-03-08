const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.close-menu')
const container = document.querySelector('.container')
const menuLauncher = document.getElementById('muy')

openMenu.addEventListener('click', () => {
  container.classList.add('active')
  menuLauncher.classList.remove('active')
})

closeMenu.addEventListener('click', () => {
  if (container.classList.contains('active')) {
    container.classList.remove('active')
  }
  menuLauncher.classList.add('active')
})