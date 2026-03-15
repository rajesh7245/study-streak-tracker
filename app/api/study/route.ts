import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST() {

  const today = new Date();
  today.setHours(0,0,0,0);

  const existing = await prisma.study.findFirst({
    where: { studyDate: today }
  });

  if (existing) {
    return NextResponse.json({
      message: "You already marked today 🔥"
    });
  }

  await prisma.study.create({
    data: {
      studyDate: today
    }
  });

  return NextResponse.json({
    message: "Study recorded successfully 🔥"
  });
}