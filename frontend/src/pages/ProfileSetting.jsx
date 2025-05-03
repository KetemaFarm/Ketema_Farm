import React from "react";
import profile from "../assets/profile.jpg";
import { HiOutlineMail } from "react-icons/hi";

const ProfileSetting = () => {
  const user = {
    profileImage: profile,
    nickname: "Amanda",
    fullName: "Alexa Rawles",
    email: "alexarawles@gmail.com",
    gender: "Female",
    country: "Location",
    language: "English",
    country: "country",
    emailStatus: "1 month ago",
  };
  return (
    <div className="p-4 md:p-8 grid md:grid-cols-[300px_1fr] mt-24">
      <div className="bg-green-50 h-screen shadow-lg rounded-lg">
        <h1 className="p-4 ml-5 text-xl font-bold">My Account</h1>
        <div className=" mt-110 flex flex-col gap-5 items-center">
          <button className="ml-20 bg-green-500 hover:bg-green-600 text-white text-sm px-7 py-2 rounded cursor-pointer ">
            Edit
          </button>
          <button className="ml-20 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded cursor-pointer ">
            Logout
          </button>
        </div>
      </div>
      <div className="bg-gray-50 shadow-md rounded-br flex-1 p-6">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold">{user.nickname}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={user.fullName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nick Name
            </label>
            <input
              type="text"
              value={user.nickname}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              value={user.gender}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              disabled
            >
              <option className="">Female</option>
              <option className="">Male</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              value={user.country}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              disabled
            >
              <option className="">country</option>
              {/* <option className="">English</option> */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              value={user.language}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              disabled
            >
              <option className="">English</option>
              {/* <option className="">English</option> */}
            </select>
          </div>
        </div>
        <div className="mt-24">
          <h4 className="text-md font-semibold mb-2">My Email Address</h4>
          <div className="flex items-center space-x-2 text-gray-600">
            <HiOutlineMail className="w-5 h-5 p-1 bg-green-500 rounded-full" />
            <span>{user.email}</span>
            <span className="text-sm text-gray-400">{user.emailStatus}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
