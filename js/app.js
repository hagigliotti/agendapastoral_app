// Agenda Pastoral APP - Script principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('Agenda Pastoral APP cargando...');
    
    // Elementos del DOM
    const accountCard = document.getElementById('account-card');
    const pastoralProgram = document.getElementById('pastoral-program');
    const showHideBtn = document.getElementById('show-hide-btn');
    const reorderBtn = document.getElementById('reorder-btn');
    const accountMenuBtn = document.getElementById('account-menu-btn');
    const closeAccountMenuBtn = document.getElementById('close-account-menu');
    const accountMenuOverlay = document.getElementById('account-menu-overlay');
    const accountMenu = document.getElementById('account-menu');
    
    // Inicializar pestañas de Programa de Asistencia Pastoral
    initPastoralTabs();
    
    // Event listeners para mostrar/ocultar módulos
    if (showHideBtn && accountCard) {
        showHideBtn.addEventListener('click', () => {
            const currentHidden = accountCard.style.display === 'none';
            toggleModule([accountCard, pastoralProgram], !currentHidden);
        });
    }
    
    // Event listener para botón de reubicar (placeholder)
    if (reorderBtn) {
        reorderBtn.addEventListener('click', () => {
            console.log('Funcionalidad de reubicación pendiente');
        });
    }
    
    // Mostrar/Ocultar menú de cuenta
    if (accountMenuBtn && accountMenu) {
        accountMenuBtn.addEventListener('click', () => {
            showAccountMenu();
        });
    }
    
    if (closeAccountMenuBtn) {
        closeAccountMenuBtn.addEventListener('click', hideAccountMenu);
    }
    
    if (accountMenuOverlay) {
        accountMenuOverlay.addEventListener('click', hideAccountMenu);
    }
    
    console.log('App inicializada correctamente');
});

// Función para mostrar/ocultar módulos
function toggleModule(elements, show) {
    elements.forEach(el => {
        if (el.style.display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

// Mostrar menú de cuenta
function showAccountMenu() {
    accountMenu.classList.add('visible');
    accountMenuOverlay.classList.remove('hidden');
}

// Ocultar menú de cuenta
function hideAccountMenu() {
    accountMenu.classList.remove('visible');
    accountMenuOverlay.classList.add('hidden');
}

// Inicializar pestañas del Programa de Asistencia Pastoral
function initPastoralTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const pastoralContent = document.getElementById('pastoral-tabs-content');
    
    if (!tabBtns.length || !pastoralContent) return;
    
    // Contenido por pestaña (placeholders iniciales)
    const tabsContent = {
        iglesias: '<h3>Iglesias</h3><p>Aquí se mostrarán las iglesias asignadas...</p>',
        miembros: '<h3>Miembros</h3><p>Aquí se mostrarán los miembros...</p>',
        visitas: '<h3>Visitas</h3><p>Aquí se registrarán las visitas pastorales...</p>',
        registros: '<h3>Registros</h3><p>Aquí se verán los registros de asistencia...</p>'
    };
    
    // Event listeners para pestañas
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTab = e.target.dataset.tab;
            
            // Actualizar estado activo
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Cambiar contenido
            pastoralContent.innerHTML = tabsContent[targetTab] || '<p>Contenido pendiente...</p>';
        });
    });
}