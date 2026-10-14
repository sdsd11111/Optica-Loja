# Plan de Implementación: Header con Scroll Inteligente y Sistema de Branding Oficial

## 1. Contexto y Objetivos
1. **Comportamiento del Header ("Smart Header")**:
   - Actualmente está fijo en el tope o con comportamiento estático.
   - **Requerimiento**: Debe ocultarse suavemente al hacer scroll hacia abajo (para no estorbar la lectura del contenido) y **reaparecer con animación suave en cuanto el usuario deslice la pantalla hacia arriba** (scroll-up), además de estar visible en el tope inicial de la página.
2. **Rebranding según Identidad Visual del Logo**:
   - Basado en los colores extraídos del logo y la paleta armónica sugerida:
     - **Azul interfaz principal**: `#345F78` (botones principales, llamadas a la acción, enlaces activos con excelente contraste WCAG AA/AAA).
     - **Azul original del logo**: `#6E8EA4` (acentos gráficos, badges, íconos de detalle, bordes destacados).
     - **Gris oscuro del logo**: `#595958` (encabezados de marca, subtítulos, detalles secundarios).
     - **Texto principal**: `#343A40` (párrafos de máxima legibilidad).
     - **Fondo general limpio**: `#F7F9FA` (moderno, sin deslumbramiento blanco puro).
     - **Fondo azulado suave**: `#EAF1F5` (tarjetas alternas, secciones destacadas, contenedores).
     - **Bordes y separadores**: `#DCE3E7` (discretos y elegantes).

---

## 2. Plan Paso a Paso

### Fase 1: Header Inteligente al Deslizar hacia Arriba (Smart Scroll Direction)
- **Archivo**: `src/components/Header.tsx`
- **Lógica**:
  - Implementar hook de detección de dirección de scroll (`scrollY` vs `lastScrollY`).
  - Si `scrollY <= 50` -> `visible = true`, `atTop = true`.
  - Si `scrollY > lastScrollY` (scroll abajo) -> `visible = false` (el header se desliza hacia arriba fuera de vista con `transform: translateY(-110%)`).
  - Si `scrollY < lastScrollY` (scroll arriba) -> `visible = true` (el header desciende suavemente a la vista con sombra de elevación).
- **Estilos CSS**: `globals.css`
  - Añadir clase `.hdr-clean-wrap--hidden` con `transform: translateY(-120%)` y `transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
  - Añadir clase `.hdr-clean-wrap--visible` con `transform: translateY(0)`.

### Fase 2: Actualización de Variables de Color del Sistema de Diseño
- **Archivo**: `src/app/globals.css`
- Mapear las variables CSS existentes hacia la nueva paleta de branding:
  ```css
  :root {
    /* Nueva Paleta Oficial de Branding */
    --color-primary: #345F78;       /* Azul principal de interfaz */
    --color-logo-blue: #6E8EA4;     /* Azul del logo / acentos */
    --color-logo-gray: #595958;     /* Gris oscuro del logo */
    --color-text: #343A40;          /* Texto principal */
    --color-background: #F7F9FA;    /* Fondo general */
    --color-surface-blue: #EAF1F5;  /* Superficies y tarjetas */
    --color-border: #DCE3E7;        /* Bordes y líneas */
    
    /* Mapeo armónico de variables históricas */
    --ink: #1e3847;                 /* Títulos y máxima jerarquía */
    --ink-2: #343A40;               /* Cuerpo */
    --muted: #595958;               /* Gris del logo para secundarios */
    --lens: #345F78;                /* Botones principales y foco */
    --lens-deep: #254659;           /* Estados hover y sombras */
    --mist: #EAF1F5;                /* Superficie azul suave */
    --paper: #F7F9FA;               /* Fondo general */
    --line: #DCE3E7;                /* Bordes discretos */
  }
  ```

### Fase 3: Armonización de Componentes Clave
1. **Botones Táctiles Biselados**:
   - Ajustar el degradado del botón `.btn--primary` a la gama de `#345F78` con borde `#254659` y reflejo superior para un acabado estético de lujo.
   - Botón secundario `.btn--ghost` con fondo blanco/sutil y borde `#DCE3E7`.
2. **Badges y Etiquetas ("ZEISS Vision Expert", "Trayectoria")**:
   - Fondo `--color-surface-blue` (`#EAF1F5`) con texto y acento `--color-logo-blue` (`#6E8EA4`) y `--color-primary` (`#345F78`).
3. **Widget flotante y Modal de Agendamiento**:
   - Integrar el degradado corporativo del widget flotante con `--color-primary` (`#345F78`) y acento `--color-logo-blue` (`#6E8EA4`).
4. **Footer**:
   - Conservar fondo profundo de contraste ultra nítido `#0c1f2c` con detalles y enlaces en `#6E8EA4` y `#EAF1F5`.

### Fase 4: Validación y Verificación
- Comprobar contrastes de accesibilidad WCAG en texto y botones.
- Probar el comportamiento del scroll arriba/abajo en desktop y mobile.
- Ejecutar `npm run build` para asegurar cero errores de compilación.
