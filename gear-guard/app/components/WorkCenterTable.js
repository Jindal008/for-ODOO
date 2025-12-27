"use client";
import { useEffect, useState } from "react";

export default function WorkCenterTable() {
  const [workCenters, setWorkCenters] = useState([]);

  useEffect(() => {
    fetch("/api/work-center")
      .then(res => res.json())
      .then(data => setWorkCenters(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      {/* Header (SAME AS EQUIPMENT) */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Work Centers</h2>

        {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + New
        </button> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-3">Work Center</th>
              <th className="py-3">Cost / Hour</th>
              <th className="py-3">Efficiency</th>
              <th className="py-3">OEE Target</th>
            </tr>
          </thead>

          <tbody>
            {workCenters.map((wc) => (
              <tr
                key={wc.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="py-4">{wc.work_center}</td>
                <td className="py-4">{wc.cost_per_hour}</td>
                <td className="py-4">{wc.efficiency_percent}%</td>
                <td className="py-4">{wc.oee_target}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
