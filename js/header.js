const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height
const logo = document.querySelector('.header .logo')
const logoSpan = document.querySelector('header .logo span')

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.setAttribute('style', 'background: #ffffff;')
        logo.setAttribute('style', 'color: #333333;')
        logoSpan.setAttribute('style', 'color: #fc6a65;')
    } else {
        header.setAttribute('style', 'background: transparent;')
        logo.setAttribute('style', 'color: #ffffff;')
        logoSpan.setAttribute('style', 'color: #0018ff;')
    }
})