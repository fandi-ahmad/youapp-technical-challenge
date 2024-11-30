"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiUserGetProfile } from "@/api/ApiUsers";
import HeaderProfile from "@/components/HeaderProfile";
import CardProfile from "@/components/CardProfile";
import TextBio from "@/components/TextBio";
import imageExample from "@/assets/images/example-image.jpeg"
import Image from "next/image";
import Label from "@/components/Label";
import iconExample from "@/assets/icons/edit.svg"

interface ProfileType {
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

export default function Home() {
  const router = useRouter()
  const isFetched = useRef(false);
  const [profile, setProfile] = useState<ProfileType>()

  const getDataUserProfile = async () => {
    try {
      const response = await ApiUserGetProfile()
      console.log(response.data.data, '<-- response get profile');
      setProfile(response.data.data)
    } catch (error) {
      console.log(error, '<-- error get profile');
    }
  }

  const exampleData = {
    username: 'fandijsx',
    interest: {
      0: 'game',
      1: 'coding'
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

  return (
    <div className="max-w-xl mx-auto min-h-screen relative px-6 py-8 bg-dark-blue">
      <HeaderProfile username={'@'+profile?.username} />

      <div onClick={() => console.log(profile)} className="w-full h-56 bg-dark-soft-blue-200 rounded-xl mt-8 flex items-end p-4">
        <p className="font-semibold">@{profile?.username}</p>
      </div>

      {/* <div className="w-full h-60 bg-dark-soft-blue-200 rounded-xl mt-8 flex items-end overflow-hidden">
        <Image alt="ex" src={imageExample} className="object-cover w-full h-60" />
        <div className="absolute p-4 z-20">
          <p className="font-semibold">@fdjsaax</p>
          <p>male</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Label bgDark>
              <Image alt="icon" src={iconExample} className="me-2" /> Virgo
            </Label>
            <Label bgDark>
              <Image alt="icon" src={iconExample} className="me-2" /> Pig
            </Label>
          </div>
        </div>
        <div className="absolute w-full h-28 z-10 left-0 px-6">
          <div className="bg-gradient-to-t from-black to-transparent h-28 rounded-br-xl rounded-bl-xl "></div>
        </div>
      </div> */}

      <CardProfile title="About" handleEditClick={() => router.push('/edit')}>
        {profile?.birthday || profile?.horoscope || profile?.height || profile?.weight
          ?
          <>
            <div className="mt-4"></div>
            <TextBio left="Birthday:" right={profile?.birthday} />
            <TextBio left="Horoscope:" right={profile?.horoscope} />
            <TextBio left="Zodiac:" right={profile.zodiac} />
            <TextBio left="Height:" right={profile?.height + ' cm'} />
            <TextBio left="Weight:" right={profile?.weight + ' kg'} />
          </>
          :
          <p className="mt-8 opacity-50">Add in your your to help others know you better</p>
        }
      </CardProfile>
      
      
      <CardProfile title="Interest">
        <div className="mt-4 flex flex-wrap gap-4">
          {profile?.interests
            ?
            Object.values(profile.interests).map((interest, index) => (
              <Label key={index}>{interest}</Label>
            ))
            :
            <p className="mt-4 opacity-50">Add in your interest to find a better match</p>
          }
        </div>
      </CardProfile>


    </div>
  )
}