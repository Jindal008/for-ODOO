"use client";

import { useState } from "react";

export default function UserProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Avatar */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
          className="w-9 h-9 rounded-full border"
        />
        <span className="text-sm font-medium text-gray-700">
          Mitchell Admin
        </span>
      </div>

      {/* Hover Card */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border z-50">
          
          {/* User Info */}
          <div className="px-4 py-3 border-b">
            <p className="font-semibold text-gray-800">
              Mitchell Admin
            </p>
            <p className="text-xs text-gray-500">
              Maintenance Manager
            </p>
          </div>

          {/* Actions */}
          <div className="py-2 text-sm">
            <ProfileItem label="Profile" />
            <ProfileItem label="Settings" />
            <ProfileItem label="Logout" danger />
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileItem({ label, danger }) {
  return (
    <div
      className={`px-4 py-2 cursor-pointer transition ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
      }`}
    >
      {label}
    </div>
  );
}
