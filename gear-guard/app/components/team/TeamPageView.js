"use client";

import { useState } from "react";
import AddTeamMemberForm from "./AddTeamMemberForm";
import TeamMemberList from "./TeamMemberList";

export default function TeamPageView() {
  const [, setRefresh] = useState(false);

  return (
    <>
      <AddTeamMemberForm
        onAdd={() => setRefresh((r) => !r)}
      />
      <TeamMemberList />
    </>
  );
}
