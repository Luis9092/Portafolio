

let words = document.querySelectorAll(".word");
// changeText = document.querySelector(".change-text");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {

        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// CIRCLE SKILLS

const circles = document.querySelectorAll(".circle");

circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;
    for (let i = 0; i < dots; i++) {

        points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;
    const pointsMarkerd = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarkerd[i].classList.add("marked");
    }
})


// PARA EL MIX DE BUSQUEDA

var mixer = mixitup(".portafolio-gallery");


// ACTIVE MENU


const menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll(".sec");



function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 96 < section[len].offsetTop) {
        menuli.forEach(sec => {
            sec.classList.remove("active");


        });

    }
    menuli[len].classList.add("active")
}

window.addEventListener("scroll", activeMenu);

// SKILLL NABVAR{}


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
})

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


// toggle navbar

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// PARALLAX OBSERVER

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


// NUEVAS FUNCIONES

function obtenerHoraActual() {
    let fecha = new Date();
    let horas = fecha.getHours();
    return horas;
}

function SaludoUsuario() {
    let hora = obtenerHoraActual();
    let cadena = "";

    if (hora < 12) {
        cadena = "Buenos Dias!!";
    }
    if (hora > 12 && hora <= 18) {
        cadena = "Buenas Tardes!!";
    }

    if (hora > 18 && hora < 24) {
        cadena = "Buenas Noches!!"
    }



    document.querySelector("#txtSaludo").innerHTML = cadena;
}

window.onload = function (e) {
    SaludoUsuario();
    pintadoCursos();
    swiperCargando();
    AmpliarImagen();

}





//IMAGENES CURSOS
let NombreImagenes = [
    {
        id: 1,
        ruta: "img/cplus.png",
        nombre: "Introduccion a c++"
    },
    {
        id: 2,
        ruta: "img/css.png",
        nombre: "Introduccion a css"
    },
    {
        id: 3,
        ruta: "img/html.png",
        nombre: "Html"
    },
    {
        id: 4,
        ruta: "img/intropython.png",
        nombre: "Introduccion a Python"
    },
    {
        id: 5,
        ruta: "img/java.png",
        nombre: "Introduccion a Java"
    },
    {
        id: 6,
        ruta: "img/js.png",
        nombre: "Introduccion a Javascript"
    },
    {
        id: 7,
        ruta: "img/responsiveweb.png",
        nombre: "Responsive web"
    },
    {
        id: 8,
        ruta: "img/sql.png",
        nombre: "Introduccion a Sql"
    }
];



function pintadoCursos() {
    let cadena = "";
    NombreImagenes.forEach(element => {
        cadena += `<div class="swiper-slide box">
     <div class="icons">
       <a href="#">
         <i class="bx bxs-happy-heart-eyes bx-tada"></i
       ></a>
       <a href="#"><i class="bx bxs-cloud-download"></i></a>
       <a href="#"><i class="bx bxs-share-alt bx-tada"></i></a>
     </div>
     <div class="image">
       <img src="${element.ruta}" alt="" />
     </div>
     <div class="content">
       <div class="">
         <h4>${element.nombre}</h4>
       </div>
       <div class="btn-box btncard service-btn">
       <button id="btnTarget" value="${element.id}" class="btn">Ver</button>
       </div>
     </div>
   </div>`
    });
    document.querySelector("#Pintando1").innerHTML = cadena;
}



// SLIDER VIEWCARDS
function swiperCargando() {
    let swiper = new Swiper(".featured-slider", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        // slidesPerView: 'auto',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            750: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },

        },
    });
}
let modalImage = document.querySelector("#dialogImage");
const boximage = document.querySelector("#boximage");

function AmpliarImagen() {
    let btnTarget = document.querySelectorAll("#btnTarget");
    for (btn of btnTarget) {
        btn.addEventListener("click", function (e) {
            let valor = this.value;
            const buscar = NombreImagenes.find((ima) => ima.id == valor);
            let pintarTarjeta = "";

            pintarTarjeta = `<div class="header">
              <h5>${buscar.nombre}</h5>
            </div>
            <div class="bodyTarget">
              <img src="${buscar.ruta}" alt="" />
            </div>`;
            boximage.innerHTML = pintarTarjeta;
            modalImage.showModal();
        });
    }
}

function cerrarModal() {
    modalImage.close();
}

document.querySelector(".cerrardialog").addEventListener("click", (e) => {
    cerrarModal();
})


function toggleDarkMode(element) {
    element.classList.toggle('active');
    document.body.classList.toggle('dark');

}


// luisfer123
// fernando123
// Casa_123



// $card.addEventListener('mouseenter', () => {
//   bounds = $card.getBoundingClientRect();
//   document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//     document.removeEventListener('mousemove', rotateToMouse);
//     $card.style.transform = '';
//     $card.style.background = '';
// });


// COLORES

let colorChange = "#e80049";
// spectrum patronus
$("#btnColor").spectrum({
    color: "#f00",
    showPalette: false,
    showAlpha: true,
    showButtons: false,
});

var styleElement = document.createElement("style");
styleElement.rel = "stylesheet";
styleElement.href = "css/elementos.css";
document.head.appendChild(styleElement);

$("#btnColor").on("dragstop.spectrum", function (e, color) {

    styleElement.textContent = `
    :root {
  --primary-color: ${color.toHexString()} !important;
}`;

    colorChange = color.toHexString();
});

//ENVIAR MENSAKE
const btnEnviarMensaje = document.querySelector("#btnEnviarMensaje");

if (btnEnviarMensaje) {
    btnEnviarMensaje.addEventListener('click', function () {
        const numero = '+50251121954';
        // Mensaje personalizable
        const mensaje = 'Hola';
        // URL de WhatsApp con mensaje codificado
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        // Abrir en una nueva pestaña
        window.open(url, '_blank');
    });
}

