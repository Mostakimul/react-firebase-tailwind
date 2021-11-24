import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="text-center">
      <div>
        {user.photoURL ? (
          <img src={user.photoURL} alt="profile" className="rounded-full mx-auto" />
        ) : (
          <svg
            className="w-14 h-14 block mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        )}

        <h2 className="font-mon font-semibold text-xl">{user.displayName}</h2>
      </div>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
