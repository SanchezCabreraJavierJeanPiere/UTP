// =====================================================
// JEANDESA - SISTEMA DE GESTIÓN DE TICKETS
// APF3 - JavaScript Interactivo
// =====================================================

// =====================================================
// 1. VARIABLES, CONSTANTES Y TIPOS DE DATOS
// =====================================================

// Constantes (const) - valores que no cambian
const NOMBRE_APP = "JeanDesa";
const VERSION = "1.0.0";
const MAX_TICKETS = 100;
const PRIORIDADES = ["baja", "media", "alta", "critica"];
const ESTADOS = ["abierto", "proceso", "resuelto", "cerrado"];
const CATEGORIAS = ["software", "hardware", "red", "accesos", "otro"];

// Variables (let) - valores que pueden cambiar
let contadorTickets = 0;
let ticketSeleccionado = null;
let menuAbierto = false;

// Tipos de datos demostrados
let nombreUsuario = "Visitante";   // string
let ticketsCreados = 0;            // number
let sistemaActivo = true;          // boolean

// Mensajes en consola (console.log) para inspección con DevTools
console.log("=== " + NOMBRE_APP + " - Sistema de Tickets ===");
console.log("Versión:", VERSION);
console.log("Sistema activo:", sistemaActivo);
console.log("Tipo de NOMBRE_APP:", typeof NOMBRE_APP);   // string
console.log("Tipo de MAX_TICKETS:", typeof MAX_TICKETS);  // number
console.log("Tipo de sistemaActivo:", typeof sistemaActivo); // boolean

// =====================================================
// 2. ARREGLOS - Crear, Mostrar y Recorrer
// =====================================================

// Crear un arreglo de tickets de ejemplo
const ticketsEjemplo = [
    {
        id: 'TKT-001',
        titulo: 'Computadora no enciende',
        solicitante: 'María García',
        email: 'maria@jeandesa.com',
        categoria: 'hardware',
        prioridad: 'alta',
        estado: 'abierto',
        descripcion: 'Mi computadora no enciende desde esta mañana. Ya intenté cambiar el cable de alimentación.',
        fecha: '2026-02-05'
    },
    {
        id: 'TKT-002',
        titulo: 'Solicitud acceso a carpeta compartida',
        solicitante: 'Carlos López',
        email: 'carlos@jeandesa.com',
        categoria: 'accesos',
        prioridad: 'media',
        estado: 'proceso',
        descripcion: 'Necesito acceso a la carpeta de proyectos del departamento de marketing.',
        fecha: '2026-02-04'
    },
    {
        id: 'TKT-003',
        titulo: 'Error al abrir Excel',
        solicitante: 'Ana Torres',
        email: 'ana@jeandesa.com',
        categoria: 'software',
        prioridad: 'baja',
        estado: 'resuelto',
        descripcion: 'Excel muestra error al intentar abrir archivos .xlsx compartidos.',
        fecha: '2026-02-03'
    },
    {
        id: 'TKT-004',
        titulo: 'Internet lento en oficina 3er piso',
        solicitante: 'Juan Pérez',
        email: 'juan@jeandesa.com',
        categoria: 'red',
        prioridad: 'critica',
        estado: 'proceso',
        descripcion: 'La conexión a internet es muy lenta, afecta a todo el piso. Velocidad menor a 1 Mbps.',
        fecha: '2026-02-02'
    },
    {
        id: 'TKT-005',
        titulo: 'Instalación de Antivirus',
        solicitante: 'Pedro Sánchez',
        email: 'pedro@jeandesa.com',
        categoria: 'software',
        prioridad: 'baja',
        estado: 'cerrado',
        descripcion: 'Solicito instalación del antivirus corporativo en mi equipo nuevo.',
        fecha: '2026-02-01'
    }
];

// Arreglo de nombres de categorías para mostrar
const nombresCategorias = ["Software", "Hardware", "Red / Conectividad", "Accesos / Permisos", "Otro"];

// Recorrer arreglo con for y mostrar en consola
console.log("\n--- Categorías disponibles ---");
for (let i = 0; i < nombresCategorias.length; i++) {
    console.log("  " + (i + 1) + ". " + nombresCategorias[i]);
}

