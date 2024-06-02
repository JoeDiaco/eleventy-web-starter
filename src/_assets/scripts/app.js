import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const navanchors = document.querySelectorAll('.navbar a')
const navlogos = document.querySelectorAll('.navbar svg')

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            navbar.classList.add('bg-white')
            navbar.classList.add('shadow')
            navanchors.forEach(anchor => {
                anchor.classList.add('text-blue')
            })
            navlogos.forEach(logo => {
                logo.classList.remove('fill-white')
                logo.classList.add('fill-blue')
            })
        } else {
            navbar.classList.remove('bg-white')
            navbar.classList.remove('shadow')
            navanchors.forEach(anchor => {
                anchor.classList.remove('text-blue')
            })
            navlogos.forEach(logo => {
                logo.classList.remove('fill-blue')
                logo.classList.add('fill-white')
            })
        }
    })
}, {
    rootMargin: "-200px 0px 0px 0px"
})

heroObserver.observe(hero)
