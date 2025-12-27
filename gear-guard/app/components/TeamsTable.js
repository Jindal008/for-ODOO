"use client";

import { useEffect, useState } from "react";
import { getTeams } from "@/lib/monckDb";

export default function TeamsTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        + New
      </button>

      <table className="w-full text-sm">
        <thead className="border-b text-gray-600">
          <tr>
            <th className="text-left py-3">Team Name</th>
            <th className="text-left py-3">Team Members</th>
            <th className="text-left py-3">Company</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => (
            <tr key={team.id} className="border-b">
              <td className="py-3">{team.name}</td>
              <td>{team.members}</td>
              <td>{team.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
