export interface User{
    correo: string,
    password: string,
}


export interface SigInResponse {
    status: 'success' | 'error'
    data: DataResponse
  }
  
  export interface DataResponse {
    token: string
    user: UserResponse
  }
  
  export interface UserResponse{
    id: number
    nombre: string
    correo: string
    cargo: string
    departamento: string
    oficina: string
    estadoCuenta: string
  }

  export interface ErrorResponse {
    status: string,
    message: string,
  }