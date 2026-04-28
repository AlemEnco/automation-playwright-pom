import path from 'path'
import { AuthRequest, GetBokingByIdRequest } from '@/utils/interfaces'
import { environment } from '@config/environment'
import { APIRequestContext, request } from '@playwright/test'
import { config } from 'dotenv'

config({ path: path.resolve(process.cwd(), '.env') })
export class BookerRest {
  private baseUrl?: APIRequestContext

  async init() {
    console.log('🔗 Auth base URL:', environment.apiBaseUrl)

    this.baseUrl = await request.newContext({
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      },
      baseURL: process.env.API_BASE_URL_REGISTRO_ENVIO_DEV || environment.apiBaseUrl // https://restful-booker.herokuapp.com
    })

    return this
  }

  async loginWithPassword(body: AuthRequest) {
    const getToken = await this.baseUrl!.post('/auth', { data: body })

    return getToken
  }

  async getBookingId(params: GetBokingByIdRequest) {
    const getBookingId = await this.baseUrl!.get('/booking', {
      params: {
        firstname: params.firstname || '',
        lastname: params.lastname || '',
        checkin: params.checkin || '',
        checkout: params.checkout || ''
      }
    })

    return getBookingId
  }
}
