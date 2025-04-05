import React, { useContext } from "react";
import { GrPrevious } from "react-icons/gr";
import { ShowSelectedTab } from "../../contexts/contextsForProfilePage";

function BackButton() {
  const { setopenAnyTab } = useContext(ShowSelectedTab);
  return (
    <button
      onClick={() => setopenAnyTab(false)}
      className="h-10 bg-gray-50 rounded border flex items-center justify-between px-2 hover:bg-gray-200"
    >
      <GrPrevious />
      <p>Назад</p>
    </button>
  );
}

export default BackButton;
