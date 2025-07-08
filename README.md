# Proyecto React: Mini App de Noticias

## Descripción

Este proyecto es un miniproyecto desarrollado con React que integra varios conceptos clave: React Router, Context API, uso de localStorage y consumo de una API externa (News API). El objetivo es practicar y consolidar habilidades en desarrollo web moderno con React y JavaScript, además de usar SASS para los estilos.

---

## Estructura y funcionalidades principales

### Rutas principales con React Router

- `/home`  
  Página de bienvenida con noticias creadas localmente desde el formulario.

- `/form`  
  Formulario para crear una nueva noticia.

  - Al enviar, la noticia se guarda en el **localStorage**.
  - Tras el alta, se redirige automáticamente a `/list`.

- `/list`  
  Lista detallada de noticias.
  - Muestra las noticias obtenidas desde la **API externa** (News API).
  - Los títulos de las noticias son enlaces que llevan a la noticia original.

---

### Componentes mínimos implementados

- **Header**  
  Barra de navegación y enlaces a las rutas principales.

- **Home**  
  Muestra las noticias creadas desde el formulario (noticias locales).

- **Form**  
  Formulario para dar de alta una nueva noticia, guardándola en localStorage.

- **ListNews**  
  Renderiza la lista de noticias desde la API, mostrando títulos como enlaces.

- **Footer**  
  Pie de página con información básica.

---

### Tecnologías y herramientas usadas

- **React**  
  Para construir la SPA y los componentes.

- **React Router**  
  Para manejar la navegación entre `/home`, `/form` y `/list`.

- **Context API**  
  Para manejar el estado global de noticias y facilitar la comunicación entre componentes.

- **localStorage**  
  Para persistir las noticias creadas localmente.

- **SASS/SCSS**  
  Para estilos más organizados y mantenibles.

---

## Cómo usar este proyecto

1. Clonar el repositorio

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>

   ```

2. Instalar paquetes con el comando npm install
3. npm run dev

## Notas importantes

Configuración de la API Key
Para que la aplicación funcione correctamente y pueda obtener noticias desde la API externa, debes:

Registrarte en la plataforma de la API (por ejemplo, The New York Times Developer Portal).

Crear un proyecto y generar una API key.

Crear un archivo .env en la raíz del proyecto con la variable:

Reiniciar el servidor de desarrollo para que la variable se cargue correctamente.
