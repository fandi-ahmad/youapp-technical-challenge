import axios from "axios"
const baseApiUrl = 'https://techtest.youapp.ai/api'

const ApiUserGetProfile = async () => {
  const accessToken = localStorage.getItem('access_token')
  try {
    return axios.get(`${baseApiUrl}/getProfile`, {
      headers: {
        'x-access-token': accessToken
      }
    })
  } catch (error: any) {
    return error
  }
}

export { ApiUserGetProfile }