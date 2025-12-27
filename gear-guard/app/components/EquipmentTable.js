"use client";

import { useEffect, useState } from "react";
import { getEquipments } from "@/lib/monckDb";

export default function EquipmentTable() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    getEquipments().then(setEquipments);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <div className="flex justify-between mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + New
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="border-b text-gray-600">
          <tr>
            <th className="text-left py-3">Equipment Name</th>
            <th className="text-left py-3">Employee</th>
            <th className="text-left py-3">Department</th>
            <th className="text-left py-3">Serial Number</th>
            <th className="text-left py-3">Technician</th>
            <th className="text-left py-3">Category</th>
            <th className="text-left py-3">Company</th>
          </tr>
        </thead>

        <tbody>
          {equipments.map((eq) => (
            <tr key={eq.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{eq.name}</td>
              <td>{eq.employee}</td>
              <td>{eq.department}</td>
              <td>{eq.serial}</td>
              <td>{eq.technician}</td>
              <td>{eq.category}</td>
              <td>{eq.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
