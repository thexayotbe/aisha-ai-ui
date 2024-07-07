"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="auth_box">
      <h3 className="title">Ro’yxatdan o’tish</h3>
      <form action="" className="auth_box">
        <div className="flex gap-2">
          <input
            type="text"
            className="input_short"
            placeholder="Telefon raqamingiz"
            required
          />
          <input
            type="date"
            className="input_short"
            placeholder="Select date"
            required
          />
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            className="input_short"
            placeholder="Parom yarating"
            required
          />
          <input
            type="password"
            className="input_short"
            placeholder="Parolni takrorlang"
            required
          />
        </div>
        <div className="input flex justify-around gap-5 items-center">
          <input
            type="checkbox"
            className="accent-[#0B814F] w-[18px] h-[18px]"
            required
          />
          <p className="text-xs w-[95%]">
            Aisha-dan g‘arazli maqsadlarda foydalanmaslikka va noqonuniy
            ishlarni buyurmaslikka rozilik bering / omaviy ofertaga rozilik
            bering.
          </p>
        </div>
        <button
          className="button"
          type="submit"
          onClick={() => router.push("/auth/signup/password-confirm")}
        >
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default page;
