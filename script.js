const clickSound = new Audio("audios/click.mp3");
const tecleoSound = new Audio("audios/tecleo.mp3");
const advertenciaSound = new Audio("audios/advertencia.mp3");

document.querySelectorAll("input[type='radio']").forEach(element => {
    element.addEventListener("click", () => {
        clickSound.play(); 
    });
});

document.getElementById("palabra").addEventListener("input", function() {
    tecleoSound.play();
});

document.getElementById("boton").addEventListener("click", () => {
    let felicidadActual = document.querySelector('input[name="felicidadActual"]:checked');
    let felicidadFutura = document.querySelector('input[name="felicidadFutura"]:checked');
    let palabra = document.getElementById("palabra").value.trim();

    if (!felicidadActual || !felicidadFutura || palabra === "") {
        document.getElementById("mensajeAdvertencia").style.display = "block";
        advertenciaSound.play(); 
    } else {
        clickSound.play();
    }
});

document.getElementById("cerrarAdvertencia").addEventListener("click", function() {
    document.getElementById("mensajeAdvertencia").style.display = "none";
    clickSound.play();
});

document.getElementById("togglePassword").addEventListener("click", function() {
    clickSound.play();
    const passwordInput = document.getElementById("palabra");
    const eyeIcon = document.querySelector("#togglePassword img");  

    // Cambia el tipo de input entre password y text
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "imágenes/ojo-abierto2.png";  
        passwordInput.classList.add("revelado"); 
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "imágenes/ojo-cerrado2.png"; 
        passwordInput.classList.remove("revelado"); 
    }

    const hazLuz = document.getElementById("hazLuz");
    hazLuz.classList.toggle("activo");
    passwordInput.classList.toggle("haz-activo");
});

document.getElementById("boton").addEventListener("click", obtenerPelicula);

function obtenerPelicula() {
    let felicidadActual = document.querySelector('input[name="felicidadActual"]:checked');
    let felicidadFutura = document.querySelector('input[name="felicidadFutura"]:checked');
    let palabra = document.getElementById("palabra").value.trim();

    if (!felicidadActual || !felicidadFutura || palabra === "") {
        return;
    }

    if (peliculasEspecificas[palabra]) {
        mostrarResultado(peliculasEspecificas[palabra].imagen, peliculasEspecificas[palabra].audio);
        return; 
    }

    // Seleccionar el array de películas según las respuestas
    let peliculas;
    if (felicidadActual.value === "si" && felicidadFutura.value === "si") {
        peliculas = SiSi;
    } else if (felicidadActual.value === "si" && felicidadFutura.value === "no") {
        peliculas = SiNo;
    } else if (felicidadActual.value === "no" && felicidadFutura.value === "si") {
        peliculas = NoSi;
    } else {
        peliculas = NoNo;
    }
    
    // Seleccionar una película aleatoria del array
    let pelicula = peliculas[Math.floor(Math.random() * peliculas.length)];

    mostrarResultado(pelicula.imagen, pelicula.audio);
}

function mostrarResultado(imagenPelicula, audioPelicula) {
    document.getElementById("preguntas").classList.add("oculto");
    document.getElementById("resultado").classList.remove("oculto");
    document.getElementById("imagenPelicula").src = imagenPelicula;

    const audioElement = document.getElementById("audio");
    audioElement.src = audioPelicula;
    audioElement.play();
}

document.getElementById("volverAtras").addEventListener("click", volverAtras);

function volverAtras() {
    clickSound.play();
    document.getElementById("resultado").classList.add("oculto");
    document.getElementById("preguntas").classList.remove("oculto");

    // Reiniciar el formulario
    document.querySelector('input[name="felicidadActual"]:checked').checked = false;
    document.querySelector('input[name="felicidadFutura"]:checked').checked = false;
    document.getElementById("palabra").value = "";
    
    // Detener el audio si está reproduciéndose
    const audioElement = document.getElementById("audio");
    audioElement.pause();
    audioElement.currentTime = 0;  
}


const SiSi = [
    { imagen: "imágenes/películas/samuel.jpg", audio: "audios/samuel.mp3" },
    { imagen: "imágenes/películas/la_mesías.jpg", audio: "audios/la_mesías.mp3" },
    { imagen: "imágenes/películas/free_guy.jpg", audio: "audios/free_guy.mp3" },
    { imagen: "imágenes/películas/h2o.jpg", audio: "audios/h2o.mp3" },
    { imagen: "imágenes/películas/la_cura_del_bienestar.jpg", audio: "audios/la_cura_del_bienestar.mp3" },
];

const SiNo = [
    { imagen: "imágenes/películas/mother.jpg", audio: "audios/mother.mp3" },
    { imagen: "imágenes/películas/la_virgen_roja.jpg", audio: "audios/la_virgen_roja.mp3" },
    { imagen: "imágenes/películas/the_imitation_game.jpg", audio: "audios/the_imitation_game.mp3" },
    { imagen: "imágenes/películas/los_renglones_torcidos_de_dios.jpg", audio: "audios/los_renglones_torcidos_de_dios.mp3" },
    { imagen: "imágenes/películas/el_castillo_ambulante.jpg", audio: "audios/el_castillo_ambulante.mp3" },
];

const NoSi = [
    { imagen: "imágenes/películas/interestelar.jpg", audio: "audios/interestelar.mp3" },
    { imagen: "imágenes/películas/rompenieves.jpg", audio: "audios/rompenieves.mp3" },
    { imagen: "imágenes/películas/la_llegada.jpg", audio: "audios/la_llegada.mp3" },
    { imagen: "imágenes/películas/it_follows.jpg", audio: "audios/it_follows.mp3" },
    { imagen: "imágenes/películas/midsommar.jpg", audio: "audios/midsommar.mp3" },
    { imagen: "imágenes/películas/el_hombre_invisible.jpg", audio: "audios/el_hombre_invisible.mp3" },
    { imagen: "imágenes/películas/origenes.jpg", audio: "audios/origenes.mp3" },
    { imagen: "imágenes/películas/alice.jpg", audio: "audios/alice.mp3" },
    { imagen: "imágenes/películas/el_menu.jpg", audio: "audios/el_menu.mp3" },
];

const NoNo = [
    { imagen: "imágenes/películas/aniquilacion.jpg", audio: "audios/aniquilacion.mp3" },
    { imagen: "imágenes/películas/normal_people.jpg", audio: "audios/normal_people.mp3" },
    { imagen: "imágenes/películas/cisne_negro.jpg", audio: "audios/cisne_negro.mp3" },
    { imagen: "imágenes/películas/her.jpg", audio: "audios/her.mp3" },
    { imagen: "imágenes/películas/the_good_place.jpg", audio: "audios/the_good_place.mp3" },
    { imagen: "imágenes/películas/severance.jpg", audio: "audios/severance.mp3" },
];

function precargarAudios(peliculas) {
    peliculas.forEach(pelicula => {
        const audio = new Audio(pelicula.audio);
        audio.preload = "auto";
    });
}

precargarAudios(SiSi);
precargarAudios(SiNo);
precargarAudios(NoSi);
precargarAudios(NoNo);

const peliculasEspecificas = {
    chopo: { imagen: "imágenes/películas/chopa.jpg" },
    chopa: { imagen: "imágenes/películas/chopa.jpg" }, 
    rata: { imagen: "imágenes/películas/rata.png", audio: "audios/rata.mp3" },
};


document.getElementById("video-fondo").addEventListener("canplaythrough", ocultarCargando);

function ocultarCargando() {
    document.getElementById("cargando").style.display = "none";
    document.getElementById("Pag1").classList.remove("oculto");
}