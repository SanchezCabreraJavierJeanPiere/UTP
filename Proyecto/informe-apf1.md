# INFORME DE AVANCE DE PROYECTO - APF1

---

## PORTADA

**Universidad Tecnológica del Perú**

**Carrera:** Ingeniería de Sistemas

**Curso:** [Nombre del curso]

**Docente:** [Nombre del docente]

**Título del Proyecto:**
**Formulario de Contacto con Experiencia Multimedia**

**Estudiante:**
Jean Piere Sanchez

**Ciclo:** 2026-I

**Fecha:** Enero 2026

---

## 1. INTRODUCCIÓN

### Breve descripción del proyecto

El presente proyecto consiste en el desarrollo de una página web responsiva tipo portafolio personal que integra un formulario de contacto personalizado con CSS y elementos multimedia (imagen, audio y video). El proyecto aplica buenas prácticas de estructura semántica HTML5, accesibilidad y diseño moderno con CSS3.

### Contexto o problemática que se aborda

En el contexto actual, los profesionales de tecnología necesitan una presencia digital que les permita mostrar sus habilidades, proyectos y facilitar el contacto con potenciales empleadores o clientes. Este proyecto aborda la necesidad de crear una plataforma web personal que sea:

- Visualmente atractiva y profesional
- Responsiva para diferentes dispositivos
- Funcional con formularios de contacto validados
- Enriquecida con contenido multimedia

---

## 2. OBJETIVOS DEL PROYECTO

### Objetivo General

Desarrollar una página web responsiva que contenga un formulario de contacto personalizado con CSS y elementos multimedia, aplicando buenas prácticas de estructura semántica, accesibilidad y estilo moderno.

### Objetivos Específicos (alcanzados en este primer avance)

1. **Implementar la estructura HTML semántica** con las etiquetas `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` y `<footer>`.

2. **Crear un formulario de contacto funcional** con campos validados:
   - Campo de nombre (required)
   - Campo de email con validación de formato
   - Lista desplegable para tipo de consulta
   - Área de texto para mensajes

3. **Integrar elementos multimedia:**
   - Imagen representativa con estilos CSS
   - Audio con controles de reproducción
   - Video de presentación

4. **Aplicar estilos CSS modernos:**
   - Diseño responsivo con media queries
   - Efectos hover y focus en elementos interactivos
   - Colores, sombras y bordes redondeados

5. **Incluir una tabla de proyectos** con estructura semántica (`thead`, `tbody`) y uso de `colspan`.

---

## 3. DESARROLLO DEL AVANCE (APF1)

### 3.1 Descripción del Proyecto

**Nombre del proyecto:**
Formulario de Contacto con Experiencia Multimedia

**Breve explicación de la propuesta de solución:**
Se desarrolló un sitio web de tipo portafolio personal que incluye:

- **Sección "Sobre Mí":** Presentación personal con imagen y video
- **Sección "Habilidades":** Lista estilizada de competencias técnicas
- **Sección "Portafolio":** Proyectos realizados con tarjetas y tabla resumen
- **Sección "Contacto":** Formulario completo con validación HTML5
- **Sección "Multimedia":** Galería de imagen y reproductor de audio

**Público objetivo o beneficiarios:**
- Profesionales de tecnología que buscan mostrar su trabajo
- Estudiantes que desean crear su portafolio digital
- Reclutadores y empresas en busca de talento

### 3.2 Resultados Preliminares

#### Evidencias del trabajo

**Estructura del proyecto:**
```
Proyecto/
├── index.html          # Página principal
├── informe-apf1.md     # Este informe
└── media/
    ├── trabajo-para-ingeniero-de-sistemas-.webp
    ├── 01HSH4PPWXY8TW36DWFQR4SGD9.mp3
    └── YTDown.com_YouTube_AboutMe-Video...mp4
```

**Tecnologías utilizadas:**

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica |
| CSS3 | Estilos y diseño responsivo |
| Font Awesome | Iconografía |
| Media Queries | Adaptabilidad móvil |

**Elementos implementados:**

| Elemento | Estado | Descripción |
|----------|--------|-------------|
| Header con navegación | Completado | Encabezado con menú de navegación |
| Formulario de contacto | Completado | Campos validados con HTML5 |
| Sección multimedia | Completado | Imagen y audio integrados |
| Video de presentación | Completado | Video con controles |
| Tabla de proyectos | Completado | Con colspan para resumen |
| Diseño responsivo | Completado | Adaptable a móviles |

#### Principales logros alcanzados

1. **Estructura semántica completa:** Se utilizaron correctamente las etiquetas HTML5 semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`).

2. **Formulario funcional:** Implementación de un formulario con:
   - Validación nativa de HTML5
   - Campos required
   - Tipo email con validación automática
   - Select con opciones

3. **Integración multimedia exitosa:**
   - Imagen con estilos CSS (border-radius, box-shadow)
   - Audio con atributo controls
   - Video con controles de reproducción

4. **Diseño responsivo:** El sitio se adapta correctamente a dispositivos móviles usando media queries.

5. **Tabla con estructura semántica:** Implementación de tabla con `thead`, `tbody` y uso de `colspan` para la fila de resumen.

---

## 4. CONCLUSIONES

1. Se logró desarrollar exitosamente la estructura base del portafolio web cumpliendo con los requisitos de HTML5 semántico.

2. El formulario de contacto implementado incluye validaciones nativas que mejoran la experiencia del usuario.

3. La integración de elementos multimedia (imagen, audio y video) enriquece el contenido y demuestra el manejo de diferentes tipos de medios en web.

4. El diseño responsivo garantiza una buena experiencia de usuario en diferentes dispositivos.

5. El proyecto sienta las bases para futuras mejoras como la implementación de JavaScript para validaciones avanzadas y el envío real del formulario.

---

## 5. REFERENCIAS BIBLIOGRÁFICAS

1. MDN Web Docs. (2024). *HTML: HyperText Markup Language*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/HTML

2. MDN Web Docs. (2024). *CSS: Cascading Style Sheets*. Mozilla Developer Network. https://developer.mozilla.org/es/docs/Web/CSS

3. W3Schools. (2024). *HTML5 Tutorial*. https://www.w3schools.com/html/

4. Font Awesome. (2024). *The iconic SVG, font, and CSS framework*. https://fontawesome.com/

---

## 6. ANEXOS

### Anexo A: Capturas de pantalla

*[Insertar capturas de pantalla del proyecto funcionando]*

- Captura 1: Vista completa del sitio en escritorio
- Captura 2: Sección del formulario de contacto
- Captura 3: Sección multimedia
- Captura 4: Vista en dispositivo móvil

### Anexo B: Código fuente relevante

**Estructura del formulario (extracto):**
```html
<form action="#" method="POST">
    <div class="form-group">
        <label for="nombre">Nombre completo *</label>
        <input type="text" id="nombre" name="nombre" required>
    </div>
    <div class="form-group">
        <label for="email">Correo electrónico *</label>
        <input type="email" id="email" name="email" required>
    </div>
    <!-- ... más campos ... -->
</form>
```

**Integración de multimedia (extracto):**
```html
<audio controls>
    <source src="media/archivo.mp3" type="audio/mpeg">
</audio>

<video controls>
    <source src="media/video.mp4" type="video/mp4">
</video>
```

---

*Documento elaborado como parte del Avance de Proyecto Formativo 1 (APF1)*
