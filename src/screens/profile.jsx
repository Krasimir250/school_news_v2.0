import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MyPosts from "./containers/myPosts";
import Messages from "./containers/messages";
import Settings from "./containers/settings";
import AdminSettings from "./containers/adminSettings";
const Profile = () => {
  const [screen, setScreen] = useState(1);
  const isAdmin = true;

  return (
    <>
      <Header />
      <div className="max-w-4xl min-h-screen mx-auto my-16 bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex items-center bg-orange-500 p-8">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="Student Profile"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-white">
              Иван Иванов
              <span className="text-gray-200 font-normal text-base">
                /Админ/
              </span>
            </h2>
            <p className="text-gray-200">ivan.ivanov21@gmail.com</p>
            <p className="text-gray-200">
              Клас: 10<sup>a</sup>
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="mt-6">
            <div className="text-gray-800 border-b text-xl flex space-x-3">
              <button
                onClick={() => setScreen(1)}
                className={
                  screen === 1
                    ? "font-semibold bg-gray-200 p-2 rounded-t-lg"
                    : "p-2"
                }
              >
                Мойте постове
              </button>
              <button
                onClick={() => setScreen(2)}
                className={
                  screen === 2
                    ? "font-semibold bg-gray-200 p-2 rounded-t-lg"
                    : "p-2"
                }
              >
                Съобщения
              </button>
              <button
                onClick={() => setScreen(3)}
                className={
                  screen === 3
                    ? "font-semibold bg-gray-200 p-2 rounded-t-lg"
                    : "p-2"
                }
              >
                Настройки
              </button>
              {isAdmin && (
                <button
                  onClick={() => setScreen(4)}
                  className={
                    screen === 4
                      ? "font-semibold bg-orange-200 p-2 rounded-t-lg"
                      : "p-2"
                  }
                >
                  Администратор
                </button>
              )}
            </div>
            <div className="mt-4">
              {screen === 1 && <MyPosts />}
              {screen === 2 && <Messages />}
              {screen === 3 && <Settings />}
              {screen === 4 && <AdminSettings />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
