import TopMenu from "../../components/TopMenu";
import NewRequestForm from "../../components/NewRequestForm";

export default function NewMaintenanceRequestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />

      <div className="p-6 max-w-6xl mx-auto">
        <NewRequestForm />
      </div>
    </div>
  );
}
