import React, { useState } from "react";
import BackButton from "../../../components/backButton/BackButton";

const SchoolInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState({
    name: "ППМГ''Васил Левски''",
    city: "гр.Смолян",
    about:
      "Ние предлагаме висококачествено образование и благоприятна среда за всички ученици. Нашата мисия е да насърчаваме интелектуалния растеж и социалната отговорност.",
    address: "кв.Райково",
    phone: "088 543 2345",
    email: "ppmgvasillevski@smolyan.edu.mon.bg",
    programs: [
      "Софтуерни и хардуерни науки",
      "Математическа",
      "Природни науки",
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolInfo({ ...schoolInfo, [name]: value });
  };

  const handleProgramChange = (index, value) => {
    const updatedPrograms = [...schoolInfo.programs];
    updatedPrograms[index] = value;
    setSchoolInfo({ ...schoolInfo, programs: updatedPrograms });
  };

  const handleAddProgram = () => {
    setSchoolInfo({ ...schoolInfo, programs: [...schoolInfo.programs, ""] });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <BackButton />
      <div className="min-h-screen p-6">
        <div className="container mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-teal-500 p-4 text-white font-bold">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={schoolInfo.name}
                    onChange={handleChange}
                    className="text-3xl font-bold bg-transparent border-none focus:outline-none"
                  />
                  <input
                    type="text"
                    name="city"
                    value={schoolInfo.city}
                    onChange={handleChange}
                    className="bg-transparent border-none focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h1 className="text-3xl">{schoolInfo.name}</h1>
                  <p>{schoolInfo.city}</p>
                </>
              )}
            </div>
            <div className="p-6">
              {isEditing ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">За нас</h2>
                  <textarea
                    name="about"
                    value={schoolInfo.about}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <h2 className="text-2xl font-semibold mb-4">
                    Информация за връзка с нас
                  </h2>
                  <p>
                    <strong>Адрес:</strong>
                  </p>
                  <input
                    type="text"
                    name="address"
                    value={schoolInfo.address}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <p>
                    <strong>Тел:</strong>
                  </p>
                  <input
                    type="text"
                    name="phone"
                    value={schoolInfo.phone}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <input
                    type="email"
                    name="email"
                    value={schoolInfo.email}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <h2 className="text-2xl font-semibold mb-4">
                    Предлагани паралелки
                  </h2>
                  {schoolInfo.programs.map((program, index) => (
                    <input
                      key={index}
                      type="text"
                      value={program}
                      onChange={(e) =>
                        handleProgramChange(index, e.target.value)
                      }
                      className="w-full mb-2 p-2 border rounded"
                    />
                  ))}
                  <button
                    onClick={handleAddProgram}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Добави паралелки
                  </button>
                  <div className="mt-4">
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Запази
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Отказ
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-4">За нас</h2>
                  <p className="mb-4">{schoolInfo.about}</p>
                  <h2 className="text-2xl font-semibold mb-4">
                    Информация за връзка с нас
                  </h2>
                  <p>
                    <strong>Адрес:</strong> {schoolInfo.address}
                  </p>
                  <p>
                    <strong>Тел:</strong> {schoolInfo.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {schoolInfo.email}
                  </p>
                  <h2 className="text-2xl font-semibold mb-4">
                    Предлагани паралелки
                  </h2>
                  <ul className="list-disc list-inside">
                    {schoolInfo.programs.map((program, index) => (
                      <li key={index}>{program}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                  >
                    Редактирай
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
