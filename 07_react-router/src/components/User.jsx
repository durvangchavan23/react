import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div className="font-extrabold h-screen text-2xl text-center p-10 bg-gray-400 text-white">User: {userid.toUpperCase()}</div>;
}

export default User;
