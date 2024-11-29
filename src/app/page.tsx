"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiUserGetProfile } from "@/api/ApiUsers";

export default function Home() {
  const router = useRouter()
  const isFetched = useRef(false);

  const getDataUserProfile = async () => {
    try {
      const response = await ApiUserGetProfile()
      console.log(response, '<-- response get profile');
    } catch (error) {
      console.log(error, '<-- error get profile');
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
      <h1>home</h1>
    </div>
  )
}
