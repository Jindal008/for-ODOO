// "use client";

// import { useState } from "react";
// import { teams , addTeamMember } from "@/lib/monckDb";

// export default function AddTeamMemberForm({ onAdd }) {
//   const [form, setForm] = useState({
//     name: "",
//     role: "Technician",
//     teamId: teams[0].id,
//     experience: "",
//     availability: "Available",
//   });

//   function handleSubmit(e) {
//     e.preventDefault();

//     addTeamMember(form);
//     onAdd(); // refresh UI

//     setForm({
//       name: "",
//       role: "Technician",
//       teamId: teams[0].id,
//       experience: "",
//       availability: "Available",
//     });
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white border rounded-xl p-6 mb-6"
//     >
//       <h2 className="text-lg font-semibold mb-4">
//         Add Team Member
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//         <Input
//           label="Member Name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({ ...form, name: e.target.value })
//           }
//         />

//         <Select
//           label="Team"
//           value={form.teamId}
//           options={teams}
//           onChange={(e) =>
//             setForm({ ...form, teamId: Number(e.target.value) })
//           }
//         />

//         <Select
//           label="Role"
//           value={form.role}
//           options={[
//             { id: "Technician", name: "Technician" },
//             { id: "Supervisor", name: "Supervisor" },
//           ]}
//           onChange={(e) =>
//             setForm({ ...form, role: e.target.value })
//           }
//         />

//         <Input
//           label="Experience (Years)"
//           value={form.experience}
//           onChange={(e) =>
//             setForm({ ...form, experience: e.target.value })
//           }
//         />

//         <Select
//           label="Availability"
//           value={form.availability}
//           options={[
//             { id: "Available", name: "Available" },
//             { id: "Busy", name: "Busy" },
//           ]}
//           onChange={(e) =>
//             setForm({ ...form, availability: e.target.value })
//           }
//         />
//       </div>

//       <div className="flex justify-end mt-4">
//         <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
//           Add Member
//         </button>
//       </div>
//     </form>
//   );
// }

// /* --- small helpers --- */

// function Input({ label, ...props }) {
//   return (
//     <div>
//       <label className="block text-sm mb-1">{label}</label>
//       <input
//         {...props}
//         required
//         className="w-full px-3 py-2 border rounded-lg"
//       />
//     </div>
//   );
// }

// function Select({ label, options, ...props }) {
//   return (
//     <div>
//       <label className="block text-sm mb-1">{label}</label>
//       <select
//         {...props}
//         className="w-full px-3 py-2 border rounded-lg"
//       >
//         {options.map((o) => (
//           <option key={o.id} value={o.id}>
//             {o.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }


"use client";

export default function AddTeamMember() {
  return (
    <div className="bg-white rounded-xl border shadow p-6">
      <h3 className="font-semibold mb-4">Add Team Member</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Member Name" />
        <Select label="Team" options={[
          "Internal Maintenance",
          "Metrology",
          "Subcontractor",
          "Mechanical",
          "Electrical"
        ]} />
        <Select label="Role" options={["Technician", "Supervisor"]} />
        <Input label="Experience (Years)" />
        <Select label="Availability" options={["available", "busy"]} />
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Add Member
        </button>
      </div>
    </div>
  );
}

/* Reusable */
function Input({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input className="w-full border rounded px-3 py-2" />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <select className="w-full border rounded px-3 py-2">
        {options.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
