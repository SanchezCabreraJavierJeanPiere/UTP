# INFORME DE AVANCE DE PROYECTO - APF2

---

## PORTADA

**Universidad Tecnológica del Perú**

**Carrera:** Ingeniería de Sistemas

**Curso:** Taller de Programación Web

**Docente:** Richard Doann Asencios Vilchez

**Título del Proyecto:**
**Sistema de Gestión de Tickets - JeanDesa**

**Estudiante:**
Jean Piere Sanchez

**Ciclo:** 2026-I

**Fecha:** Febrero 2026

---

## 1. INTRODUCCIÓN

### Breve descripción del proyecto

El presente proyecto consiste en el desarrollo de una aplicación web de gestión de tickets de soporte técnico llamada "JeanDesa". El sistema permite crear, visualizar, filtrar y eliminar tickets de soporte, implementando un dashboard interactivo con estadísticas en tiempo real. El proyecto aplica técnicas avanzadas de CSS (Flexbox, Grid, variables CSS, animaciones) junto con JavaScript para la lógica de negocio y persistencia de datos con localStorage.

### Contexto o problemática que se aborda

En las organizaciones, la gestión eficiente de incidencias y solicitudes de soporte técnico es fundamental para mantener la productividad. Este proyecto aborda la necesidad de contar con un sistema que permita:

- Registrar incidencias de forma organizada con categorías y prioridades
- Visualizar el estado general del soporte mediante un dashboard
- Filtrar y buscar tickets según diferentes criterios
- Ofrecer una interfaz moderna, responsiva y profesional

---

## 2. OBJETIVOS DEL PROYECTO

### Objetivo General

Desarrollar una aplicación web de gestión de tickets de soporte técnico que integre layouts avanzados con CSS Grid y Flexbox, formularios con validación, tablas con filtrado dinámico, elementos multimedia y JavaScript para la interactividad y persistencia de datos.

### Objetivos Específicos (alcanzados en este segundo avance)

1. **Implementar layouts avanzados con CSS Grid y Flexbox:**
   - Dashboard con `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`
   - Formulario con grid de 2 columnas
   - Navegación y footer con Flexbox
   - Sección de contacto con grid de 2 columnas

2. **Crear un sistema de tickets funcional con JavaScript:**
   - CRUD de tickets (crear, leer, eliminar)
   - Persistencia con localStorage
   - Generación automática de IDs
   - Dashboard con contadores en tiempo real

3. **Implementar formulario avanzado con validación:**
   - Campos con `required`, `minlength`, `maxlength`
   - Campo de email con validación de formato
   - Selectores para categoría y prioridad
   - Alerta de éxito al crear ticket

4. **Aplicar estilos CSS modernos y avanzados:**
   - Variables CSS (custom properties) para theming
   - Animaciones con `@keyframes` (fadeInUp, pulse, slideIn)
   - Gradientes lineales en header, hero y botones
   - Pseudo-elementos (`::before`) para patrones decorativos

5. **Diseño responsivo con media queries en 3 breakpoints:**
   - Tablet (1024px)
   - Mobile Large (768px) con menú hamburguesa
   - Mobile (480px)

6. **Integrar tabla de tickets con filtrado dinámico** y fila resumen con `colspan`.

7. **Incluir elementos multimedia:** video e imagen con estilos CSS.

---

## 3. DESARROLLO DEL AVANCE (APF2)

### 3.1 Descripción del Proyecto

**Nombre del proyecto:**
Sistema de Gestión de Tickets - JeanDesa

**Breve explicación de la propuesta de solución:**
Se desarrolló una aplicación web tipo SPA (Single Page Application) que incluye:

- **Sección Hero:** Presentación del sistema con gradiente, animaciones CSS y botones de acción
- **Sección Dashboard:** Tarjetas de estadísticas con CSS Grid y tabla de tickets recientes
- **Sección Nuevo Ticket:** Formulario con grid de 2 columnas y validación HTML5
- **Sección Mis Tickets:** Tabla completa con filtros dinámicos (estado, prioridad, categoría) y acciones
- **Sección Soporte:** Grid con FAQ y contacto, incluyendo video e imagen
- **Footer:** Información organizada con Flexbox en 3 columnas

