import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const d = await req.json();

    await pool.query(
      `INSERT INTO maintenance_requests2 
       (subject, description, created_by, maintenance_for,
        equipment_id, work_center_id, team_id, technician_id,
        category, priority, request_date, scheduled_date,
        duration_hours, maintenance_type, stage, company_id)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        d.subject,
        d.description,
        d.created_by,
        d.maintenance_for,
        d.equipment_id || null,
        d.work_center_id || null,
        d.team_id,
        d.technician_id || null,
        d.category,
        d.priority,
        d.request_date,
        d.scheduled_date || null,
        d.duration_hours,
        d.maintenance_type,
        "new_request",
        d.company_id
      ]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }
}



export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        mr.id,
        mr.subject,
        u.name AS employee,
        t.name AS technician,
        mr.category,
        mr.stage,
        c.name AS company
      FROM maintenance_requests2 mr
      LEFT JOIN users u ON mr.created_by = u.id
      LEFT JOIN users t ON mr.technician_id = t.id
      LEFT JOIN companies c ON mr.company_id = c.id
      ORDER BY mr.created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch maintenance requests" },
      { status: 500 }
    );
  }
}

