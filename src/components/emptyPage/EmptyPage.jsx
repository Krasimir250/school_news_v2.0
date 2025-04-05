import React from "react";
import emptyPage from "../../images/emptyPage.png";

function EmptyPage() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <img src={emptyPage} alt="empty page" className="w-1/3 mx-auto" />
        <h1 className="text-3xl font-semibold text-gray-800">
          Тази страница е празна
        </h1>
      </div>
    </div>
  );
}

export default EmptyPage;
