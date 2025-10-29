import React from 'react';
import profileImage from '../assets/images/images.jpg';

function ProfileCard() {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
      <img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-blue-300"
      />
      <h2 className="text-2xl font-semibold text-gray-800">Asnia Rizki Maghfiroh</h2>
      <p className="text-gray-500">UI/UX Designer & Web Developer</p>
    </div>
  );
}

export default ProfileCard;
