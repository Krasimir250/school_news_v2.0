import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DragAndDropFileUpload from "../components/fileUpload/fileUpload";
function CreatedPage() {
  return (
    <>
      <Header />
      <div className="w-3/4 p-6 m-auto my-20 bg-gray-100 rounded-md shadow-md">
        <div className="flex items-center justify-between my-5">
          <label htmlFor="text" className="block text-lg text-gray-800">
            Заглавие
          </label>
          <input
            maxLength={28}
            placeholder="пр: Завършването на 12 клас"
            type="text"
            id="titleNews"
            className="w-3/4 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex justify-between my-5">
          <label htmlFor="text" className="block text-lg text-gray-800">
            Съдържание
          </label>
          <textarea
            placeholder="Информация относно новината..."
            type="text"
            id="contextNews"
            className="w-3/4 px-4 py-2 h-64 resize-none text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex justify-between my-5">
          <label htmlFor="text" className="block text-lg text-gray-800">
            Добави снимки
          </label>
          <DragAndDropFileUpload />
        </div>
        <div className="flex justify-end mt-5">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
            Изпрати
          </button>
        </div>
      </div>
      <Footer sticky />
    </>
  );
}

export default CreatedPage;