// Recorrer arreglo con while
console.log("\n--- Niveles de prioridad ---");
let idx = 0;
while (idx < PRIORIDADES.length) {
    console.log("  Nivel " + idx + ": " + PRIORIDADES[idx]);
    idx++;
}

// =====================================================
// 3. FUNCIONES AUXILIARES
// =====================================================

// Inicializar tickets en localStorage
function inicializarTickets() {
    if (!localStorage.getItem('tickets2')) {
        localStorage.setItem('tickets2', JSON.stringify(ticketsEjemplo));
    }
}

// Obtener tickets desde localStorage
function obtenerTickets() {
    const tickets = localStorage.getItem('tickets2');
    return tickets ? JSON.parse(tickets) : [];
}

// Guardar tickets en localStorage
function guardarTickets(tickets) {
    localStorage.setItem('tickets2', JSON.stringify(tickets));
}

// Generar nuevo ID de ticket
function generarIdTicket() {
    const tickets = obtenerTickets();
    if (tickets.length === 0) return 'TKT-001';

    let maxNum = 0;
    // Ciclo for con break - buscar el número máximo
    for (let i = 0; i < tickets.length; i++) {
        const num = parseInt(tickets[i].id.split('-')[1]);
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return 'TKT-' + String(maxNum + 1).padStart(3, '0');
}

// Obtener fecha actual formateada
function obtenerFechaActual() {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0];
}

// =====================================================
// 4. ESTRUCTURAS DE CONTROL - if, else, else if
//    Operadores de comparación: ==, ===, >=, <=, !=
// =====================================================

// Función con if / else if / else y operadores de comparación
function obtenerTextoEstado(estado) {
    if (estado === 'abierto') {
        return 'Abierto';
    } else if (estado === 'proceso') {
        return 'En Proceso';
    } else if (estado === 'resuelto') {
        return 'Resuelto';
    } else if (estado === 'cerrado') {
        return 'Cerrado';
    } else {
        return estado;
    }
}

function obtenerTextoPrioridad(prioridad) {
    if (prioridad === 'baja') {
        return 'Baja';
    } else if (prioridad === 'media') {
        return 'Media';
    } else if (prioridad === 'alta') {
        return 'Alta';
    } else if (prioridad === 'critica') {
        return 'Crítica';
    } else {
        return prioridad;
    }
}

function obtenerTextoCategoria(categoria) {
    if (categoria === 'software') return 'Software';
    else if (categoria === 'hardware') return 'Hardware';
    else if (categoria === 'red') return 'Red';
    else if (categoria === 'accesos') return 'Accesos';
    else if (categoria === 'otro') return 'Otro';
    else return categoria;
}

function obtenerIconoEstado(estado) {
    if (estado === 'abierto') return 'fas fa-folder-open';
    else if (estado === 'proceso') return 'fas fa-spinner';
    else if (estado === 'resuelto') return 'fas fa-check-circle';
    else if (estado === 'cerrado') return 'fas fa-archive';
    else return 'fas fa-circle';
}

function obtenerIconoPrioridad(prioridad) {
    if (prioridad === 'baja') return 'fas fa-arrow-down';
    else if (prioridad === 'media') return 'fas fa-minus';
    else if (prioridad === 'alta') return 'fas fa-arrow-up';
    else if (prioridad === 'critica') return 'fas fa-fire';
    else return 'fas fa-circle';
}

// Función con ciclo for y break - buscar ticket por ID
function buscarTicketPorId(id) {
    const tickets = obtenerTickets();
    let encontrado = null;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === id) {
            encontrado = tickets[i];
            console.log("Ticket encontrado en posición:", i);
            break; // Salir del ciclo al encontrar
        }
    }
    return encontrado;
}

// Función con ciclo while y continue - contar tickets por estado
function contarTicketsPorEstado(estado) {
    const tickets = obtenerTickets();
    let contador = 0;
    let i = 0;
    while (i < tickets.length) {
        if (tickets[i].estado !== estado) {
            i++;
            continue; // Saltar tickets que no coinciden
        }
        contador++;
        i++;
    }
    return contador;
}

