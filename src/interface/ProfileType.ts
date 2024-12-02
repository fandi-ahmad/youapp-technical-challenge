export interface ProfileType {
  email: string
  username: string
  interests: string[] | {
  [key: number]: string
}
  name?: string
  birthday?: string
  horoscope?: string
  zodiac?: string
  height?: number
  weight?: number
}
