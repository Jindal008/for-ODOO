// "use client";

// export default function NewRequestForm() {
//   return (
//     <div className="bg-white rounded-xl shadow border p-6">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">
//           New Maintenance Request
//         </h2>

//         <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
//           New
//         </span>
//       </div>

//       {/* FORM GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* LEFT SIDE */}
//         <div className="space-y-4">
//           <Input label="Subject" placeholder="Test activity" />
//           <Input label="Created By" value="Mitchell Admin" disabled />

//           <Select
//             label="Maintenance For"
//             options={["Equipment", "Work Center"]}
//           />

//           <Select
//             label="Equipment"
//             options={[
//               "Acer Laptop / LP/203/19281928",
//               "Samsung Monitor",
//             ]}
//           />

//           <Input label="Category" value="Computers" disabled />
//           <Input label="Request Date" value="12/18/2025" />

//           <RadioGroup
//             label="Maintenance Type"
//             options={["Corrective", "Preventive"]}
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-4">
//           <Input label="Team" value="Internal Maintenance" disabled />
//           <Input label="Technician" value="Aka Foster" disabled />
//           <Input label="Scheduled Date" value="12/28/2025 14:30" />
//           <Input label="Duration (Hours)" value="00:00" />

//           <Priority />

//           <Input
//             label="Company"
//             value="My Company (San Francisco)"
//             disabled
//           />
//         </div>
//       </div>

//       {/* NOTES */}
//       <div className="mt-6">
//         <div className="flex gap-3 mb-2">
//           <Tab label="Notes" active />
//           <Tab label="Instructions" />
//         </div>

//         <textarea
//           rows="4"
//           className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
//           placeholder="Add notes here..."
//         />
//       </div>

//       {/* ACTIONS */}
//       <div className="flex justify-end gap-4 mt-6">
//         <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
//           Cancel
//         </button>
//         <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           Create Request
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------- SMALL REUSABLE PARTS ---------- */

// function Input({ label, value, placeholder, disabled }) {
//   return (
//     <div>
//       <label className="block text-sm text-gray-600 mb-1">{label}</label>
//       <input
//         value={value}
//         placeholder={placeholder}
//         disabled={disabled}
//         className={`w-full px-3 py-2 border rounded-lg ${
//           disabled ? "bg-gray-100" : "focus:ring-2 focus:ring-blue-500"
//         } outline-none`}
//       />
//     </div>
//   );
// }

// function Select({ label, options }) {
//   return (
//     <div>
//       <label className="block text-sm text-gray-600 mb-1">{label}</label>
//       <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
//         {options.map((o, i) => (
//           <option key={i}>{o}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function RadioGroup({ label, options }) {
//   return (
//     <div>
//       <label className="block text-sm text-gray-600 mb-1">{label}</label>
//       <div className="flex gap-6 text-sm">
//         {options.map((o, i) => (
//           <label key={i} className="flex gap-2">
//             <input type="radio" name="type" defaultChecked={i === 0} />
//             {o}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Priority() {
//   return (
//     <div>
//       <label className="block text-sm text-gray-600 mb-1">Priority</label>
//       <div className="flex gap-3">
//         <div className="w-6 h-6 border rotate-45 cursor-pointer" />
//         <div className="w-6 h-6 border rotate-45 cursor-pointer" />
//         <div className="w-6 h-6 border rotate-45 cursor-pointer" />
//       </div>
//     </div>
//   );
// }

// function Tab({ label, active }) {
//   return (
//     <button
//       className={`px-4 py-1 text-sm rounded-lg border ${
//         active ? "bg-blue-600 text-white" : "hover:bg-gray-100"
//       }`}
//     >
//       {label}
//     </button>
//   );
// }


"use client";
import { useState } from "react";

