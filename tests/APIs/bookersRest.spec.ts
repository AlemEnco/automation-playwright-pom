import { BookerRest } from '@/apiProviders/bookerRest'
import { PasswordType, UserType } from '@/utils/enums'
import { AuthRequest } from '@/utils/interfaces'
import { expect, test } from '@playwright/test'

test.describe('Automatización de APIs', () => {
    let bookerRest: BookerRest

    test.beforeEach(async () => {
        const currentBookerRest = new BookerRest()
        bookerRest = await currentBookerRest.init()
    })

    //
    // 1) LOGIN PASSWORD
    //

    test('TC-LOGIN-PWD-001: Login exitoso con credenciales válidas (password)', async () => {
        const bodyRequest: AuthRequest = {
            username: UserType.UserNameCorrecto,
            password: PasswordType.PasswordCorrecto
        }

        const response = await bookerRest.loginWithPassword(bodyRequest)

        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody).toMatchObject({
            token: expect.any(String)
        })
    })

    test('TC-LOGIN-PWD-002: Error con password incorrecto', async () => {
        const bodyRequest: AuthRequest = {
            username: UserType.UserNameCorrecto,
            password: PasswordType.PasswordIncorrecto
        }
        const response = await bookerRest.loginWithPassword(bodyRequest)

        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody).toMatchObject({
            reason: 'Bad credentials'
        })
    })

    test('TC-LOGIN-PWD-003: Error con username inexistente', async () => {
        const bodyRequest: AuthRequest = {
            username: UserType.UserNameInexistente,
            password: PasswordType.PasswordCorrecto
        }
        const response = await bookerRest.loginWithPassword(bodyRequest)

        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody).toMatchObject({
            reason: 'Bad credentials'
        })
    })
})

// Link de la documentación de las API: https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBookings
// TODO: Reto 1 - Automatizar el endpoint GET /booking ya creado en bookerRest.ts con los siguientes casos de prueba:
// 1- Crear un test automatizado para validar el status 200 y BodyResponse con firstName, lastName correctos (Recuerda que todos los campos son opcionales, por lo que puedes enviar solo uno o ambos)
// 2- Crear un test automatizado para validar el status 200 y BodyResponse con firstName correcto y lastName inexistente (Validar que se retorne un array vacío)
// 3- Crear un test automatizado para validar el status 200 y BodyResponse con firstName incorrecto y lastName correcto
// 4- Crear un test automatizado para validar el status 200 y BodyResponse con checkin y checkout correctos

// TODO: Reto 2 - Crear en bookerRest.ts y Automatizar el endpoint GET /booking/:id (GetBooking)
// 1- Crear un método llamado getBookingById que reciba como parámetro el id de la reserva
// 2- Crear un test automatizado para validar el status 200 y BodyResponse con un id de reserva existente
// 3- Crear un test automatizado para validar el status 404 y BodyResponse con un id de reserva inexistente

// TODO: Reto 3 - Crear en bookerRest.ts y Automatizar el endpoint PUT /booking/:id (UpdateBooking)
// 1- Crear un método llamado updateBookingById que reciba como parámetro el id de la reserva
// 2- Crear un test automatizado para validar el flujo completo de actualización de una reserva (status 200, BodyResponse con los datos actualizados) con un id de reserva existente
// 2.1 Pasos para el flujo completo de actualización de una reserva:
// - Buscar una reserva (GET /booking/:id) y obtener su información (id, firstname, lastname, totalprice, depositpaid)
// - Actualizar la reserva buscada (PUT /booking/:id) utilizando el id obtenido en el paso anterior
// - Validar que la respuesta de la actualización tenga status 200 y que el BodyResponse contenga los datos actualizados
// - Validar buscando nuevamente la reserva actualizada (GET /booking/:id) que los datos se hayan actualizado correctamente con los datos enviados en el paso anterior