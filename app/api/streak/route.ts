import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { calculateStreak } from "../../../lib/streakLogic";

export async function GET() {

  const studies = await prisma.study.findMany({
    orderBy: { studyDate: "desc" }
  });

  const dates = studies.map((s) =>
    s.studyDate.toISOString().split("T")[0]
  );

  const result = calculateStreak(dates);

  return NextResponse.json(result);
}