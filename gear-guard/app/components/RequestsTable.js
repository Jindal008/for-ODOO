// "use client"

// import { useRouter } from "next/navigation";
// export default function RequestsTable() {

//    const router = useRouter();

//    return (
//     <div className="bg-white rounded-xl shadow p-6">
//       <h2 className="text-lg font-semibold mb-4">
//         Maintenance Requests
//       </h2>

//       <table className="w-full text-sm">
//         <thead className="border-b text-gray-500">
//           <tr>
//             <th className="py-3 text-left">Subject</th>
//             <th className="text-left">Employee</th>
//             <th className="text-left">Technician</th>
//             <th className="text-left">Category</th>
//             <th className="text-left">Stage</th>
//             <th className="text-left">Company</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr onClick={() => router.push("/maintenance/request/101")} className="border-b hover:bg-gray-50 transition">
//             <td className="py-3 font-medium">
//               Test Activity
//             </td>
//             <td>Mitchell Admin</td>
//             <td>Aka Foster</td>
//             <td>Computer</td>
//             <td>
//               <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
//                 New Request
//               </span>
//             </td>
//             <td>My Company</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MaintenanceList() {
     const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/maintenance")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-4">
      <h2 className="text-lg font-semibold mb-4">
        Maintenance Requests
      </h2>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr  className="border-b text-gray-600">
            <th className="text-left py-2">Subject</th>
            <th className="text-left py-2">Employee</th>
            <th className="text-left py-2">Technician</th>
            <th className="text-left py-2">Category</th>
            <th className="text-left py-2">Stage</th>
            <th className="text-left py-2">Company</th>
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr onClick={() => router.push("/maintenance/request/101")} key={row.id} className="border-b">
              <td className="py-2 font-medium">{row.subject}</td>
              <td>{row.employee}</td>
              <td>{row.technician || "-"}</td>
              <td>{row.category}</td>
              <td>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  {row.stage.replace("_", " ")}
                </span>
              </td>
              <td>{row.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

