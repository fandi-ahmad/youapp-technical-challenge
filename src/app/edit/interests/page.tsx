"use client"
import { ApiUserGetProfile, ApiUserUpdateProfile } from "@/api/ApiUsers";
import HeaderProfile from "@/components/HeaderProfile"
import { ProfileType } from "@/interface/ProfileType";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import crossoverIcon from "@/assets/icons/crossover.svg"
import Image from "next/image";

const Interests = () => {
  const router = useRouter()
  const isFetched = useRef(false);
  const [profile, setProfile] = useState<ProfileType>()

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

  // =====================================

  const [newInterest, setNewInterest] = useState<string>("");

  const handleRemoveInterest = (index: number) => {
    if (!profile || !Array.isArray(profile.interests)) return; // Validasi awal
    const updatedInterests: string[] = profile.interests.filter((_, i) => i !== index);
  
    setProfile((prev) =>
      prev
        ? {
            ...prev,
            interests: updatedInterests,
          }
        : prev
    );
  };
  
  const handleAddInterest = (newInterest: string) => {
    if (!profile || !Array.isArray(profile.interests)) return; // Validasi awal
    if (!newInterest.trim()) return; // Validasi input kosong
    const updatedInterests: string[] = [...profile.interests, newInterest];
  
    setProfile((prev) =>
      prev
        ? {
            ...prev,
            interests: updatedInterests,
          }
        : prev
    );

    setNewInterest('')
  };
  
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
    setTimeout(() => {
      router.back()
      getDataUserProfile()
    }, 500)
    
  }
  

  return (
    <div className="max-w-xl mx-auto min-h-screen relative px-6 py-8 bg-gradient-to-tr from-dark-blue to-soft-blue">
      <HeaderProfile onClick={() => router.back()} rightClick={handleSaveAndUpdateButton} />
      
      <div className="mt-28">
        <p className="text-golden text-lg">Tell everyone about yourself</p>
        <p className="text-3xl font-semibold mt-4" onClick={() => console.log(profile?.interests)}>What interest you?</p>
      </div>

      <div className="rounded-lg p-4 bg-white bg-opacity-10 outline-none w-full mb-4 text-white mt-8 flex flex-wrap gap-4">
        {profile?.interests && Object.keys(profile.interests).length > 0 && (
          Object.entries(profile.interests).map(([key, interest]) => (
            <div key={key} className="bg-white bg-opacity-15 py-2 px-3 rounded-md flex flex-row">
              {interest}
              <button className="ms-1" onClick={() => handleRemoveInterest(Number(key))}>
                <Image alt="crossover" src={crossoverIcon} className="w-5 h-5" />
              </button>
            </div>
          ))
        )}

        <input type="text" className="outline-none bg-transparent border border-slate-400 px-2 rounded-lg" value={newInterest} onChange={(e) => setNewInterest(e.target.value)} />
        <button className="py-1 px-3 bg-white bg-opacity-15 text-sm text-white rounded-md" onClick={() => handleAddInterest(newInterest)}>
          Add
        </button>
      </div>

    </div>
  )
}

export default Interests