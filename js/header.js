const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.setAttribute('style', 'background: #ffffff; transition: all 0.3s;')
    } else {
        header.setAttribute('style', 'background: transparent; transition: all 0.3s;')
    }
})