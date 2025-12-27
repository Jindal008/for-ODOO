// This file simulates DB calls

export function getEquipments() {
  return Promise.resolve([
    {
      id: 1,
      name: 'Samsung Monitor 15"',
      employee: 'Tejas Modi',
      department: 'Admin',
      serial: 'MT/125/2278837',
      technician: 'Mitchell Admin',
      category: 'Monitors',
      company: 'My Company (SF)',
    },
    {
      id: 2,
      name: 'Acer Laptop',
      employee: 'Bhaumik P',
      department: 'Technician',
      serial: 'MT/122/1111222',
      technician: 'Marc Demo',
      category: 'Computers',
      company: 'My Company (SF)',
    },
  ]);
}

export function getTeams() {
  return Promise.resolve([
    {
      id: 1,
      name: 'Internal Maintenance',
      members: 'Ana Makari',
      company: 'My Company (SF)',
    },
    {
      id: 2,
      name: 'Metrology',
      members: 'Marc Demo',
      company: 'My Company (SF)',
    },
    {
      id: 3,
      name: 'Subcontractor',
      members: 'Maggie Davidson',
      company: 'My Company (SF)',
    },
  ]);
}

export function getWorkCenters() {
  return Promise.resolve([
    {
      id: 1,
      name: 'Assembly 1',
      cost: 1.0,
      efficiency: '100%',
      oee: 34.59,
    },
    {
      id: 2,
      name: 'Drill 1',
      cost: 1.0,
      efficiency: '100%',
      oee: 90.0,
    },
  ]);
}

  // export const teams = [
  //   { id: 1, name: "Internal Maintenance" },
  //   { id: 2, name: "Metrology" },
  //   { id: 3, name: "Subcontractor" },
  // ];

  // export let teamMembers = [
  //   {
  //     id: 1,
  //     name: "Aka Foster",
  //     role: "Technician",
  //     teamId: 1,
  //     experience: 5,
  //     availability: "Available",
  //   },
  // ];

  // Temporary add function (like DB insert)
  export function addTeamMember(member) {
    teamMembers.push({
      id: Date.now(),
      ...member,
    });
  }

export const teams = [
  { id: 1, name: "Internal Maintenance" },
  { id: 2, name: "Metrology" },
  { id: 3, name: "Subcontractor" },
  { id: 4, name: "machanical"},
  { id: 5, name: "electrical"},
];

export let teamMembers = [
  // Internal Maintenance
  {
    id: 1,
    name: "Aka Foster",
    role: "Technician",
    teamId: 1,
    experience: 5,
    availability: "Available",
  },
  {
    id: 2,
    name: "Anna Makari",
    role: "Supervisor",
    teamId: 1,
    experience: 8,
    availability: "Busy",
  },

  // Metrology
  {
    id: 3,
    name: "Marc Demo",
    role: "Technician",
    teamId: 2,
    experience: 6,
    availability: "Available",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Technician",
    teamId: 2,
    experience: 4,
    availability: "Available",
  },

  // Subcontractor
  {
    id: 5,
    name: "Maggie Davidson",
    role: "Technician",
    teamId: 3,
    experience: 7,
    availability: "Busy",
  },
  {
    id: 6,
    name: "Robert Lee",
    role: "Technician",
    teamId: 3,
    experience: 3,
    availability: "Available",
  },
];
