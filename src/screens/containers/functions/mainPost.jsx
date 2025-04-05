import React from "react";
import BackButton from "../../../components/backButton/BackButton";
import empty from "../../../images/empty.png";

function MainPost() {
  const testingText =
    "Самата компания е много успешна компания. Изобретател, но който иска да нямаме просто тяло, освободено от удоволствия в, затова ще обясня трудоемкото отхвърляне. Поквареният е вързан от омразата на блажените. Покварени от нужди, те осигуряват, за да накарат болката да избяга, удоволствията на настоящето! Когато задълженията падат върху мъдрия разум, благословена е издръжливостта на грешката, никой, ако видите по-малко бягство, дългове, никога не е отхвърлен. Те не знаят какво иска свободният изобретател.";

  return (
    <div>
      <BackButton />
      <div className="w-full flex justify-between items-center bg-gray-100 mt-4 p-4">
        <img src={empty} alt="will have..." className="w-3/5" />
        <div className=" w-2/5 text-center p-3">
          <p className="text-xl font-semibold">Заглавие</p>
          <p>{testingText}</p>
          <a href="/showFullNew" className="text-blue-600">
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
    </div>
  );
}

export default MainPost;
