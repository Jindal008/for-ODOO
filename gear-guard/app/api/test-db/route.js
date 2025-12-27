import mysql from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Jindal#06890",        // ← put your actual password
      database: "maintenance_db",
      port: 3306,
    });

    const [rows] = await connection.query("SELECT 1 AS ok");
    await connection.end();

    return Response.json({ success: true, rows });
  } catch (error) {
    console.error("❌ DB CONNECTION FAILED:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
