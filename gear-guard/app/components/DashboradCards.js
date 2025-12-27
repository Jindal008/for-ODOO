export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      
      {/* Critical Equipment */}
      <div className="border border-red-300 bg-red-50 rounded-xl p-5 shadow">
        <h3 className="text-red-600 font-semibold mb-1">
          Critical Equipment
        </h3>
        <p className="text-3xl font-bold text-red-700">5 Units</p>
        <p className="text-sm text-red-500">Health &lt; 30%</p>
      </div>

      {/* Technician Load */}
      <div className="border border-blue-300 bg-blue-50 rounded-xl p-5 shadow">
        <h3 className="text-blue-600 font-semibold mb-1">
          Technician Load
        </h3>
        <p className="text-3xl font-bold text-blue-700">85%</p>
        <p className="text-sm text-blue-500">
          Assign Carefully
        </p>
      </div>

      {/* Open Requests */}
      <div className="border border-green-300 bg-green-50 rounded-xl p-5 shadow">
        <h3 className="text-green-600 font-semibold mb-1">
          Open Requests
        </h3>
        <p className="text-3xl font-bold text-green-700">12</p>
        <p className="text-sm text-green-600">3 Overdue</p>
      </div>

    </div>
  );
}