// Validación de formulario con comparaciones (>=, <=, !=)
function validarFormulario(solicitante, email, titulo, descripcion) {
    if (solicitante.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        return false;
    }
    if (email.indexOf('@') === -1) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }
    if (titulo.length < 5 || titulo.length > 150) {
        alert("El título debe tener entre 5 y 150 caracteres.");
        return false;
    }
    if (descripcion.length < 20) {
        alert("La descripción debe tener al menos 20 caracteres.");
        return false;
    }
    return true;
}

// =====================================================
// 5. MÉTODOS DE ENTRADA/SALIDA: prompt(), alert(), confirm()
// =====================================================

// onclick - Crear ticket rápido usando prompt() y alert()
function crearTicketRapido() {
    // prompt() - pedir datos al usuario
    const titulo = prompt("Ingrese el título del ticket:");

    // Validación con if/else
    if (titulo === null) {
        return; // Usuario canceló
    }
    if (titulo.trim() === "") {
        alert("El título no puede estar vacío.");
        return;
    }

    const descripcion = prompt("Describa brevemente el problema:");
    if (descripcion === null || descripcion.trim() === "") {
        alert("La descripción es requerida.");
        return;
    }

    // confirm() - confirmar acción
    const confirmar = confirm(
        "¿Desea crear el siguiente ticket?\n\n" +
        "Título: " + titulo + "\n" +
        "Descripción: " + descripcion + "\n" +
        "Prioridad: Media (por defecto)"
    );

    if (confirmar) {
        const nuevoTicket = {
            id: generarIdTicket(),
            solicitante: nombreUsuario,
            email: "usuario@jeandesa.com",
            titulo: titulo.trim(),
            categoria: "otro",
            prioridad: "media",
            descripcion: descripcion.trim(),
            estado: "abierto",
            fecha: obtenerFechaActual()
        };

        const tickets = obtenerTickets();
        tickets.push(nuevoTicket);
        guardarTickets(tickets);

        ticketsCreados++;
        console.log("Tickets creados en esta sesión:", ticketsCreados);

        // alert() - confirmar éxito
        alert("Ticket " + nuevoTicket.id + " creado exitosamente.");

        // Actualizar solo si los elementos existen en la página actual
        actualizarDashboard();
        renderizarTicketsRecientes();
        renderizarTablaTickets();
    }
}

// =====================================================
// 6. EVENTOS HTML - onclick, onchange, onmouseover, onmouseout
// =====================================================

// onchange - cuando cambia la categoría del formulario
function alCambiarCategoria(select) {
    const valor = select.value;
    console.log("Categoría seleccionada:", valor);

    // Cambiar estilo dinámico con style.property
    const label = select.parentElement.querySelector('label');
    if (valor === 'software') {
        label.style.color = '#4F46E5';
    } else if (valor === 'hardware') {
        label.style.color = '#059669';
    } else if (valor === 'red') {
        label.style.color = '#D97706';
    } else if (valor === 'accesos') {
        label.style.color = '#DC2626';
    } else {
        label.style.color = '';
    }
}

// onchange - cuando cambia la prioridad del formulario
function alCambiarPrioridad(select) {
    const valor = select.value;
    console.log("Prioridad seleccionada:", valor);

    // setAttribute para cambiar atributo data
    select.setAttribute('data-prioridad', valor);

    // style.property para feedback visual
    if (valor === 'critica') {
        select.style.borderColor = '#EF4444';
    } else if (valor === 'alta') {
        select.style.borderColor = '#EA580C';
    } else if (valor === 'media') {
        select.style.borderColor = '#F59E0B';
    } else if (valor === 'baja') {
        select.style.borderColor = '#3B82F6';
    } else {
        select.style.borderColor = '';
    }
}

// onmouseover - resaltar tarjeta de estadística
function resaltarCard(element) {
    element.style.transform = "translateY(-8px) scale(1.02)";
    element.style.boxShadow = "0 20px 25px -5px rgba(79, 70, 229, 0.2)";
    console.log("Mouse sobre:", element.querySelector('.stat-label').textContent);
}

// onmouseout - restaurar tarjeta de estadística
function restaurarCard(element) {
    element.style.transform = "";
    element.style.boxShadow = "";
}

