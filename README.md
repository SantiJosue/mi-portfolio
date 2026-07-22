# Portfolio

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styledcomponents&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

Portfolio personal desarrollado con **React** y **Styled Components**, donde presento mi perfil profesional, formación, tecnologías y una selección de proyectos desarrollados durante mi aprendizaje en desarrollo Frontend y Full Stack.

El objetivo del proyecto fue crear una aplicación moderna, responsive y reutilizable, aplicando buenas prácticas de desarrollo y una interfaz limpia orientada a la experiencia de usuario.

## Demo

**Aplicación**

> https://tu-portfolio.vercel.app

---

# Capturas

> Próximamente

<!--
![Hero](docs/hero.png)

![Proyectos](docs/projects.png)

![Tecnologías](docs/technologies.png)
-->

---

# Características

## Presentación

- Perfil profesional
- Descripción personal
- Imagen de presentación
- Accesos rápidos a proyectos y contacto

## Tecnologías

- Tecnologías organizadas mediante datos dinámicos (JSON)
- Iconos utilizando React Icons
- Componentes reutilizables
- Diseño responsive

## Proyectos

- Tarjetas reutilizables
- Enlaces a GitHub
- Enlaces a demos cuando están disponibles
- Tecnologías utilizadas en cada proyecto

## Educación

- Formación académica
- Certificados
- Enlaces directos a cada certificado

## Contacto

- Email
- LinkedIn
- GitHub

## Interfaz

- Diseño completamente responsive
- Animaciones sutiles
- Navegación fija (Sticky Navbar)
- Menú lateral para dispositivos móviles
- Componentes reutilizables mediante Styled Components

---

# Tecnologías

- React
- JavaScript
- Vite
- Styled Components
- React Icons
- Lucide React

---

# Arquitectura

```text
                Usuario
                    │
                    ▼
          React + JavaScript
                    │
           Styled Components
                    │
                    ▼
          Componentes reutilizables
                    │
                    ▼
      Datos dinámicos (JSON + Assets)
```

---

# Estructura del proyecto

```text
mi-portfolio
│
├── public
│   ├── hero
│   ├── projects
│   ├── education
│   ├── certificados
│   └── contact
│
├── src
│   ├── components
│   │   ├── common
│   │   ├── Hero
│   │   ├── Navbar
│   │   ├── Projects
│   │   ├── Technologies
│   │   ├── Education
│   │   └── Contact
│   │
│   ├── data
│   ├── utils.js
│   ├── vars.css
│   └── App.jsx
│
├── breakpoints.js
├── package.json
└── README.md
```

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/SantiJosue/mi-portfolio.git
```

Entrar al proyecto

```bash
cd mi-portfolio
```

Instalar dependencias

```bash
npm install
```

Ejecutar en desarrollo

```bash
npm run dev
```

---

# Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión optimizada para producción.

```bash
npm run preview
```

Previsualiza la versión compilada.

---

# Estado del proyecto

El portfolio continúa evolucionando a medida que desarrollo nuevos proyectos y adquiero experiencia.

Próximas mejoras:

- Modo oscuro/claro
- Internacionalización (Español / Inglés)
- Animaciones más avanzadas
- Filtros de proyectos
- Capturas de pantalla de cada proyecto
- Más proyectos Full Stack

---

# Autor

**Santiago Fernández**

Desarrollador Frontend especializado en React y TypeScript, actualmente ampliando sus conocimientos en desarrollo Full Stack con Node.js, Express y MongoDB.

GitHub

https://github.com/SantiJosue

LinkedIn

https://www.linkedin.com/in/santiago-fernández-4b8bb1232/

Portfolio

https://mi-portfolio-mocha-xi.vercel.app

---

# Licencia

Este proyecto fue desarrollado con fines educativos y como portfolio personal para mostrar proyectos y habilidades en desarrollo web.
