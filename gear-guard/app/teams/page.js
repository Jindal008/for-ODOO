import TopMenu from "../components/TopMenu";
// import AddTeamMember from "../components/team/AddTeamMemberForm";
import TeamPageView from "../components/team/TeamPageView";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />
      <div className="p-6 max-w-6xl mx-auto">
        <TeamPageView />
      </div>
    </div>
  );
}
