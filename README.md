# Automation Playwright - Proyecto de Automatización

Proyecto de automatización de pruebas web y APIs usando Playwright y TypeScript con el patrón Page Object Model (POM).

## 🚀 Características

- **TypeScript** - Desarrollo type-safe
- **Playwright** - Framework moderno para testing web y APIs
- **Page Object Model** - Patrón de diseño para organizar el código
- **Biome** - Linter y formateador de código
- **Multi-browser** - Soporte para Chromium, Firefox y WebKit

## 📋 Prerequisitos

- Node.js (>= 18.0.0)
- npm
- Visual Studio Code (recomendado)

### Extensiones Recomendadas para VS Code

Si usas Visual Studio Code, instala estas extensiones para mejorar tu experiencia de desarrollo:

1. **Playwright Test for VSCode** (`ms-playwright.playwright`)
   - Ejecuta y depura tests directamente desde el editor
   - Visualiza los tests en el explorador lateral
   - Genera tests grabando interacciones en el navegador
   - Muestra resultados de tests en tiempo real
   - Permite ejecutar tests individuales con un clic

2. **Todo Tree** (`Gruntfuggly.todo-tree`)
   - Resalta comentarios TODO, FIXME, NOTE en el código
   - Muestra todos los TODOs en una vista de árbol
   - Útil para rastrear tareas pendientes en los retos
   - Ayuda a identificar rápidamente qué falta implementar

Para instalarlas:
```bash
# Desde la terminal
code --install-extension ms-playwright.playwright
code --install-extension Gruntfuggly.todo-tree
```

O búscalas en el marketplace de extensiones de VS Code.

## 🛠️ Instalación

1. Descarga el repositorio

2. Instala las dependencias:
```bash
npm install
```

3. Instala los navegadores de Playwright:
```bash
npx playwright install
```

4. Configura las variables de entorno:
```bash
cp .env.example .env
# Edita .env con tu configuración si es necesario
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
# URLs
BASE_URL=https://practicetestautomation.com
API_BASE_URL=https://restful-booker.herokuapp.com

# Credenciales de prueba
TEST_USERNAME=student
TEST_PASSWORD=Password123

# Configuración de Playwright
HEADLESS=true
BROWSER=chromium
TIMEOUT=30000
RETRIES=2
WORKERS=4

# Ambiente
ENVIRONMENT=development
```

## 🏗️ Estructura del Proyecto

```
automation-playwright-pom/
├── src/
│   ├── apiProviders/
│   │   └── bookerRest.ts          # Cliente API para Restful Booker
│   ├── config/
│   │   └── environment.ts          # Configuración de entorno
│   ├── pages/
│   │   ├── base/
│   │   │   └── BasePage.ts        # Clase base para Page Objects
│   │   └── LoginPage.ts           # Page Object de Login
│   ├── testData/
│   │   └── importacionData.json   # Datos de prueba
│   └── utils/
│       ├── enums.ts               # Enumeraciones
│       └── interfaces.ts          # Interfaces TypeScript
├── tests/
│   ├── APIs/
│   │   └── bookersRest.spec.ts    # Tests de API
│   ├── e2e/
│   │   └── web/
│   │       └── loginTest.spec.ts  # Tests web E2E
│   └── setup/
│       ├── global-setup.ts        # Configuración global
│       └── global-teardown.ts     # Limpieza global
├── playwright.config.ts           # Configuración de Playwright
└── package.json
```

## 🧪 Ejecutar Pruebas

### Ejecutar todas las pruebas:
```bash
npm test
```

### Ejecutar solo pruebas web:
```bash
npx playwright test tests/e2e/web/
```

### Ejecutar solo pruebas de API:
```bash
npx playwright test tests/APIs/
```

### Ejecutar pruebas en modo headed:
```bash
npm run test:headed
```

### Ejecutar un archivo específico:
```bash
npx playwright test tests/APIs/bookersRest.spec.ts
npx playwright test tests/e2e/web/loginTest.spec.ts
```

### Ejecutar en modo debug:
```bash
npx playwright test --debug
```

## 📊 Reportes

Ver el reporte HTML:
```bash
npx playwright show-report
```

Los reportes se generan en:
- `playwright-report/` - Reporte HTML
- `test-results/` - Resultados JSON y JUnit

## 🎯 Retos Web (E2E)

### Reto 1 - Login Test
Corregir el test de login en `loginTest.spec.ts`

### Reto 2 - Test Exceptions
Automatización de la ruta: https://practicetestautomation.com/practice-test-exceptions/
1. Validar la edición del row 1 de pizza por hamburguesa
2. Validar la agregación de un segundo row con su mensaje de éxito
3. Validar el row uno deshabilitado

### Reto 3 - Test Table
Automatización de la ruta: https://practicetestautomation.com/practice-test-table/
1. Validar filtro "Language: Java" y cantidad de registros
2. Validar filtro "Language: Python" y "Level: Advanced" con mensaje "No matching courses"
3. Validar filtro "Level: Beginner" sin mensaje de error
4. Validar filtro "Language: Any" y "Level: Beginner + Intermediate"
5. Validar ordenamiento por 'Enrollments' de menor a mayor
6. Validar filtro "Min enrollments: 50,000+" y botón "Reset"

## 🎯 Retos API

### Reto 1 - GET /booking
Automatizar el endpoint GET /booking con los siguientes casos:
1. Validar status 200 con firstName y lastName correctos
2. Validar status 200 con firstName correcto y lastName inexistente (array vacío)
3. Validar status 200 con firstName incorrecto y lastName correcto
4. Validar status 200 con checkin y checkout correctos

### Reto 2 - GET /booking/:id
1. Crear método `getBookingById` en `bookerRest.ts`
2. Test con id existente (status 200)
3. Test con id inexistente (status 404)

### Reto 3 - PUT /booking/:id
1. Crear método `updateBookingById` en `bookerRest.ts`
2. Test de flujo completo de actualización:
   - Buscar una reserva (GET)
   - Actualizar la reserva (PUT)
   - Validar la actualización (GET)

## 🔧 Desarrollo

### Linting y Formateo
```bash
# Verificar código
npm run lint

# Corregir automáticamente
npm run fix
```

### TypeScript
```bash
# Verificar tipos
npm run tsc
```

## 📝 Documentación

- [Restful Booker API Docs](https://restful-booker.herokuapp.com/apidoc/index.html)
- [Practice Test Automation](https://practicetestautomation.com/)
- [Playwright Documentation](https://playwright.dev/)

## 📄 Licencia

MIT License
