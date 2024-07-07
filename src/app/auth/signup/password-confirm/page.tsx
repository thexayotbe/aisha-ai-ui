import React from "react";

const page = () => {
  return (
    <div className="auth_box">
      <h3 className="title">Telefon raqamni tekshirish</h3>
      <p className="w-[363px] text-sm text-center -mt-5 mb-5">
        Siz kiritgan telefon raqamga 6 xonalik kod yuboriladi, iltimos, shu
        kodni quyidagi maydonga yozing.
      </p>
      <form action="" className="auth_box">
        <input
          type="text"
          className="input"
          required
          placeholder="ilitmos tekshiruv kodini kiriting"
        />
        <button className="button" type="submit">
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};

export default page;