**Público objetivo o beneficiarios:**
- Equipos de soporte técnico que necesitan gestionar incidencias
- Empresas que requieren un sistema de seguimiento de solicitudes
- Usuarios que necesitan reportar y dar seguimiento a problemas técnicos

### 3.2 Resultados Preliminares

#### Evidencias del trabajo

**Estructura del proyecto:**
```
Proyecto2/
├── index.html          # Aplicación principal (HTML + CSS + JS)
├── informe-apf2.md     # Este informe
└── media/
    ├── trabajo-para-ingeniero-de-sistemas-.webp
    ├── 01HSH4PPWXY8TW36DWFQR4SGD9.mp3
    └── YTDown.com_YouTube_AboutMe-Video...mp4
```

**Tecnologías utilizadas:**

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica (header, nav, main, section, article, footer) |
| CSS3 | Variables CSS, Grid, Flexbox, animaciones, gradientes, media queries |
| JavaScript | Lógica de negocio, DOM manipulation, localStorage, eventos |
| Google Fonts | Tipografías Inter y Poppins |
| Font Awesome | Iconografía |

**Elementos implementados:**

| Elemento | Estado | Descripción |
|----------|--------|-------------|
| Header sticky con Flexbox | Completado | Logo con gradiente y navegación responsiva |
| Menú hamburguesa | Completado | Menú colapsable para móviles con toggle JS |
| Hero con animaciones | Completado | Sección con gradiente, patrón SVG y fadeInUp |
| Dashboard con Grid | Completado | 4 tarjetas de estadísticas con contadores dinámicos |
| Formulario con Grid | Completado | Grid de 2 columnas con validación HTML5 |
| Tabla de tickets con filtros | Completado | Filtrado por estado, prioridad y categoría |
| Fila resumen con colspan | Completado | Total de tickets mostrados |
| Sección FAQ y Soporte | Completado | Grid de 2 columnas con artículos FAQ |
| Video integrado | Completado | Video con controles de reproducción |
| Imagen con hover | Completado | Imagen con efecto scale al hover |
| Footer con Flexbox | Completado | 3 columnas con información y enlaces |
| Diseño responsivo | Completado | 3 breakpoints (1024px, 768px, 480px) |
| CRUD de tickets con JS | Completado | Crear, ver, eliminar tickets con localStorage |
| Variables CSS | Completado | Paleta de colores y valores reutilizables |
| Animaciones CSS | Completado | fadeInUp, pulse, slideIn con @keyframes |

#### Principales logros alcanzados

1. **Layouts avanzados con CSS Grid y Flexbox:**
   - El dashboard usa `display: grid` con `auto-fit` y `minmax()` para una cuadrícula adaptable.
   - El formulario usa grid de 2 columnas con clase `.full-width` para campos que ocupan todo el ancho.
   - La navegación y el footer usan Flexbox con `flex-wrap` para adaptabilidad.
   - La sección de contacto usa grid de 2 columnas (`1fr 1fr`).

2. **Sistema de tickets funcional con JavaScript:**
   - Persistencia de datos con `localStorage` que mantiene los tickets entre sesiones.
   - Generación automática de IDs incrementales (TKT-001, TKT-002, etc.).
   - Dashboard que actualiza los contadores en tiempo real al crear o eliminar tickets.
   - Filtrado dinámico de la tabla por estado, prioridad y categoría.

3. **Variables CSS para theming consistente:**
   - Se definieron variables para colores primarios, secundarios, estados (success, warning, danger), sombras y bordes redondeados en `:root`.
   - Esto facilita el mantenimiento y la consistencia visual en todo el proyecto.

4. **Animaciones y transiciones CSS:**
   - `@keyframes fadeInUp` para la entrada del hero.
   - `@keyframes slideIn` para las tarjetas del dashboard con `animation-delay` escalonado.
   - Transiciones en hover para botones, tarjetas, enlaces y FAQ items.

5. **Diseño responsivo con 3 breakpoints:**
   - **1024px:** Grid de 2 columnas en stats, contacto en 1 columna.
   - **768px:** Menú hamburguesa, grid de 1 columna en stats y formulario, botones apilados.
   - **480px:** Tarjetas en column, tipografía reducida, botones del formulario apilados.

