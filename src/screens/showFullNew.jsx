import React, { useState } from "react";
import empty from "../images/empty.png";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function ShowFullNew() {
  const [loading, setloading] = useState(true);

  const testingText =
    "Самата компания е много успешна компания. Изобретател, но който иска да нямаме просто тяло, освободено от удоволствия в, затова ще обясня трудоемкото отхвърляне. Поквареният е вързан от омразата на блажените. Покварени от нужди, те осигуряват, за да накарат болката да избяга, удоволствията на настоящето! Когато задълженията падат върху мъдрия разум, благословена е издръжливостта на грешката, никой, ако видите по-малко бягство, дългове, никога не е отхвърлен. Те не знаят какво иска свободният изобретател. Не е виновен той и неговите трудолюбиви за всички болки, лесни или болки да отхвърлиш каквото и да било. Болезнени, болезнени времена? Често ще отварям времето на откриването, но отхвърляйки думите можем само, с желание!";

  setTimeout(() => {
    setloading(false);
  }, 1000);
  return (
    <>
      <Header />
      <div className="w-full flex justify-between items-center bg-gray-100">
        <img src={empty} alt="will have..." className="w-2/5 pl-5" />
        {loading ? (
          <LoadSpinner />
        ) : (
          <div className=" w-3/5 text-justify pt-3 px-8">
            <p className="text-xl font-semibold text-center mb-3">Заглавие</p>
            <p>{testingText + testingText + testingText}</p>
            <table className="w-5/6 mx-auto my-16">
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
      <Footer sticky />
    </>
  );
}

export default ShowFullNew;
