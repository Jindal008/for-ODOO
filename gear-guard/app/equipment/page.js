import TopMenu from "../components/TopMenu";
import EquipmentTable from "../components/EquipmentTable";

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />
      <div className="p-6">
        <EquipmentTable />
      </div>
    </div>
  );
}
