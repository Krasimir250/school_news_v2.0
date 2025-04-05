import React from "react";
import empty from "../../images/empty.png";
import { FaTrashAlt } from "react-icons/fa";

function Card({ removeBtn }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-100">
      <div className="w-full bg-gray-100 rounded-lg">
        {removeBtn ? (
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={() =>
              /* Add your remove function here */ alert("Remove button clicked")
            }
          >
            <FaTrashAlt size={20} />
          </button>
        ) : null}
        <img src={empty} alt="" />
        <p className="p-3 text-xl break-all">Завършването на 12 клас</p>
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
          <tr>
            <td className="text-left">Прегледи</td>
            <td>531</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Card;
