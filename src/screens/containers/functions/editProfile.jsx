import React from "react";
import BackButton from "../../../components/backButton/BackButton";

function EditProfile() {
  return (
    <div>
      <BackButton />
      <div className="space-y-4 w-1/2 mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-800">
            Две имена
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Иван Иванов"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ivan.ivanov21@gmail.com"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label htmlFor="tel" className="block text-sm text-gray-800">
            Телефон
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Запази
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
