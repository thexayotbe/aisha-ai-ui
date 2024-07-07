"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="auth_box">
      <img src="/logo.svg" alt="" />
      <h1>Aisha AI</h1>
      <button
        className="w-[300px] h-[56px] flex bg-[#2e2e2d] border-2 border-[#6b6b6b] rounded-md items-center justify-center text-xl pl-14"
        onClick={() => router.push("/auth/signup")}
      >
        Ro’yxatdan o’tish
        <div className="w-[56px] h-[56px] flex border-l-2  border-[#6b6b6b] justify-center items-center ml-auto">
          <img src="Icon.svg" alt="" />
        </div>
      </button>
      <button
        className="w-[300px] h-[56px] flex bg-[#2e2e2d] border-2 border-[#6b6b6b] rounded-md items-center justify-center text-xl pl-14"
        onClick={() => router.push("/auth/login")}
      >
        Tizimga kirish
        <div className="w-[56px] h-[56px] flex border-l-2  border-[#6b6b6b] justify-center items-center ml-auto">
          <img src="/arrow.svg" alt="" />
        </div>
      </button>
    </div>
  );
};

export default page;
