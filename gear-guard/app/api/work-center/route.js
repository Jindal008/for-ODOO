import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        wc.id,
        wc.name AS work_center,
        wc.cost_per_hour,
        wc.efficiency_percent,
        wc.oee_target
      FROM work_centers wc
      ORDER BY wc.id
    `);

    return Response.json(rows);
  } catch (error) {
    console.error("❌ WORK CENTER API ERROR:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