// =====================================================
// 7. MANIPULACIÓN DEL DOM
//    - Selección: getElementById, querySelector, querySelectorAll
//    - Modificación: innerText, textContent, innerHTML, style.property, setAttribute
//    - Creación/Eliminación: createElement, appendChild, remove, removeChild
// =====================================================

// Actualizar dashboard usando getElementById e innerText
function actualizarDashboard() {
    // Verificar que los elementos existen antes de manipularlos
    const countAbiertos = document.getElementById('count-abiertos');
    if (!countAbiertos) return;

    // getElementById + textContent
    countAbiertos.textContent = contarTicketsPorEstado('abierto');
    document.getElementById('count-proceso').textContent =
        contarTicketsPorEstado('proceso');
    document.getElementById('count-resueltos').textContent =
        contarTicketsPorEstado('resuelto');
    document.getElementById('count-cerrados').textContent =
        contarTicketsPorEstado('cerrado');

    contadorTickets = obtenerTickets().length;
    console.log("Dashboard actualizado. Total tickets:", contadorTickets);
}

// Renderizar tickets recientes usando innerHTML
function renderizarTicketsRecientes() {
    // querySelector para seleccionar por ID
    const tbody = document.querySelector('#tabla-recientes');
    if (!tbody) return; // Salir si el elemento no existe en esta página

    const tickets = obtenerTickets();
    const recientes = [...tickets]
        .sort(function(a, b) { return new Date(b.fecha) - new Date(a.fecha); })
        .slice(0, 5);

    if (recientes.length === 0) {
        // innerHTML para insertar contenido HTML
        tbody.innerHTML =
            '<tr><td colspan="4">' +
            '<div class="no-tickets">' +
            '<i class="fas fa-inbox"></i>' +
            '<p>No hay tickets recientes</p>' +
            '</div></td></tr>';
        return;
    }

    let html = '';
    // Ciclo for para construir filas
    for (let i = 0; i < recientes.length; i++) {
        const ticket = recientes[i];
        html +=
            '<tr>' +
            '<td><strong>' + ticket.id + '</strong></td>' +
            '<td>' + ticket.titulo + '</td>' +
            '<td><span class="badge badge-' + ticket.estado + '">' +
            '<i class="' + obtenerIconoEstado(ticket.estado) + '"></i> ' +
            obtenerTextoEstado(ticket.estado) + '</span></td>' +
            '<td class="priority priority-' + ticket.prioridad + '">' +
            '<i class="' + obtenerIconoPrioridad(ticket.prioridad) + '"></i> ' +
            obtenerTextoPrioridad(ticket.prioridad) + '</td>' +
            '</tr>';
    }
    tbody.innerHTML = html;
}

