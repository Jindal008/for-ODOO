"use client";

import { useRouter } from "next/navigation";
import TopMenu from "../components/TopMenu";
import DashboardCards from "../components/DashboradCards";
import RequestsTable from "../components/RequestsTable";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => router.push("/maintenance/new")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + New
          </button>

          <input
            placeholder="Search..."
            className="w-72 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <DashboardCards />
        <RequestsTable />
      </div>
    </div>
  );
}
