import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import PhotoPost from "./PhotoPost";
import Stats from "./Stats";
import NotFound from "../NotFound";
import UserAccount from "./UserAccount";

const Account = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserAccount />} />
        <Route path="post" element={<PhotoPost />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Account;
