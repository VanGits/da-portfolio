
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20
const scaleFactorMobile = 1/10;
let y = window.scrollY * scaleFactor;



function openMenu() {
    document.body.classList += ' menu--open'

}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function moveBackground (event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function moveBackgroundScroll (event) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const shapes = document.querySelectorAll(".shape");
        const y = scrolled * scaleFactor;
        console.log(window.scrollY)
        if (window.scrollY > 800) {
            for (let i = 0; i < shapes.length; i++){
                const isOdd = i % 2 !== 0;
                const boolInt = isOdd ? -1 : 1;
                shapes[i].style.transform = `translate(${y * boolInt}px, ${y * boolInt}px)`
            }
    }
    })
}
// mobile scroll event
function touchMove (event) {
    window.addEventListener('touchmove', () => {
        const shapes = document.querySelectorAll(".shape");
        const y = window.scrollY * scaleFactorMobile;
        if (window.scrollY) {
            for (let i = 0; i < shapes.length; i++){
                const isOdd = i % 2 !== 0;
                const boolInt = isOdd ? -1 : 1;
                shapes[i].style.transform = `translate(${y * boolInt}px, ${y * boolInt}px)`
            }
    }
    })
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }

    

}

function toggleContrastMenu() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
        document.body.classList.remove("menu--open")
    }
    else {
        document.body.classList.remove("dark-theme")
        document.body.classList.remove("menu--open")
    }
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

     emailjs
         .sendForm(
             'service_1xz4x4f',
             'template_j8ncicf',
             event.target,
             'user_GS0sEoNoxUcONSBGQQi7n'
         ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
         }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on celdranvan@gmail.com"
            );
         })

    
}


function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

function toggleModalMenu () {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open") 
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
    document.body.classList.remove('menu--open')
}
