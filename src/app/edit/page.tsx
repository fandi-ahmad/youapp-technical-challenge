"use client"
import CardProfile from '@/components/CardProfile'
import HeaderProfile from '@/components/HeaderProfile'
import { useRouter } from 'next/navigation'
import plusIcon from "@/assets/icons/plus.svg"
import Image from 'next/image'
import InputBio from '@/components/InputBio'

const Edit = () => {
  const router = useRouter()

  return (
    <div className='max-w-xl mx-auto min-h-screen relative px-6 py-8 bg-dark-blue'>
      <HeaderProfile onClick={() => router.push('/')} username="@fdjsaax" />

      <div className="w-full h-56 bg-dark-soft-blue-200 rounded-xl mt-8 flex items-end p-4">
        <p className="font-semibold">@fdjsaax</p>
      </div>

      <CardProfile title='About'>
        <div className='mt-4 flex flex-row items-center mb-8 text-sm'>
          <button className='bg-white bg-opacity-5 w-14 h-14 flex justify-center items-center rounded-xl me-4'>
            <Image alt='plus' src={plusIcon} />
          </button>
          <p>Add Image</p>
        </div>

        <div className='text-sm'>

          <div className='flex justify-between items-center mb-4'>
            <p className='w-full'>Display name:</p>
            <InputBio placeholder='Enter name' />
          </div>

          <div className='flex justify-between items-center mb-4'>
            <p className='w-full'>Birthday:</p>
            <InputBio type='date' placeholder='DD MM YYYY' />
          </div>

          <div className='flex justify-between items-center mb-4'>
            <p className='w-full'>Height:</p>
            <InputBio placeholder='Add Height' />
          </div>

          <div className='flex justify-between items-center mb-4'>
            <p className='w-full'>Weight:</p>
            <InputBio placeholder='Add Weight' />
          </div>

        </div>
      </CardProfile>
      
    </div>
  )
}

export default Edit