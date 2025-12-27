import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT
        t.id AS team_id,
        t.name AS team_name,
        u.name AS member_name,
        tm.role,
        tm.experience_years,
        tm.availability
      FROM teams t
      LEFT JOIN team_members tm ON tm.team_id = t.id
      LEFT JOIN users u ON u.id = tm.user_id
      ORDER BY t.id
    `);

    return Response.json(rows);
  } catch (error) {
    console.error("❌ TEAMS API ERROR:", error);
    return Response.json({ error: "DB error" }, { status: 500 });
  }
}
