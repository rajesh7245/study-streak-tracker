export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {

  const studies = await prisma.study.findMany({
    orderBy: { studyDate: "desc" }
  });

  const dates = studies.map((s) =>
    s.studyDate.toISOString().split("T")[0]
  );

  return NextResponse.json(dates);
}