"use client"
import HeaderProfile from '@/components/HeaderProfile'
import { useRouter } from 'next/navigation'
import plusIcon from "@/assets/icons/plus.svg"
import Image from 'next/image'
import InputBio from '@/components/InputBio'
import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import { ApiUserGetProfile, ApiUserUpdateProfile } from '@/api/ApiUsers'
import { ProfileType } from "@/interface/ProfileType";
import CardProfileEdit from '@/components/CardProfileEdit'

interface InputTemplateType {
  label: string
  children: React.ReactNode
}

const InputTemplate = (props: InputTemplateType) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <p className='opacity-50'>{props.label}:</p>
      {props.children}
    </div>
  )
}

const Edit = () => {
  const router = useRouter()
  const isFetched = useRef(false);
  const [profile, setProfile] = useState<ProfileType>()
  const [isChangeProfile, setIsChangeProfile] = useState<boolean>(false)

  const getDataUserProfile = async () => {
    try {
      const response = await ApiUserGetProfile()
      setProfile(response.data.data)
    } catch (error) {
      console.log(error, '<-- error get profile');
      router.push('/login')
    }
  }


  useEffect(() => {
    const token = localStorage.getItem('access_token');

    // if not access_token, go to /login
    if (!token) {
      router.push('/login');
      return;
    }

    // just once
    if (!isFetched.current) {
      isFetched.current = true;
      getDataUserProfile();
    }
  }, [router]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfile((prevProfile: any) => ({
      ...prevProfile,
      [name]: name === "height" || name === "weight" ? Number(value) : value,
    }));

    if (name === 'birthday') {
      setIsChangeProfile(true)
    }
  };


  useEffect(() => {
    if (isChangeProfile) {
      handleUpdateProfile()
      getDataUserProfile()
    }
  }, [profile?.birthday, isChangeProfile])

  const handleUpdateProfile = async () => {
    try {
      await ApiUserUpdateProfile({
        name: profile?.name ? profile.name : '',
        birthday: profile?.birthday ? profile.birthday : '',
        height: profile?.height ? profile.height : 0,
        weight: profile?.weight ? profile.weight : 0,
        interests: profile?.interests,
      })
    } catch (error) {
      console.log(error, '<-- error update profile');
    }
  }

  const handleSaveAndUpdateButton = () => {
    handleUpdateProfile()
    router.push('/')
  }

  return (
    <div className='max-w-xl mx-auto min-h-screen relative px-6 py-8 bg-dark-blue'>
      <HeaderProfile onClick={() => router.push('/')} username={'@'+profile?.username} />

      <div className="w-full h-56 bg-dark-soft-blue-200 rounded-xl mt-8 flex items-end p-4">
        <p className="font-semibold">@{profile?.username}</p>
      </div>

      <CardProfileEdit title='About' handleButtonClick={handleSaveAndUpdateButton}>
        <div className='mt-4 flex flex-row items-center mb-8 text-sm'>
          <button className='bg-white bg-opacity-5 w-14 h-14 flex justify-center items-center rounded-xl me-4'>
            <Image alt='plus' src={plusIcon} />
          </button>
          <p>Add Image</p>
        </div>

        <div className='text-xs sm:text-sm'>

          <InputTemplate label='Display name'>
            <InputBio placeholder='Enter name' value={profile?.name || ''} name='name' onChange={handleInput} />
          </InputTemplate>

          <div className='flex justify-between items-center mb-4'>
            <p className='opacity-50'>Gender:</p>
            <div className='relative w-36 sm:w-52'>
              <select className='border border-slate-500 rounded-lg py-2 px-4 bg-white bg-opacity-5 outline-none w-full text-white text-end custom-select'>
                <option value="male" className='text-black p-2'>Male</option>
                <option value="female" className='text-black'>Female</option>
              </select>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
              </div>
            </div>
          </div>

          <InputTemplate label='Birthday'>
            <InputBio type='date' placeholder='DD MM YYYY' value={profile?.birthday || ''} name='birthday' onChange={handleInput} />
          </InputTemplate>

          <InputTemplate label='Horoscope'>
            <InputBio placeholder={profile?.horoscope || '--'} disabled />
          </InputTemplate>
          
          <InputTemplate label='Zodiac'>
            <InputBio placeholder={profile?.zodiac || '--'} disabled />
          </InputTemplate>

          <InputTemplate label='Height (cm)'>
            <InputBio placeholder='Add Height' value={profile?.height || ''} type='number' name='height' onChange={handleInput}  />
          </InputTemplate>

          <InputTemplate label='Weight (kg)'>
            <InputBio placeholder='Add Weight' value={profile?.weight || ''} type='number' name='weight' onChange={handleInput} />
          </InputTemplate>

        </div>
      </CardProfileEdit>
      
    </div>
  )
}

export default Edit