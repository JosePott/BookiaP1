# Bookia — seguimiento de lecturas

Prototipo de aplicación para organizar libros y visualizar hábitos de lectura, desarrollado con React, TypeScript e Ionic. Incluye un proyecto Android mediante Capacitor e integración con Firebase.

## Pantallas

- Tus libros.
- Biblioteca y favoritos.
- Mi avance.
- Perfil.
- Inicio de sesión y registro.

La pantalla de avance contiene cifras de ejemplo definidas en el código; no representan seguimiento automático de lecturas.

## Tecnologías

React · TypeScript · Ionic · Capacitor · Firebase · Vite

## Desarrollo local

Requisitos: Node.js y npm compatibles con las dependencias de `package.json`.

```bash
npm ci
npm run dev
```

Abre la dirección que muestre Vite en la terminal.

La configuración de Firebase se encuentra en `src/firebase/firebaseConfig.ts`. Para trabajar con un proyecto propio, revisa esa configuración y los servicios utilizados por las pantallas de autenticación.

## Comandos disponibles

| Comando | Propósito |
| --- | --- |
| `npm run build` | Comprobar TypeScript y compilar la aplicación |
| `npm run preview` | Servir la compilación local |
| `npm run lint` | Revisar el código con ESLint |
| `npm run test.unit` | Ejecutar Vitest |
| `npm run test.e2e` | Ejecutar Cypress |

Para las pruebas de extremo a extremo, revisa `cypress.config.ts` y ejecuta la aplicación en la dirección configurada. Estos comandos están definidos en el proyecto; esta documentación no certifica su ejecución.

## Estructura

- `src/pages/`: pantallas.
- `src/components/`: componentes reutilizables.
- `src/firebase/`: configuración de Firebase.
- `src/theme/`: estilos del tema.
- `android/`: proyecto nativo de Capacitor.
- `cypress/`: configuración y pruebas de extremo a extremo.
