import React from "react";

const page = () => {
  return (
    <div className="auth_box gap-10">
      <h1 className="title">Tizimga kirish</h1>
      <form action="" className="auth_box">
        <input
          type="email"
          placeholder="email manzilingizni kiriting"
          className="input"
        />
        <input
          type="password"
          placeholder="Parolingizni kiriting"
          className="input"
        />
        <button className="button">Kirish</button>
      </form>
    </div>
  );
};

export default page;
