import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DropDown from "../components/dropDown/DropDown";

function Register() {
  const schoolOptions = [
    "ППМГ''Васил Левски'' гр.Смолян",
    "ЕГ''Иван Вазов'' гр.Смолян",
    "СОУ''Паийси Хилендарски'' гр.Пловдив",
  ];
  return (
    <>
      <Header hideButtons />
      <div className="w-full max-w-sm p-6 m-auto my-20 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Регистрирайте се
        </h2>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-800">
                Две имена
              </label>
              <input
                type="name"
                id="name"
                name="name"
                required
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
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Парола
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm text-gray-800"
              >
                Потвърдете паролата
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm text-gray-800">
                Училище/Град
              </label>
              <DropDown optionTitleText={"Избери"} options={schoolOptions} />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Регистрация
          </button>
        </form>
        <p className="text-center text-sm mt-2 text-gray-600">
          Вече имате профил?{" "}
          <a
            href="/login"
            className="font-medium text-blue-500 hover:text-blue-600"
          >
            Вход
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Register;
