export interface EmployeeResponse {
    status: 'success' | 'error'
    data: Employee[],
    total: number,
  }

  export interface Employee{
    id: number,
    nombre: string,
    correo: string,
    cargo: string,
    departamento: string,
    oficina: string,
    estadoCuenta: string
  }

