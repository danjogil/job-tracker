import getCurrentUser from "@/app/actions/getCurrentUser";
import authOptions from "@/app/auth/authOptions";
import prisma from "@/app/libs/prismadb";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const {
    title,
    company,
    jobPostingUrl,
    location,
    salary,
    description,
    comment,
    status,
    dateApplied,
  } = body;

  const job = await prisma.job.findUnique({
    where: { id: params?.jobId, userId: currentUser?.id },
  });

  if (!job)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const updatedJob = await prisma.job.update({
    where: { id: job.id },
    data: {
      title,
      company,
      jobPostingUrl,
      location,
      salary,
      description,
      comment,
      status,
      dateApplied,
    },
  });

  return NextResponse.json(updatedJob);
}
