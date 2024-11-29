"use client"
import { ApiAuthRegister } from "@/api/ApiAuth"
import BackButton from "@/components/BackButton"
import BaseButton from "@/components/BaseButton"
import BaseInput from "@/components/BaseInput"
import Loading from "@/components/Loading"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const Register = () => {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  // error
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false)

  const router = useRouter()

  const handleInput = (e: any) => {
    isErrorPassword && setIsErrorPassword(false)
    const { name, value } = e.target;
    switch (name) {
      case 'email': setEmail(value); break;
      case 'username': setUsername(value); break;
      case 'password': setPassword(value); break;
      case 'confirmPassword': setConfirmPassword(value); break;
      default: break;
    }
  };

  
  // for check status disabled button
  useEffect(() => {
    if (email.includes('@gmail.com') && username && password && confirmPassword) {
      setIsDisabledBtn(false)
    } else {
      setIsDisabledBtn(true)
    }
  }, [email, username, password, confirmPassword])

  const handleRegister = async () => {
    try {
      setIsLoading(true)
      setIsDisabledBtn(true)

      if (password !== confirmPassword) {
        setMessage('Confirm password is incorrect')
        setIsErrorPassword(true)
      } else {
        setMessage('')
        const response = await ApiAuthRegister({
          email: email,
          username: username,
          password: password
        })
        setMessage(response.data.message)
        
        if (response.data.message === "User has been created successfully") {
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        }

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
      <h1 className="mt-12 text-2xl font-semibold mb-4 " style={{letterSpacing: '2px'}}>
        Register
      </h1>
      
      <BaseInput type="email" placeholder="Enter Email" name="email" value={email} onChange={handleInput} />
      <BaseInput placeholder="Create Username" name="username" value={username} onChange={handleInput} />
      <BaseInput type="password" placeholder="Create Password" name="password" value={password} onChange={handleInput} error={isErrorPassword} />
      <BaseInput type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleInput} error={isErrorPassword} />

      <BaseButton disabled={isDisabledBtn} onClick={handleRegister}>
        Register
        <Loading className={`ms-2 ${!isLoading && 'hidden'}`}/>
      </BaseButton>
      
      <p className="text-center w-full text-sm mt-4">{message}</p>
      <p className="mt-12 text-center">Have an account? <Link href={'/login'} className="underline text-golden">Login here</Link></p>
    </div>
  )
}

export default Register