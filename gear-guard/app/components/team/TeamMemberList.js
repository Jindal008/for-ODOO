"use client";

import { teams , teamMembers } from "@/lib/monckDb";

export default function TeamMemberList() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">
        Team Members
      </h2>

      {teams.map((team) => {
        const members = teamMembers.filter(
          (m) => m.teamId === team.id
        );

        return (
          <div key={team.id} className="mb-6">
            <h3 className="font-medium text-blue-600 mb-2">
              {team.name}
            </h3>

            {members.length ? (
              <table className="w-full text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Role</th>
                    <th className="p-2 text-left">Experience</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.id} className="border-t">
                      <td className="p-2 text-left">{m.name}</td>
                      <td className="p-2 text-left">{m.role}</td>
                      <td className="p-2 text-left">{m.experience} yrs</td>
                      <td>
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            m.availability === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {m.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-sm text-gray-400">
                No members assigned
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
