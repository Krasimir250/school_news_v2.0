import React, { useState } from "react";
import BackButton from "../../../components/backButton/BackButton";

function SchoolCalendar() {
  const initialDates = [
    { date: "2024-08-15", event: "Откриване на учебната година" },
    { date: "2024-09-05", event: "Ден на учителя" },
    { date: "2024-11-25", event: "Коледно тържество" },
    { date: "2024-12-20", event: "Ден на писателя" },
    { date: "2025-01-05", event: "Патронен празник" },
  ];

  const [specialDates, setSpecialDates] = useState(initialDates);
  const [newDate, setNewDate] = useState("");
  const [newEvent, setNewEvent] = useState("");

  const handleAdd = () => {
    setSpecialDates([...specialDates, { date: newDate, event: newEvent }]);
    setNewDate("");
    setNewEvent("");
  };

  const handleRemove = (index) => {
    const updatedDates = specialDates.filter((_, i) => i !== index);
    setSpecialDates(updatedDates);
  };

  return (
    <div>
      <BackButton />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Училищен календар</h1>

        <div className="mb-4">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Събитие"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            className="border p-2 mr-2"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Добави
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">Дата</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Събитие</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Функции</th>
              </tr>
            </thead>
            <tbody>
              {specialDates.map((dateInfo, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{dateInfo.date}</td>
                  <td className="py-2 px-4 border-b">{dateInfo.event}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleRemove(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Изтрий
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SchoolCalendar;