// Renderizar tabla de tickets usando createElement y appendChild
function renderizarTablaTickets() {
    // getElementById para seleccionar el tbody
    const tbody = document.getElementById('tabla-tickets');
    if (!tbody) return; // Salir si el elemento no existe en esta página

    const tickets = obtenerTickets();

    // Obtener valores de filtros con getElementById
    const filtroEstado = document.getElementById('filtro-estado').value;
    const filtroPrioridad = document.getElementById('filtro-prioridad').value;
    const filtroCategoria = document.getElementById('filtro-categoria').value;

    // Filtrar con if y operadores de comparación
    let ticketsFiltrados = [];
    for (let i = 0; i < tickets.length; i++) {
        let incluir = true;

        if (filtroEstado !== "" && tickets[i].estado !== filtroEstado) {
            incluir = false;
        }
        if (filtroPrioridad !== "" && tickets[i].prioridad !== filtroPrioridad) {
            incluir = false;
        }
        if (filtroCategoria !== "" && tickets[i].categoria !== filtroCategoria) {
            incluir = false;
        }

        if (incluir) {
            ticketsFiltrados.push(tickets[i]);
        }
    }

    // Ordenar por fecha
    ticketsFiltrados.sort(function(a, b) {
        return new Date(b.fecha) - new Date(a.fecha);
    });

    // Limpiar tabla - removeChild para eliminar todos los hijos
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    if (ticketsFiltrados.length === 0) {
        tbody.innerHTML =
            '<tr><td colspan="7">' +
            '<div class="no-tickets">' +
            '<i class="fas fa-search"></i>' +
            '<p>No se encontraron tickets con los filtros seleccionados</p>' +
            '</div></td></tr>';
        return;
    }

    // Crear filas con createElement y appendChild
    for (let i = 0; i < ticketsFiltrados.length; i++) {
        const ticket = ticketsFiltrados[i];

        // createElement - crear elementos del DOM
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', ticket.id); // setAttribute

        // Celda ID
        const tdId = document.createElement('td');
        const strong = document.createElement('strong');
        strong.textContent = ticket.id; // textContent
        tdId.appendChild(strong); // appendChild

        // Celda Título
        const tdTitulo = document.createElement('td');
        tdTitulo.innerText = ticket.titulo; // innerText

        // Celda Categoría
        const tdCategoria = document.createElement('td');
        tdCategoria.textContent = obtenerTextoCategoria(ticket.categoria);

        // Celda Prioridad
        const tdPrioridad = document.createElement('td');
        tdPrioridad.className = 'priority priority-' + ticket.prioridad;
        tdPrioridad.innerHTML =
            '<i class="' + obtenerIconoPrioridad(ticket.prioridad) + '"></i> ' +
            obtenerTextoPrioridad(ticket.prioridad); // innerHTML

        // Celda Estado
        const tdEstado = document.createElement('td');
        const spanBadge = document.createElement('span');
        spanBadge.className = 'badge badge-' + ticket.estado;
        spanBadge.innerHTML =
            '<i class="' + obtenerIconoEstado(ticket.estado) + '"></i> ' +
            obtenerTextoEstado(ticket.estado);
        tdEstado.appendChild(spanBadge);

        // Celda Fecha
        const tdFecha = document.createElement('td');
        tdFecha.textContent = ticket.fecha;

        // Celda Acciones con botones onclick
        const tdAcciones = document.createElement('td');

        const btnVer = document.createElement('button');
        btnVer.className = 'action-btn view';
        btnVer.innerHTML = '<i class="fas fa-eye"></i> Ver';
        btnVer.setAttribute('onclick', "verTicket('" + ticket.id + "')");

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'action-btn delete';
        btnEliminar.innerHTML = '<i class="fas fa-trash"></i>';
        btnEliminar.setAttribute('onclick', "eliminarTicket('" + ticket.id + "')");

        tdAcciones.appendChild(btnVer);
        tdAcciones.appendChild(btnEliminar);

        // Agregar todas las celdas a la fila
        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdPrioridad);
        tr.appendChild(tdEstado);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);

        // Agregar fila al tbody
        tbody.appendChild(tr);
    }

    // Fila de resumen
    const trResumen = document.createElement('tr');
    trResumen.className = 'summary-row';
    trResumen.innerHTML =
        '<td colspan="3"><strong>Total de tickets mostrados</strong></td>' +
        '<td colspan="4"><strong>' + ticketsFiltrados.length + ' ticket(s)</strong></td>';
    tbody.appendChild(trResumen);
}

// =====================================================
// 8. MODAL - Ventana flotante
//    - Fondo oscuro
//    - Contenido centrado
//    - Animación CSS (escala y opacidad)
//    - Cerrar con botón ✕
//    - Cerrar haciendo clic fuera del modal
//    - classList.add() y classList.remove()
// =====================================================

// Abrir modal de detalle de ticket
function abrirModal(contenidoHTML, titulo) {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay) return;

    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body');

    // Modificar contenido del modal con innerHTML e innerText
    modalTitulo.innerText = titulo;
    modalBody.innerHTML = contenidoHTML;

    // classList.add() para mostrar el modal con animación
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll

    console.log("Modal abierto:", titulo);
}

// Cerrar modal
function cerrarModal() {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay) return;

    // classList.remove() para ocultar el modal
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll

    console.log("Modal cerrado");
}

