document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-contacto');
    const modal = document.getElementById('modal-siu');
    const btnCerrar = document.getElementById('cerrar-siu');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'flex';
            }
            formulario.reset();
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});