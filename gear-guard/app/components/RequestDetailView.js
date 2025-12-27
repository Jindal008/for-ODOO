"use client";

import WorkflowStepper from "./WorkflowStepper";

export default function RequestDetailView() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
            New
          </span>
          <h2 className="text-xl font-semibold mt-2">
            Test activity
          </h2>
        </div>

        {/* Workflow */}
        <WorkflowStepper status="Scrap" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="space-y-4">
          <Field label="Created By" value="Mitchell Admin" />
          <Field label="Maintenance For" value="Equipment" />
          <Field
            label="Equipment"
            value="Acer Laptop / LP/203/19281928"
          />
          <Field label="Category" value="Computers" />
          <Field label="Request Date" value="12/18/2025" />
          <Field label="Maintenance Type" value="Corrective" />
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          <Field label="Team" value="Internal Maintenance" />
          <Field label="Technician" value="Aka Foster" />
          <Field label="Scheduled Date" value="12/28/2025 14:30" />
          <Field label="Duration" value="00:00 hours" />

          {/* Priority */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Priority
            </label>
            <div className="flex gap-3">
              <Priority active />
              <Priority />
              <Priority />
            </div>
          </div>

          <Field
            label="Company"
            value="My Company (San Francisco)"
          />
        </div>
      </div>

      {/* Notes / Instructions */}
      <div className="mt-8">
        <div className="flex gap-4 mb-3">
          <Tab label="Notes" active />
          <Tab label="Instructions" />
        </div>

        <div className="border rounded-lg p-4 text-sm text-gray-600">
          No notes added yet.
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
          Back
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit
        </button>
      </div>
    </div>
  );
}

/* ---------- Small Reusable Parts ---------- */

function Field({ label, value }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">
        {label}
      </label>
      <div className="border rounded-lg px-3 py-2 bg-gray-50 text-gray-800">
        {value}
      </div>
    </div>
  );
}

function Priority({ active }) {
  return (
    <div
      className={`w-6 h-6 rotate-45 border ${
        active ? "bg-blue-500" : ""
      }`}
    />
  );
}

function Tab({ label, active }) {
  return (
    <button
      className={`px-4 py-1 text-sm rounded-lg border ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}