// Ver detalle de ticket en modal (reemplaza alert)
function verTicket(id) {
    // Usar función con ciclo for y break
    const ticket = buscarTicketPorId(id);

    if (ticket) {
        ticketSeleccionado = ticket;

        // Construir contenido del modal con DOM manipulation
        const contenido =
            '<div class="modal-detail">' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-hashtag"></i> ID</span>' +
            '<span class="detail-value">' + ticket.id + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-user"></i> Solicitante</span>' +
            '<span class="detail-value">' + ticket.solicitante + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-envelope"></i> Email</span>' +
            '<span class="detail-value">' + ticket.email + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-tag"></i> Categoría</span>' +
            '<span class="detail-value">' + obtenerTextoCategoria(ticket.categoria) + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-flag"></i> Prioridad</span>' +
            '<span class="detail-value priority priority-' + ticket.prioridad + '">' +
            '<i class="' + obtenerIconoPrioridad(ticket.prioridad) + '"></i> ' +
            obtenerTextoPrioridad(ticket.prioridad) + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-info-circle"></i> Estado</span>' +
            '<span class="badge badge-' + ticket.estado + '">' +
            '<i class="' + obtenerIconoEstado(ticket.estado) + '"></i> ' +
            obtenerTextoEstado(ticket.estado) + '</span>' +
            '</div>' +
            '<div class="detail-row">' +
            '<span class="detail-label"><i class="fas fa-calendar"></i> Fecha</span>' +
            '<span class="detail-value">' + ticket.fecha + '</span>' +
            '</div>' +
            '<div class="detail-description">' +
            '<span class="detail-label"><i class="fas fa-align-left"></i> Descripción</span>' +
            '<p>' + ticket.descripcion + '</p>' +
            '</div>' +
            '</div>';

        abrirModal(contenido, ticket.titulo);
    }
}

// Eliminar ticket con confirm()
function eliminarTicket(id) {
    // confirm() - pedir confirmación al usuario
    if (confirm('¿Está seguro de eliminar el ticket ' + id + '?')) {
        let tickets = obtenerTickets();

        // Filtrar y eliminar usando ciclo
        let nuevosTickets = [];
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].id !== id) {
                nuevosTickets.push(tickets[i]);
            }
        }
        guardarTickets(nuevosTickets);

        // Eliminar fila del DOM usando remove()
        const fila = document.querySelector('tr[data-id="' + id + '"]');
        if (fila) {
            fila.remove(); // .remove() para eliminar elemento del DOM
        }

        // alert() - notificar resultado
        alert("Ticket " + id + " eliminado correctamente.");

        actualizarDashboard();
        renderizarTicketsRecientes();
        renderizarTablaTickets();
    }
}

// =====================================================
// 9. MENÚ RESPONSIVO
//    - Mobile First
//    - Botón hamburguesa
//    - Mostrar/ocultar con JavaScript
//    - classList.toggle()
// =====================================================

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('menuToggle');
    const icon = toggle.querySelector('i');

    // classList.toggle() para abrir/cerrar menú
    nav.classList.toggle('active');
    menuAbierto = nav.classList.contains('active');

    // Cambiar icono de hamburguesa a X
    if (menuAbierto) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    console.log("Menú " + (menuAbierto ? "abierto" : "cerrado"));
}

// =====================================================
// 10. NAV ACTIVO POR PÁGINA
// =====================================================

// Establece el enlace activo en el navbar según la página actual
function establecerNavActivo() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('#mainNav a');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
        const href = navLinks[i].getAttribute('href');

        // Comparar la URL actual con el href del enlace
        if (path.endsWith(href) ||
            (href === 'index.html' && (path.endsWith('/') || path.endsWith('Proyecto2/')))) {
            navLinks[i].classList.add('active');
        }
    }
}

