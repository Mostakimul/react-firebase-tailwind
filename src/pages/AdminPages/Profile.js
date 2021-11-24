import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="text-center">
      <div>
        <img src={user.photoURL} alt="profile" className="rounded-full mx-auto" />
        <h2 className="font-mon font-semibold text-xl">{user.displayName}</h2>
      </div>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
