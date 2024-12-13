export interface ApiErrorResponse {
  message: string
  error?: string
  statusCode?: number
  data?: {
    message?: string
    error?: string
  }
}

export interface ApiFormError {
  data?: {
    message: string
  }
  message: string
}