6. **Tabla con estructura semántica y fila resumen:**
   - Uso de `thead` con gradiente y `tbody` dinámico.
   - Fila resumen con `colspan` que muestra el total de tickets filtrados.
   - Badges de colores para estados y prioridades.

---

## 4. CONCLUSIONES

1. Se logró desarrollar una aplicación web completa de gestión de tickets que cumple con los requisitos de CSS Grid, Flexbox, formularios, tablas y multimedia.

2. La implementación de JavaScript permite una experiencia interactiva real, con persistencia de datos en localStorage y actualización dinámica del dashboard y las tablas.

3. El uso de variables CSS demuestra buenas prácticas de desarrollo frontend, facilitando el mantenimiento y la consistencia del diseño.

4. Las animaciones CSS enriquecen la experiencia de usuario sin afectar el rendimiento, con transiciones suaves en elementos interactivos.

5. El diseño responsivo con 3 breakpoints garantiza una experiencia óptima en escritorio, tablet y dispositivos móviles, incluyendo un menú hamburguesa funcional.

6. El proyecto demuestra la integración exitosa de HTML5 semántico, CSS3 avanzado y JavaScript en una aplicación web profesional y funcional.

---

## 5. REFERENCIAS BIBLIOGRÁFICAS

1. MDN Web Docs. (2024). *CSS Grid Layout*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout

2. MDN Web Docs. (2024). *CSS Flexible Box Layout*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout

3. MDN Web Docs. (2024). *Using CSS custom properties (variables)*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties

4. MDN Web Docs. (2024). *Window: localStorage property*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

5. W3Schools. (2024). *CSS Animations*. https://www.w3schools.com/css/css3_animations.asp

6. Font Awesome. (2024). *The iconic SVG, font, and CSS framework*. https://fontawesome.com/

---

## 6. ANEXOS

### Anexo A: Estructura de secciones del proyecto

| Sección | Técnica CSS Principal | Funcionalidad JS |
|---------|----------------------|------------------|
| Header | Flexbox (justify-content, align-items) | Menú hamburguesa toggle |
| Hero | Gradiente + animaciones @keyframes | - |
| Dashboard | CSS Grid (auto-fit, minmax) | Contadores dinámicos |
| Nuevo Ticket | CSS Grid (2 columnas) | Validación y envío de formulario |
| Mis Tickets | Flexbox (filtros) + tabla | Filtrado dinámico, CRUD |
| Soporte | CSS Grid (2 columnas) | - |
| Footer | Flexbox (flex-wrap) | - |

### Anexo B: Código fuente relevante

**Variables CSS (extracto):**
```css
:root {
    --primary: #4F46E5;
    --primary-dark: #4338CA;
    --secondary: #06B6D4;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --background: #F9FAFB;
    --surface: #FFFFFF;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --radius: 12px;
}
```

**Dashboard con CSS Grid (extracto):**
```css
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
}
```

**Formulario con CSS Grid (extracto):**
```css
.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.form-group.full-width {
    grid-column: 1 / -1;
}
```

**Animación fadeInUp (extracto):**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Gestión de tickets con JavaScript (extracto):**
```javascript
function inicializarTickets() {
    if (!localStorage.getItem('tickets2')) {
        localStorage.setItem('tickets2', JSON.stringify(ticketsEjemplo));
    }
}

document.getElementById('form-ticket').addEventListener('submit', function(e) {
    e.preventDefault();
    const nuevoTicket = {
        id: generarIdTicket(),
        solicitante: document.getElementById('solicitante').value,
        email: document.getElementById('email').value,
        titulo: document.getElementById('titulo-ticket').value,
        categoria: document.getElementById('categoria').value,
        prioridad: document.getElementById('prioridad').value,
        descripcion: document.getElementById('descripcion').value,
        estado: 'abierto',
        fecha: obtenerFechaActual()
    };
    // ... guardar y actualizar vistas
});
```

**Integración multimedia (extracto):**
```html
<video controls>
    <source src="media/video.mp4" type="video/mp4">
</video>

<img src="media/imagen.webp" alt="Equipo de soporte técnico">
```

---

*Documento elaborado como parte del Avance de Proyecto Formativo 2 (APF2)*
