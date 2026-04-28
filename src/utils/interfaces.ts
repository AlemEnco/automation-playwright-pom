export interface AuthRequest {
  username: string
  password: string
}

export interface GetBokingByIdRequest {
  firstname?: string
  lastname?: string
  checkin?: string
  checkout?: string
}
