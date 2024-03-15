import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const job = await prisma.job.create({
    data: {
      title: body.title,
      company: body.company,
      salary: body.salary,
      location: body.location,
      dateApplied: body.dateApplied,
      comment: body.comment,
      jobPostingUrl: body.jobPostingUrl,
      status: body.status,
      description: body.description,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(job);
}
