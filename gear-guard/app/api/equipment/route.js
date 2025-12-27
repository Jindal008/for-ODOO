import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        e.id,
        e.name AS equipment_name,
        e.serial_number,
        e.category,
        u1.name AS employee_name,
        u2.name AS technician_name,
        c.name AS company_name
      FROM equipment e
      LEFT JOIN users u1 ON e.employee_id = u1.id
      LEFT JOIN users u2 ON e.technician_id = u2.id
      LEFT JOIN companies c ON e.company_id = c.id
    `);

    // const [rows] = await pool.query("SELECT 1");
    console.log(rows)

    return Response.json(rows);
  } catch (error) {
    console.error("❌ EQUIPMENT API ERROR:", error); // 👈 IMPORTANT
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

