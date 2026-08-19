import React, { useCallback, useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div className="bg-green-600 w-full max-w-lg text-center text-xl font-bold py-3 px-2 rounded-lg text-white">
        <h1>
          Hello, {user.username.toUpperCase()} your password is {user.password}.
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-green-600 w-full max-w-lg text-center text-xl font-bold py-3 px-2 rounded-lg text-white">
      Please Login
    </div>
  );
}

export default Profile;
