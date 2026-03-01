document.addEventListener('DOMContentLoaded', function() {
    // 1. SELECCIÓN DE ELEMENTOS (Con los nuevos IDs en español)
    const formulario = document.getElementById('formulario-contacto');
    const modal = document.getElementById('modal-siu');
    const btnCerrarModal = document.getElementById('cerrar-modal');
    
    // Elementos de la Barra de Noticias
    const botonAbrirNoticias = document.getElementById('abrir-noticias');
    const botonCerrarNoticias = document.getElementById('boton-cerrar-noticias');
    const barraNoticias = document.getElementById('barra-noticias');
    const fondoOscuroNoticias = document.getElementById('fondo-oscuro');

    // Elementos de Navegación
    const enlacesMenu = document.querySelectorAll('.menu-navegacion a');
    const checkMenuMovil = document.getElementById('menu-toggle');

    // 2. LÓGICA DEL FORMULARIO Y MODAL
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue
            if (modal) {
                modal.style.display = 'flex'; // Muestra el mensaje de ¡SIUUU!
            }
            formulario.reset(); // Limpia los campos
        });
    }

    // Cerrar modal al hacer clic en el botón
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    // Cerrar modal si se hace clic fuera de la caja blanca
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 3. LÓGICA DE LA BARRA LATERAL (NOTICIAS)
    if (botonAbrirNoticias && barraNoticias) {
        // Abrir
        botonAbrirNoticias.addEventListener('click', () => {
            barraNoticias.classList.add('activa');
            fondoOscuroNoticias.classList.add('activa');
        });

        // Función para cerrar
        const cerrarBarraNoticias = () => {
            barraNoticias.classList.remove('activa');
            fondoOscuroNoticias.classList.remove('activa');
        };

        // Cerrar con el botón X o haciendo clic en el fondo oscuro
        if (botonCerrarNoticias) {
            botonCerrarNoticias.addEventListener('click', cerrarBarraNoticias);
        }
        if (fondoOscuroNoticias) {
            fondoOscuroNoticias.addEventListener('click', cerrarBarraNoticias);
        }
    }

    // 4. LÓGICA DE NAVEGACIÓN (Menú móvil)
    // Esto hace que al hacer clic en un enlace de la sección, el menú se cierre solo
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (checkMenuMovil) {
                checkMenuMovil.checked = false;
            }
        });
    });
});