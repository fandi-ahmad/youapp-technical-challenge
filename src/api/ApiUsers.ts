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

interface UpdateProfileType {
  name: string
  birthday: string
  height: number
  weight: number
  interests: any
}

const ApiUserUpdateProfile = async (data: UpdateProfileType) => {
  const accessToken = localStorage.getItem('access_token')
  try {
    return axios.put(`${baseApiUrl}/updateProfile`, data, {
      headers: {
        'x-access-token': accessToken
      }
    })
  } catch (error) {
    return error
  }
}

export { ApiUserGetProfile, ApiUserUpdateProfile }