// =====================================================
// 11. INICIALIZACIÓN Y EVENT LISTENERS
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("\n--- Inicializando " + NOMBRE_APP + " ---");

    // Inicializar datos en localStorage
    inicializarTickets();

    // Establecer enlace activo según la página actual
    establecerNavActivo();

    // --- Menú hamburguesa ---
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en un enlace (querySelectorAll)
    const enlacesNav = document.querySelectorAll('#mainNav a');
    for (let i = 0; i < enlacesNav.length; i++) {
        enlacesNav[i].addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            const toggle = document.getElementById('menuToggle');

            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuAbierto = false;
                toggle.querySelector('i').classList.remove('fa-times');
                toggle.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    // --- Stats banner en index.html ---
    const liveTotal = document.getElementById('live-total');
    if (liveTotal) {
        const tickets = obtenerTickets();
        const total = tickets.length;
        const resueltos = contarTicketsPorEstado('resuelto') + contarTicketsPorEstado('cerrado');

        // Animar contadores con un ciclo for incremental
        let paso = 0;
        const pasos = 40;
        const intervalo = setInterval(function() {
            paso++;
            const progreso = paso / pasos;
            document.getElementById('live-total').textContent = Math.round(total * progreso);
            document.getElementById('live-resueltos').textContent = Math.round(resueltos * progreso);
            if (paso >= pasos) {
                clearInterval(intervalo);
                document.getElementById('live-total').textContent = total;
                document.getElementById('live-resueltos').textContent = resueltos;
            }
        }, 30);
    }

    // --- Dashboard (solo si existen los elementos) ---
    if (document.getElementById('count-abiertos')) {
        actualizarDashboard();
        renderizarTicketsRecientes();
    }

    // --- Tabla de mis tickets (solo si existen los elementos) ---
    if (document.getElementById('tabla-tickets')) {
        renderizarTablaTickets();
        document.getElementById('filtro-estado').addEventListener('change', renderizarTablaTickets);
        document.getElementById('filtro-prioridad').addEventListener('change', renderizarTablaTickets);
        document.getElementById('filtro-categoria').addEventListener('change', renderizarTablaTickets);
    }

    // --- Formulario de nuevo ticket (solo si existe) ---
    const formTicket = document.getElementById('form-ticket');
    if (formTicket) {
        formTicket.addEventListener('submit', function(e) {
            e.preventDefault();

            const solicitante = document.getElementById('solicitante').value;
            const email = document.getElementById('email').value;
            const titulo = document.getElementById('titulo-ticket').value;
            const categoria = document.getElementById('categoria').value;
            const prioridad = document.getElementById('prioridad').value;
            const descripcion = document.getElementById('descripcion').value;

            // Validar con estructuras de control
            if (!validarFormulario(solicitante, email, titulo, descripcion)) {
                return;
            }

            const nuevoTicket = {
                id: generarIdTicket(),
                solicitante: solicitante,
                email: email,
                titulo: titulo,
                categoria: categoria,
                prioridad: prioridad,
                descripcion: descripcion,
                estado: 'abierto',
                fecha: obtenerFechaActual()
            };

            const tickets = obtenerTickets();

            // Verificar límite con operador de comparación >=
            if (tickets.length >= MAX_TICKETS) {
                alert("Se ha alcanzado el límite de " + MAX_TICKETS + " tickets.");
                return;
            }

            tickets.push(nuevoTicket);
            guardarTickets(tickets);

            ticketsCreados++;

            // Mostrar alerta de éxito con DOM manipulation
            const alerta = document.getElementById('alerta-exito');
            alerta.style.display = 'flex'; // style.property
            alerta.querySelector('span').textContent =
                'Ticket ' + nuevoTicket.id + ' creado exitosamente.';

            // Redirigir a Mis Tickets después de 2 segundos
            setTimeout(function() {
                window.location.href = 'mis-tickets.html';
            }, 2000);

            formTicket.reset();

            // Resetear estilos de los selects
            document.getElementById('categoria').style.borderColor = '';
            document.getElementById('prioridad').style.borderColor = '';
            const catLabel = document.getElementById('categoria').parentElement.querySelector('label');
            if (catLabel) catLabel.style.color = '';
        });
    }

    // --- Modal: cerrar al hacer clic fuera (solo si existe) ---
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            // Si el clic fue en el overlay (fondo oscuro), no en el modal
            if (e.target === modalOverlay) {
                cerrarModal();
            }
        });
    }

    // --- Modal: cerrar con botón ✕ ---
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', cerrarModal);
    }

    // Mensaje de bienvenida al cargar
    console.log("--- " + NOMBRE_APP + " v" + VERSION + " cargado correctamente ---");
    console.log("Tickets en sistema:", obtenerTickets().length);
});
