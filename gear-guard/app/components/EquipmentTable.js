"use client";
import { useEffect, useState } from "react";

export default function EquipmentTable() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("/api/equipment")
      .then((res) => res.json())
      .then((data) => setEquipment(data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Equipment</h2>
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + New
        </button> */}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-600">
            <th className="py-3">Equipment Name</th>
            <th>Employee</th>
            <th>Serial Number</th>
            <th>Technician</th>
            <th>Category</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          { Array.isArray(equipment) && equipment.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{item.equipment_name}</td>
              <td>{item.employee_name || "-"}</td>
              <td>{item.serial_number}</td>
              <td>{item.technician_name || "-"}</td>
              <td>{item.category}</td>
              <td>{item.company_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
