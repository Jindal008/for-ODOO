"use client";

import { useEffect, useState } from "react";
import { getWorkCenters } from "@/lib/monckDb";

export default function WorkCenterTable() {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    getWorkCenters().then(setCenters);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <table className="w-full text-sm">
        <thead className="border-b text-gray-600">
          <tr>
            <th className="text-left py-3">Work Center</th>
            <th className="text-left py-3">Cost / Hour</th>
            <th className="text-left py-3">Efficiency</th>
            <th className="text-left py-3">OEE Target</th>
          </tr>
        </thead>

        <tbody>
          {centers.map((c) => (
            <tr key={c.id} className="border-b">
              <td className="py-3">{c.name}</td>
              <td>{c.cost}</td>
              <td>{c.efficiency}</td>
              <td>{c.oee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
