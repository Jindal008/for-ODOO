import TopMenu from "@/app/components/TopMenu";
import RequestDetailView from "@/app/components/RequestDetailView";

export default function RequestDetailPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Top Menu */}
      <TopMenu />

      {/* Page Content */}
      <div className="p-6">
        <RequestDetailView />
      </div>
    </div>
  );
}