export default function NewMaintenanceRequest() {
  const [form, setForm] = useState({
    subject: "",
    description: "",
    created_by: 1,                 // Mitchell Admin (example user_id)
    maintenance_for: "equipment",
    equipment_id: "",
    work_center_id: "",
    team_id: "",
    technician_id: "",
    category: "",
    priority: 1,
    request_date: "",
    scheduled_date: "",
    duration_hours: 0,
    maintenance_type: "corrective",
    company_id: 1
  });

  const update = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      alert("Failed to create request");
      return;
    }

    alert("Maintenance Request Created ✅");
  };

  return (
    
    <div className="bg-white p-6 rounded-xl border shadow">

      <h2 className="text-xl font-semibold mb-6">New Maintenance Request</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT */}
        <Input label="Subject" name="subject" value={form.subject} onChange={update} />
        <Select
          label="Maintenance For"
          name="maintenance_for"
          value={form.maintenance_for}
          onChange={update}
          options={[
            { label: "Equipment", value: "equipment" },
            { label: "Work Center", value: "work_center" }
          ]}
        />

        {form.maintenance_for === "equipment" && (
          <Select
            label="Equipment"
            name="equipment_id"
            value={form.equipment_id}
            onChange={update}
           options={[
  { label: "MacBook Pro M2", value: 1 },
  { label: "Dell Optiplex 7090", value: 2 },
  { label: "CNC Milling Machine X1", value: 3 },
  { label: "Hydraulic Press 500T", value: 4 },
  { label: "Main Power Transformer", value: 5 },
  { label: "Rooftop AC Unit", value: 6 },
  { label: "Delivery Van #4", value: 7 },
  { label: "Main Gate Smart Lock", value: 8 },
  { label: "Data Center Rack A", value: 9 },
  { label: "iPad Pro 12.9", value: 10 }
]}

          />
        )}


        {form.maintenance_for === "work_center" && (
          <Select
            label="Work Center"
            name="work_center_id"
            value={form.work_center_id}
            onChange={update}
            options={[
              { label: "Assembly Line A", value: 1 },
              { label: "CNC Center", value: 3 }
            ]}
          />
        )}

        <Input label="Category" name="category" value={form.category} onChange={update} />
        <Input label="Request Date" type="date" name="request_date" value={form.request_date} onChange={update} />

        {/* RIGHT */}
        <Select
          label="Team"
          name="team_id"
          value={form.team_id}
          onChange={update}
          options={[
            { label: "Internal Maintenance", value: 1 },
            { label: "Shop Floor Mechanics", value: 2 }
          ]}
        />

        <Select
          label="Technician"
          name="technician_id"
          value={form.technician_id}
          onChange={update}
          options={[
            { label: "Aka Foster", value: 3 },
            { label: "Mike Ross", value: 4 }
          ]}
        />

        <Input label="Scheduled Date" type="datetime-local" name="scheduled_date" value={form.scheduled_date} onChange={update} />
        <Input label="Duration (Hours)" type="number" name="duration_hours" value={form.duration_hours} onChange={update} />

        <Radio
          label="Maintenance Type"
          name="maintenance_type"
          value={form.maintenance_type}
          onChange={update}
        />

        <Priority value={form.priority} onChange={update} />
      </div>

      <textarea
        className="w-full border rounded-lg p-3 mt-6"
        placeholder="Notes / Description"
        onChange={(e) => update("description", e.target.value)}
      />

      <button
        onClick={submit}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Create Request
      </button>
    </div>
  );
}

function Input({ label, name, value, onChange, type="text" }) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(name,e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <select
        value={value}
        onChange={(e)=>onChange(name,e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="">Select</option>
        {options.map(o=>(
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function Radio({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <div className="flex gap-4">
        {["corrective","preventive"].map(v=>(
          <label key={v}>
            <input
              type="radio"
              checked={value===v}
              onChange={()=>onChange(name,v)}
            /> {v}
          </label>
        ))}
      </div>
    </div>
  );
}

function Priority({ value, onChange }) {
  return (
    <div>
      <label className="text-sm">Priority</label>
      <div className="flex gap-3">
        {[1,2,3].map(p=>(
          <div
            key={p}
            onClick={()=>onChange("priority",p)}
            className={`w-6 h-6 rotate-45 border cursor-pointer ${value>=p?"bg-blue-500":""}`}
          />
        ))}
      </div>
    </div>
  );
}
