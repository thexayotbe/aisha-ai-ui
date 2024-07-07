"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const page = () => {
  const router = useRouter();
  return (
    <div className="auth_box gap-5">
      <h3 className="title">Ro’yxatdan o’tish</h3>
      <form action="" className="auth_box">
        <div className="flex gap-2">
          <input
            type="text"
            className="input_short"
            placeholder="Ismingizni kiriting.."
            required
          />
          <input
            type="text"
            className="input_short"
            placeholder="Familyangizni kiriting.."
            required
          />
        </div>
        <input
          type="email"
          className="input"
          placeholder="Email manzilingizni kiriting"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="qiziqishlaringiz | ixtiyoriy"
        />
        <button
          className="button"
          type="submit"
          onClick={() => router.push("/auth/signup/password")}
        >
          Keyingisi
        </button>
      </form>
    </div>
  );
};

export default page;
