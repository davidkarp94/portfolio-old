const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {
    delay: 50,
    origin: 'bottom'
})

sr.reveal('.about,.skills,.projects,.contact', {
    delay: 60,
    origin: 'bottom'
})

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 150
})

typewriter
    .typeString('Buenos Aires, Argentina.')
    .pauseFor(2000)
    .start();

// Colores

const colors = document.getElementsByClassName('colors');

let i;

for (i=0; i<colors.length; i++) {
    colors[i].addEventListener('click', changeColor);
    colors[i].addEventListener('click', changeBg)
}

function changeColor () {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--main-color', color);
}

function changeBg () {
    let color = this.getAttribute('data-color');
    if (color == '#eb4a4a') {
        document.documentElement.style.setProperty('--bg-img1', 'url(../img/backgrounds/bg1-red.svg)');
        document.documentElement.style.setProperty('--bg-img2', 'url(../img/backgrounds/bg2-red.svg)');
        document.documentElement.style.setProperty('--bg-img3', 'url(../img/backgrounds/bg3-red.svg)');
    }
    else if (color == '#E573D2') {
        document.documentElement.style.setProperty('--bg-img1', 'url(../img/backgrounds/bg1-pink.svg)');
        document.documentElement.style.setProperty('--bg-img2', 'url(../img/backgrounds/bg2-pink.svg)');
        document.documentElement.style.setProperty('--bg-img3', 'url(../img/backgrounds/bg3-pink.svg)');
    }
    else {
        document.documentElement.style.setProperty('--bg-img1', 'url(../img/backgrounds/bg1-blue.svg)');
        document.documentElement.style.setProperty('--bg-img2', 'url(../img/backgrounds/bg2-blue.svg)');
        document.documentElement.style.setProperty('--bg-img3', 'url(../img/backgrounds/bg3-blue.svg)');
    }
}

// Skill Images

const cards = document.getElementsByClassName('project-img');

function asignImage(cards) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.setProperty('background-image', `url(./img/proyectos/${i+1}.jpg)`);
    }
}

asignImage(cards);

const email = document.getElementById('email');
const phone = document.getElementById('phone');
const copiedEmail = document.getElementById('copied-email');
const copiedPhone = document.getElementById('copied-phone');

email.addEventListener('click', () => {
    let texto = 'davidkarp94@gmail.com';
    navigator.clipboard.writeText(texto)
        .then(() => {
        mostrarCopiado(copiedEmail)
    },)
        .catch(err => {
        console.log('Something went wrong', err);
    })
});

phone.addEventListener('click', () => {
    let texto = '+54 9 11 50943302';
    navigator.clipboard.writeText(texto)
        .then(() => {
        mostrarCopiado(copiedPhone)
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
});

function mostrarCopiado(obj) {
        obj.style.setProperty('display', 'block')

        setTimeout(() => {
            obj.style.setProperty('display', 'none')
        }, 2000)
}