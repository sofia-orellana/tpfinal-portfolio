# Portfolio personal — Sofia Orellana

Portfolio web one-page de diseño UX/UI, desarrollado como trabajo final de **Diseño UX-UI 2026** (Licenciatura en Sistemas de Información, UADER).

- **Sitio publicado:** https://tpfinal-portfolio.netlify.app/
- **Figma (research, wireframes, design system y prototipo):** https://www.figma.com/design/iGww3VcM4solEnYjLK4CSu/Portfolio-personal-%E2%80%94-Sofia-Orellana?node-id=0-1&p=f&t=KMYiJ0lA8fn70mWy-0

## Concepto
Tres palabras clave: **creativo · cálido · personal**. Estética de scrapbook editorial, composición limpia, marcos rosa y un pentágono como motivo gráfico.

## Stack
- HTML5 semántico y CSS3 con variables `:root` (paleta, tipografías y espaciados).
- JavaScript vanilla solo para el menú móvil y el modal del caso de estudio.
- Sin frameworks ni constructores visuales.
- Formulario de contacto con **Netlify Forms**.

## Design system
| Rol | Color |
|---|---|
| Texto | `#41241C` |
| Fondo | `#FDF4E9` |
| Primario | `#CC5A71` |
| Secundario | `#F4C4CC` |
| Acento | `#A47561` |

Tipografías: **Lora** (títulos) e **Inter** (texto). Espaciado en múltiplos de 4 y 8.
Accesibilidad: el acento `#A47561` no alcanza contraste AA en texto chico, por eso en texto pequeño se usa `#6E4636`.

## Estructura del proyecto
```
├── index.html
├── 404.html
├── gracias.html
├── css/styles.css
├── js/main.js
└── assets/
```

## Proceso UX
- **Usuario:** proto-persona (reclutadora IT) y escenario de uso.
- **Benchmark:** portfolios de Ernesto Ledesma, iamsunnywang.com y andreas.vision, con lo que funciona y lo que no en cada uno.
- **Arquitectura:** sitemap one-page con anclas y agrupación del contenido por secciones.
- **Test de usabilidad:** 3 personas, 3 tareas (encontrar un proyecto, entender qué estudio, encontrar el contacto). Las tres completaron las tareas sin dificultad y destacaron la organización, la paleta y la estética. No hizo falta modificar la navegación.
- El detalle completo está en el PDF de proceso entregado y en el Figma.

## Despliegue (Netlify)
1. Subir el proyecto a un repositorio público de GitHub.
2. En Netlify: **Add new site → Import an existing project → GitHub** y elegir el repositorio.
3. Dejar el comando de build vacío y el directorio de publicación en la raíz (`/`).
4. Netlify publica el sitio y vuelve a desplegar automáticamente en cada `git push` a `main` (CI/CD).
5. En **Forms** se activa la detección del formulario `contacto`; las notificaciones por email se configuran en *Form notifications*.

## Rendimiento y accesibilidad (Lighthouse mobile, sitio publicado)
| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| 98–99 | 100 | 100 | 100 |

Medido sobre https://tpfinal-portfolio.netlify.app/ en dos corridas.

## Capturas
- Lighthouse: `assets/capturas/lighthouse.png` y `assets/capturas/lighthouse-2.png`
- Comparación Figma / sitio (sección Proyectos): `assets/capturas/figma-seccion-proyectos.png` y `assets/capturas/sitio-seccion-proyectos.png`
- Wireframes de baja fidelidad y moodboard: carpeta `assets/proceso/`

## Recursos y créditos
- Fuentes: [Inter](https://fonts.google.com/specimen/Inter) y [Lora](https://fonts.google.com/specimen/Lora) (Google Fonts).
- Paleta: [Realtime Colors](https://www.realtimecolors.com/).
- Moodboard: imagen de referencia scrapbook de un portfolio creativo de terceros (firma visible: "Made by Ches"), usada solo como inspiración visual; no se copió su diseño.
- No se usaron templates.

## Uso de IA
Se utilizó **Claude (Anthropic)** para generar la estructura inicial de HTML/CSS a partir de capturas del Figma, el formulario de contacto, correcciones de contraste y de la línea de tiempo, y un borrador del PDF de proceso. El diseño, el contenido, las pruebas con usuarios y la revisión final fueron realizados y verificados por la autora.

## Autora
Sofia Orellana.