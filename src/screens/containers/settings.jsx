import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import EditProfile from "./functions/editProfile";
import { ShowSelectedTab } from "../../contexts/contextsForProfilePage";

function Settings() {
  const [openAnyTab, setopenAnyTab] = useState(false);
  const [whoTab, setWhoTab] = useState("");

  const openTab = (tab) => {
    setopenAnyTab(true);
    setWhoTab(tab);
  };

  return (
    <>
      <div className="block w-full space-y-2">
        <ShowSelectedTab.Provider value={{ setopenAnyTab }}>
          {openAnyTab ? (
            <>{whoTab === "editProfile" ? <EditProfile /> : null}</>
          ) : (
            <>
              <button
                onClick={() => openTab("editProfile")}
                className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
              >
                <p>Редактиране на профила</p>
                <GrNext />
              </button>
              <button
                onClick={() => window.location.replace("/login")}
                className="w-full h-16 bg-gray-50 rounded border flex items-center justify-between px-5 hover:bg-gray-200"
              >
                <p className="text-red-500">Изход от профила</p>
              </button>
            </>
          )}
        </ShowSelectedTab.Provider>
      </div>
    </>
  );
}

export default Settings;
