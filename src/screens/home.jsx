import empty from "../images/empty.png";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import { useState } from "react";
import Card from "../components/card/Card";
import { getTest } from "../firebase/main.firebase";

const testingText =
  "Самата компания е много успешна компания. Изобретател, но който иска да нямаме просто тяло, освободено от удоволствия в, затова ще обясня трудоемкото отхвърляне. Поквареният е вързан от омразата на блажените. Покварени от нужди, те осигуряват, за да накарат болката да избяга, удоволствията на настоящето! Когато задълженията падат върху мъдрия разум, благословена е издръжливостта на грешката, никой, ако видите по-малко бягство, дългове, никога не е отхвърлен. Те не знаят какво иска свободният изобретател. Не е виновен той и неговите трудолюбиви за всички болки, лесни или болки да отхвърлиш каквото и да било. Болезнени, болезнени времена? Често ще отварям времето на откриването, но отхвърляйки думите можем само, с желание!";

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-3/4 md:mr-2">
          <div className="w-full flex flex-col md:flex-row justify-between items-center bg-gray-100">
            <img src={empty} alt="will have..." className="w-full md:w-3/5" />
            {loading ? (
              <LoadSpinner />
            ) : (
              <div className="w-full md:w-2/5 text-center p-3">
                <p className="text-xl font-semibold">Заглавие</p>
                <p>{testingText}</p>
                <a href="/showFullNew" className="text-blue-600">
                  Научи повече
                </a>
                <table className="w-full md:w-5/6 mx-auto mt-4 md:mt-16">
                  <tr className="border-b-2">
                    <td className="text-left">Автор</td>
                    <td>Красимир Кабаков</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="text-left">Дата</td>
                    <td>28.06.2024г</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="text-left">Час</td>
                    <td>13:42ч</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="text-left">Прегледи</td>
                    <td>531</td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <div className="w-full my-5">
            <p className="font-semibold pl-4 py-5 text-3xl">Още новини</p>
            {loading ? (
              <LoadSpinner />
            ) : (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-5 md:mt-0 md:ml-2 h-96">
          <div className="bg-gray-100 pt-3 w-full h-80">
            <p className="text-center text-xl font-semibold">
              ППМГ"Васил Левски"
            </p>
            <div className="mt-5">
              <button className="w-full mt-2 flex text-lg items-center px-6 hover:bg-gray-300">
                <IoCalendarNumberOutline size={24} />
                <p className="ml-2">Училищен календар</p>
              </button>
              <button className="w-full mt-2 flex text-lg items-center px-6 hover:bg-gray-300">
                <GrGroup size={24} />
                <p className="ml-2">Училищни клубове</p>
              </button>
              <button className="w-full mt-2 flex text-lg items-center px-6 hover:bg-gray-300">
                <PiPhoneDisconnectBold size={24} />
                <p className="ml-2">Свържи се с нас</p>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 mt-5 p-3 w-full">
            <p className="text-center text-xl font-semibold">
              Предстоящи събития
            </p>
            {loading ? (
              <LoadSpinner />
            ) : (
              <>
                <div className="mt-5">
                  <div className="px-6">
                    <p className="font-medium">Откриване на учебната година</p>
                    <p className="text-gray-700">15.09.2024 12:30ч</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="px-6">
                    <p className="font-medium">Коледно тържество</p>
                    <p className="text-gray-700">28.12.2024 10:30ч</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="px-6">
                    <p className="font-medium">Патронен празник</p>
                    <p className="text-gray-700">03.03.2025 10:00ч</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="px-6">
                    <p className="font-medium">Краят на годината</p>
                    <p className="text-gray-700">28.06.2025 11:00ч</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="bg-gray-100 mt-5 pt-3 w-full h-60">
            <p className="text-center text-xl font-semibold">Потърси събитие</p>
            <div className="mt-2 p-6">
              <div className="px-6 flex items-center border rounded-full p-2 bg-white shadow-md">
                <input
                  type="text"
                  placeholder="Търсене..."
                  className="flex-grow outline-none px-4"
                />
                <IoMdSearch size={24} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
