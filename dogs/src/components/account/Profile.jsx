import React from "react";
import Feed from "../feed/Feed";
import { useParams } from "react-router-dom";
import Head from '../helper/Head'

const Profile = () => {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head title={user}/>
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default Profile;
