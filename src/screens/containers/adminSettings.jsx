import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { ShowSelectedTab } from "../../contexts/contextsForProfilePage";
import WaittingPosts from "./functions/waittingPosts";
import MainPost from "./functions/mainPost";
import SchoolCalendar from "./functions/schoolCalendar";
import SchoolClubs from "./functions/schoolClubs";
import SchoolInfo from "./functions/schoolInfo";
import ChangeRole from "./functions/changeRole";

function AdminSettings() {
  const [openAnyTab, setopenAnyTab] = useState(false);
  const [whoTab, setWhoTab] = useState("");

  const openTab = (tab) => {
    setopenAnyTab(true);
    setWhoTab(tab);
  };

  return (
    <>
      <ShowSelectedTab.Provider value={{ setopenAnyTab }}>
        {openAnyTab ? (
          <>
            {whoTab === "waittingPosts" ? <WaittingPosts /> : null}
            {whoTab === "mainPost" ? <MainPost /> : null}
            {whoTab === "schoolCalendar" ? <SchoolCalendar /> : null}
            {whoTab === "schoolClubs" ? <SchoolClubs /> : null}
            {whoTab === "schoolInfo" ? <SchoolInfo /> : null}
            {whoTab === "changeRole" ? <ChangeRole /> : null}
          </>
        ) : (
          <div className="block w-full space-y-2">
            <button
              onClick={() => openTab("waittingPosts")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Постове в изчакване</p>
              <GrNext />
            </button>
            <button
              onClick={() => openTab("mainPost")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Пост на първа страница</p>
              <GrNext />
            </button>
            <button
              onClick={() => openTab("schoolCalendar")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Училищен календар</p>
              <GrNext />
            </button>
            <button
              onClick={() => openTab("schoolClubs")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Училищни клубове</p>
              <GrNext />
            </button>
            <button
              onClick={() => openTab("schoolInfo")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Информация за училището</p>
              <GrNext />
            </button>
            <button
              onClick={() => openTab("changeRole")}
              className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
            >
              <p>Смяна на роля</p>
              <GrNext />
            </button>
            <button className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200">
              <p>Изтриване на пост чрез ID</p>
              <GrNext />
            </button>
          </div>
        )}
      </ShowSelectedTab.Provider>
    </>
  );
}

export default AdminSettings;
