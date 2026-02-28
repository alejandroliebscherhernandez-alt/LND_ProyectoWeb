document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contact-form');
    const modal = document.getElementById('modal-siu');
    const btnCerrar = document.getElementById('close-modal');
    
    const openNewsBtn = document.getElementById('open-news');
    const closeNewsBtn = document.getElementById('close-news');
    const sidebar = document.getElementById('news-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const links = document.querySelectorAll('.nav-menu a');
    const checkMenu = document.getElementById('menu-toggle');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            if (modal) modal.style.display = 'flex';
            formulario.reset();
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (openNewsBtn && sidebar) {
        openNewsBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        const closeSidebar = () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        };

        closeNewsBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (checkMenu) checkMenu.checked = false;
        });
    });
});