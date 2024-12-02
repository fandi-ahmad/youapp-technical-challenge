export interface ProfileType {
  email: string
  username: string
  interests: {
    [key: number]: string
  }
  name?: string
  birthday?: string
  horoscope?: string
  zodiac?: string
  height?: number
  weight?: number
}
