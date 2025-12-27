// "use client";

// import { teams , teamMembers } from "@/lib/monckDb";

// export default function TeamMemberList() {
//   return (
//     <div className="bg-white border rounded-xl p-6">
//       <h2 className="text-lg font-semibold mb-4">
//         Team Members
//       </h2>

//       {teams.map((team) => {
//         const members = teamMembers.filter(
//           (m) => m.teamId === team.id
//         );

//         return (
//           <div key={team.id} className="mb-6">
//             <h3 className="font-medium text-blue-600 mb-2">
//               {team.name}
//             </h3>

//             {members.length ? (
//               <table className="w-full text-sm border">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="p-2 text-left">Name</th>
//                     <th className="p-2 text-left">Role</th>
//                     <th className="p-2 text-left">Experience</th>
//                     <th className="p-2 text-left">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {members.map((m) => (
//                     <tr key={m.id} className="border-t">
//                       <td className="p-2 text-left">{m.name}</td>
//                       <td className="p-2 text-left">{m.role}</td>
//                       <td className="p-2 text-left">{m.experience} yrs</td>
//                       <td>
//                         <span
//                           className={`px-2 py-1 text-xs rounded ${
//                             m.availability === "Available"
//                               ? "bg-green-100 text-green-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >
//                           {m.availability}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p className="text-sm text-gray-400">
//                 No members assigned
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function TeamMembers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/teams")
      .then(res => res.json())
      .then(res => setData(Array.isArray(res) ? res : []));
  }, []);

  // Group by team
  const grouped = data.reduce((acc, row) => {
    if (!acc[row.team_name]) acc[row.team_name] = [];
    if (row.member_name) acc[row.team_name].push(row);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-xl border shadow p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Team Members</h3>

      {Object.keys(grouped).map(team => (
        <div key={team} className="mb-6">
          <h4 className="text-blue-600 font-medium mb-2">{team}</h4>

          {grouped[team].length === 0 ? (
            <p className="text-sm text-gray-500">No members assigned</p>
          ) : (
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-2">Name</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Experience</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>

              <tbody>
                {grouped[team].map((m, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{m.member_name}</td>
                    <td className="p-2">{m.role}</td>
                    <td className="p-2">{m.experience_years} yrs</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          m.availability === "available"
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
          )}
        </div>
      ))}
    </div>
  );
}

