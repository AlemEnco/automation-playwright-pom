import { expect, test } from '@playwright/test'
import { environment } from '../../../src/config/environment'
import { LoginPage } from '../../../src/pages/LoginPage'

/**
 * Simple Login Test Suite (without database)
 * Tests basic login functionality using Page Object Model
 */
test.describe('Simple Login Tests', () => {
  let loginPage: LoginPage

  // Setup before each test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)

    // Navigate to login page
    await loginPage.navigateToLoginPage()

    // Validate login page is loaded
    await loginPage.validateLoginPageLoaded()
  })

  //TODO: Reto 1 - Corregir el Test
  test('should successfully login with valid credentials', async () => {
    // Act - Perform login with hardcoded valid credentials
    await loginPage.login(environment.test.username, environment.test.password)

    // Assert - Verify successful login
    await loginPage.validateSuccessfulLogin()

    // Additional assertions
    const isLoginSuccessful = await loginPage.isLoginSuccessful()
    expect(isLoginSuccessful).toBe(true)

    const successMessage = await loginPage.getSuccessMessage()
    expect(successMessage).toContain('Logged In Successfully')

    const isLogoutButtonVisible = await loginPage.isLogoutButtonVisible()
    expect(isLogoutButtonVisible).toBe(true)
  })

  test('should fail login with invalid credentials', async () => {
    // Act - Perform login with hardcoded invalid credentials
    await loginPage.login('invalid_user', 'invalid_password')

    // Assert - Verify failed login
    await loginPage.validateFailedLogin()
  })
})

//TODO: Reto 2 - Automatización ruta https://practicetestautomation.com/practice-test-exceptions/
// Crear un test automatizado que valide la edición del row 1 de pizza por hamburguesa
// Crear un test automatizado que valide la agregación de un segundo row con su mensaje de exito
// Crear un test automatizado que valide el row uno deshabilitado


//TODO: Reto 3 - Automatización ruta https://practicetestautomation.com/practice-test-table/
// Crear un test automatizado que valide el filtro "Language: Java" en la tabla, además se debe validar cantidad de registros iniciales contra la cantidad de registros filtrados
// Crear un test automatizado que valide el filtro "Language: Python" y "Level: Advanced" en la tabla, además se debe validar el mensaje de "No matching courses." al no encontrar registros que cumplan con ambos filtros
// Crear un test automatizado que valide el filtro "Level: Beginner" en la tabla, además se debe validar que el mensaje de "No matching courses." no se muestre al encontrar registros que cumplan con el filtro
// Crear un test automatizado que valide el filtro "Language: Any" y "Level: Beginner + Intermediate" en la tabla, además se debe validar que el mensaje de "No matching courses."
// Crear un test automatizado que con el filtro "Language: Any" y "Level: Beginner + Intermediate + Advanced" en la tabla, valide el ordenamiento de los registros (Sort by) por 'Enrollments' de menor a mayor
// Crear un test automatizado que con el filtro "Language: Any", "Level: Beginner + Intermediate + Advanced" y "Min enrollments: 50,000+", valide en la tabla que solo se muestren las filas con enrollments mayores o iguales a 50,000 y aparezca el botón de "Reset"