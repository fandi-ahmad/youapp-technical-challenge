import axios from "axios"
const baseApiUrl = 'https://techtest.youapp.ai/api'

interface requestBody {
  email: string
  username: string
  password: string
}

const ApiAuthRegister = async (data: requestBody) => {
  try {
    return axios.post(`${baseApiUrl}/register`, data)
  } catch (error: any) {
    return error
  }
}

const ApiAuthLogin = async (data: requestBody) => {
  try {
    return axios.post(`${baseApiUrl}/login`, data)
  } catch (error: any) {
    return error
  }
}

export { ApiAuthRegister, ApiAuthLogin }