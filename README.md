# Catálogo Web de Escaleras Metálicas Jomat

## 📋 Descripción

Catálogo web simple, moderno y responsive para la venta de escaleras metálicas. Desarrollado con HTML5, CSS3 y JavaScript puro, sin dependencias externas.

## 📁 Estructura de Carpetas

```
catalogo-escaleras/
│
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS (responsive)
├── script.js           # Funcionalidades JavaScript
├── images/             # Carpeta de imágenes
│   ├── escalera1.jpg   # Imagen frontal
│   ├── escalera2.jpg   # Imagen lateral
│   └── escalera3.jpg   # Imagen detalle
└── README.md           # Este archivo
```

## 🚀 Características

✅ **Diseño Responsive** - Se adapta a todos los dispositivos (móvil, tablet, escritorio)
✅ **Galería Interactiva** - Sistema de miniaturas para cambiar de imagen
✅ **Navegación por Teclado** - Usa ↑ → ← para navegar entre imágenes
✅ **Integración WhatsApp** - Botón de contacto directo
✅ **Sin Frameworks** - HTML, CSS y JavaScript puro
✅ **Optimizado** - Código limpio y bien comentado
✅ **Accesible** - Cumple con estándares de accesibilidad web
✅ **SEO Friendly** - Metaetiquetas y estructura semántica

## 📱 Secciones de la Página

1. **Encabezado** - Nombre de la empresa y tagline
2. **Galería de Imágenes** - Visor principal + miniaturas
3. **Información del Producto** - Nombre, especificaciones
4. **Descripción** - Características y beneficios
5. **Precio** - Contenido destacado ($320.000 CLP)
6. **Botones de Contacto** - WhatsApp y Email
7. **Ubicación** - Chiguayante, Biobío
8. **Footer** - Información de contacto

## 🎨 Personalización

### Cambiar el número de WhatsApp

En `index.html`, busca la línea (~línea 60) y reemplaza el número:

```html
<a href="https://wa.me/56912345678?text=...">
```

Reemplaza `56912345678` con tu número de WhatsApp (incluye el código de país 56 para Chile).

### Cambiar el email de contacto

En `index.html`, busca la línea (~línea 65) y reemplaza el email:

```html
<a href="mailto:info@jomat.cl?subject=...">
```

### Cambiar colores

En `styles.css`, línea 10-17, puedes modificar las variables:

```css
:root {
    --primary-color: #1a1a1a;      /* Negro principal */
    --secondary-color: #d4a574;    /* Dorado/Madera */
    --text-color: #333333;         /* Texto oscuro */
    --light-bg: #f8f8f8;           /* Fondo claro */
    --accent-green: #25d366;       /* Verde WhatsApp */
}
```

### Actualizar el teléfono de contacto

En `index.html`, línea ~114, actualiza tu número:

```html
<p>Teléfono: +56 9 XXXX XXXX</p>
```

### Cambiar el precio

En `index.html`, línea ~77, modifica el precio:

```html
<p class="price">$320.000 CLP</p>
```

## 🖼️ Agregar Imágenes

1. Coloca tus 3 imágenes en la carpeta `images/`
2. Nómbralas como: `escalera1.jpg`, `escalera2.jpg`, `escalera3.jpg`
3. Las imágenes deben ser JPG o PNG
4. Tamaño recomendado: mínimo 800x600px para mejor calidad

## 🌐 Cómo Abrir el Catálogo

### Opción 1: Abrir directamente con el navegador
1. Haz clic derecho en `index.html`
2. Selecciona "Abrir con" y elige tu navegador

### Opción 2: Usar un servidor local (recomendado)

**Con Python 3:**
```bash
cd "c:\Users\Josta\OneDrive\Documentos\Catalogo Escalera Jomat"
python -m http.server 8000
```
Luego abre http://localhost:8000 en tu navegador

**Con Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**
```bash
npx http-server
```

## 📱 Funcionalidades JavaScript

### Cambio de Imagen
- Haz clic en las miniaturas para cambiar la imagen principal
- Estados: animación suave y transición visual

### Navegación por Teclado
- Flecha Izquierda (←) - Imagen anterior
- Flecha Derecha (→) - Imagen siguiente

### Validación de Imágenes
- El script verifica la carga de todas las imágenes
- Registra errores en la consola si hay problemas

## 🔍 SEO Básico

El archivo incluye metaetiquetas esenciales:
- Meta description
- Viewport para dispositivos móviles
- Estructura HTML semántica
- Atributos alt en imágenes

## 💻 Compatibilidad de Navegadores

✅ Chrome 60+
✅ Firefox 55+
✅ Safari 12+
✅ Edge 79+
✅ Opera 47+
✅ Navegadores móviles (iOS Safari, Chrome Android)

## 🚀 Publicar en Internet

### Opción 1: GitHub Pages (Gratis)
1. Crea una cuenta en [github.com](https://github.com)
2. Crea un repositorio llamado `escaleras-catalogo`
3. Sube los archivos
4. Activa GitHub Pages en Settings → Pages
5. Tu sitio estará en: `https://tuusuario.github.io/escaleras-catalogo`

### Opción 2: Netlify (Gratis)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta o conecta con GitHub
3. Tu sitio estará listo en pocos segundos

### Opción 3: Hosting Compartido
Sube los archivos vía FTP a tu servidor de hosting

## 📊 Estructura del Código

### HTML
- Semántica HTML5 correcta
- Accesibilidad web (ARIA cuando es necesaria)
- Meta tags para SEO

### CSS
- Mobile-first responsive design
- Breakpoints para tablet y móvil
- Variables CSS para fácil personalización
- Animaciones suaves y transiciones

### JavaScript
- Código modular y comentado
- Sin dependencias externas
- Funciones reutilizables
- Manejo de errores

## 🐛 Solución de Problemas

**Las imágenes no se cargan:**
- Verifica que los archivos estén en la carpeta `images/`
- Los nombres deben ser: escalera1.jpg, escalera2.jpg, escalera3.jpg
- Usa rutas relativas: `images/escalera1.jpg`

**El diseño se ve roto:**
- Limpia el caché del navegador (Ctrl + Shift + Del)
- Actualiza la página (F5)
- Abre en navegador incógnito

**WhatsApp no funciona:**
- Verifica el número incluya código de país (56 para Chile)
- Prueba en un dispositivo móvil
- Asegúrate que el enlace sea: `https://wa.me/56...`

## 📝 Notas Adicionales

- El código está completamente comentado para fácil mantenimiento
- No requiere instalación de paquetes o dependencias
- Funciona offline una vez cargadas las imágenes
- Optimizado para velocidad de carga
- Totalmente personalizable sin conocimientos avanzados

## 👥 Autor

Catálogo creado para Escaleras Metálicas Jomat
Ubicación: Chiguayante, Biobío, Chile

---

**¿Necesitas ayuda?** Consulta los comentarios en el código o abre la consola del navegador (F12) para ver mensajes de depuración.

Última actualización: 2026
