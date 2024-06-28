import empty from "../images/empty.png";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

const testingText =
  "Самата компания е много успешна компания. Изобретател, но който иска да нямаме просто тяло, освободено от удоволствия в, затова ще обясня трудоемкото отхвърляне. Поквареният е вързан от омразата на блажените. Покварени от нужди, те осигуряват, за да накарат болката да избяга, удоволствията на настоящето! Когато задълженията падат върху мъдрия разум, благословена е издръжливостта на грешката, никой, ако видите по-малко бягство, дългове, никога не е отхвърлен. Те не знаят какво иска свободният изобретател. Не е виновен той и неговите трудолюбиви за всички болки, лесни или болки да отхвърлиш каквото и да било. Болезнени, болезнени времена? Често ще отварям времето на откриването, но отхвърляйки думите можем само, с желание!";

function Home() {
  return (
    <main className="flex p-4">
      <div className="w-3/4 mr-2">
        <div className="w-full flex justify-between">
          <img src={empty} alt="will have image" className="w-3/5" />
          <div className="bg-gray-300 w-2/5 text-center p-3">
            <p className="text-xl font-semibold">Заглавие</p>
            <p>{testingText}</p>
            <a href="#" className="text-blue-600">
              Научи повече
            </a>
            <table className="w-5/6 mx-auto mt-16">
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
        </div>
        <div className="w-full my-5">
          <p className="font-semibold pl-4 py-5 text-3xl">Още новини</p>
          <div className="w-full h-full flex">
            <div className="w-1/3 bg-gray-300 mr-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
            <div className="w-1/3 bg-gray-300 mx-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
            <div className="w-1/3 bg-gray-300 ml-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
          </div>
        </div>
        <div className="w-full my-5">
          <div className="w-full h-full flex">
            <div className="w-1/3 bg-gray-300 mr-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
            <div className="w-1/3 bg-gray-300 mx-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
            <div className="w-1/3 bg-gray-300 ml-2">
              <img src={empty} />
              <p className="p-3 text-xl">Завършването на 12 клас</p>
              <table className="w-5/6 mx-auto my-2">
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
          </div>
        </div>
      </div>
      <div className=" ml-2 w-1/4 h-96">
        <div className="bg-gray-100  pt-3 w-full h-80">
          <p className="text-center text-xl font-semibold">
            ППМГ"Васил Левски"
          </p>
          <div className="mt-5 ">
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
        <div className="bg-gray-100 mt-5 pt-3 w-full h-96">
          <p className="text-center text-xl font-semibold">
            Предстоящи събития
          </p>
          {/* Make map for all events */}
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
        </div>
        <div className="bg-gray-100 mt-5 pt-3 w-full h-72">
          <p className="text-center text-xl font-semibold">Потърси събитие</p>
          <div className="mt-5 p-6">
            <div className="px-6 flex items-center border rounded-full p-2 bg-white shadow-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-grow outline-none px-4"
              />
              <IoMdSearch size={24} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
