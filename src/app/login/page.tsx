"use client"
import { ApiAuthLogin } from "@/api/ApiAuth"
import BackButton from "@/components/BackButton"
import BaseButton from "@/components/BaseButton"
import BaseInput from "@/components/BaseInput"
import Loading from "@/components/Loading"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const Login = () => {
  const [emailUsername, setEmailUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const router = useRouter()

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'emailUsername': setEmailUsername(value); break;
      case 'password': setPassword(value); break;
      default: break;
    }
  };


  // for check status disabled button
  useEffect(() => {
    emailUsername && password ? setIsDisabledBtn(false) : setIsDisabledBtn(true)
  }, [emailUsername, password])

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      setIsDisabledBtn(true)
      const response = await ApiAuthLogin({
        email: emailUsername.includes('@gmail.com') ? emailUsername : '',
        username: emailUsername,
        password: password
      })
      setMessage(response.data.message)
      
      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
      }

    } catch (error: any) {
      setMessage(error.response.data.message)
    }

    setIsLoading(false)
    setIsDisabledBtn(false)
  }


  return (
    <div className="max-w-xl mx-auto min-h-screen relative px-6 py-8 bg-gradient-to-tr from-dark-blue to-soft-blue">
      <BackButton/>
      <h1 className="mt-12 text-2xl font-semibold mb-4" style={{letterSpacing: '2px'}}>
        Login
      </h1>
      
      <BaseInput placeholder="Enter Email/Username" name="emailUsername" value={emailUsername} onChange={handleInput} />
      <BaseInput type="password" placeholder="Enter Password" name="password" value={password} onChange={handleInput} />
      
      <BaseButton disabled={isDisabledBtn} onClick={handleLogin}>
        Login
        <Loading className={`ms-2 ${!isLoading && 'hidden'}`}/>
      </BaseButton>

      <p className="text-center w-full text-sm mt-4">{message}</p>
      <p className="mt-12 text-center">No account? <Link href={'/register'} className="underline text-golden">Register here</Link></p>
    </div>
  )
}

export default Login