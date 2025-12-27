import TopMenu from "../components/TopMenu";
import WorkCenterTable from "../components/WorkCenterTable";

export default function WorkCenterPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />
      <div className="p-6">
        <WorkCenterTable />
      </div>
    </div>
  );
}
