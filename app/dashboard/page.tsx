import Link from "next/link";
import Stats from "./Stats";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "../actions/getCurrentUser";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { format } from "date-fns";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

  const jobs = await prisma.job.findMany({
    where: {
      userId: currentUser?.id,
    },
  });

  const formattedJobs = jobs.map((job) => ({
    ...job,
    dateApplied: format(job.dateApplied, "dd.MM.yyyy"),
  }));

  return (
    <div className="flex flex-col justify-center items-center px-4 gap-2 lg:gap-5 pt-24 space-y-2 lg:space-y-0">
      <Stats currentUser={currentUser} />
      <Link href="/new" className="btn">
        Add job
      </Link>
      <div className="w-full max-w-5xl">
        <DataTable columns={columns} data={formattedJobs} />
      </div>
    </div>
  );
};

export default DashboardPage;
