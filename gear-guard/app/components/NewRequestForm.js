"use client";

export default function NewRequestForm() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          New Maintenance Request
        </h2>

        <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
          New
        </span>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          <Input label="Subject" placeholder="Test activity" />
          <Input label="Created By" value="Mitchell Admin" disabled />

          <Select
            label="Maintenance For"
            options={["Equipment", "Work Center"]}
          />

          <Select
            label="Equipment"
            options={[
              "Acer Laptop / LP/203/19281928",
              "Samsung Monitor",
            ]}
          />

          <Input label="Category" value="Computers" disabled />
          <Input label="Request Date" value="12/18/2025" />

          <RadioGroup
            label="Maintenance Type"
            options={["Corrective", "Preventive"]}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <Input label="Team" value="Internal Maintenance" disabled />
          <Input label="Technician" value="Aka Foster" disabled />
          <Input label="Scheduled Date" value="12/28/2025 14:30" />
          <Input label="Duration (Hours)" value="00:00" />

          <Priority />

          <Input
            label="Company"
            value="My Company (San Francisco)"
            disabled
          />
        </div>
      </div>

      {/* NOTES */}
      <div className="mt-6">
        <div className="flex gap-3 mb-2">
          <Tab label="Notes" active />
          <Tab label="Instructions" />
        </div>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Add notes here..."
        />
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Request
        </button>
      </div>
    </div>
  );
}

/* ---------- SMALL REUSABLE PARTS ---------- */

function Input({ label, value, placeholder, disabled }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-lg ${
          disabled ? "bg-gray-100" : "focus:ring-2 focus:ring-blue-500"
        } outline-none`}
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({ label, options }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <div className="flex gap-6 text-sm">
        {options.map((o, i) => (
          <label key={i} className="flex gap-2">
            <input type="radio" name="type" defaultChecked={i === 0} />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function Priority() {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">Priority</label>
      <div className="flex gap-3">
        <div className="w-6 h-6 border rotate-45 cursor-pointer" />
        <div className="w-6 h-6 border rotate-45 cursor-pointer" />
        <div className="w-6 h-6 border rotate-45 cursor-pointer" />
      </div>
    </div>
  );
}

function Tab({ label, active }) {
  return (
    <button
      className={`px-4 py-1 text-sm rounded-lg border ${
        active ? "bg-blue-600 text-white" : "hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}
