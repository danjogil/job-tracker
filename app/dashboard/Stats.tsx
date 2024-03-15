import prisma from "@/app/libs/prismadb";
import { User } from "@prisma/client";

const Stats = async ({ currentUser }: { currentUser?: User | null }) => {
  const applying = await prisma.job.findMany({
    where: {
      status: "APPLYING",
      userId: currentUser?.id,
    },
  });

  const applied = await prisma.job.findMany({
    where: {
      status: "APPLIED",
      userId: currentUser?.id,
    },
  });

  const rejected = await prisma.job.findMany({
    where: {
      status: "REJECTED",
      userId: currentUser?.id,
    },
  });

  const interviewing = await prisma.job.findMany({
    where: {
      status: "INTERVIEWING",
      userId: currentUser?.id,
    },
  });

  const negotiating = await prisma.job.findMany({
    where: {
      status: "NEGOTIATING",
      userId: currentUser?.id,
    },
  });

  const accepted = await prisma.job.findMany({
    where: {
      status: "ACCEPTED",
      userId: currentUser?.id,
    },
  });

  const statsOne = [
    { title: "Applying", value: applying.length },
    { title: "Applied", value: applied.length },
    { title: "Rejected", value: rejected.length },
  ];

  const statsTwo = [
    { title: "Interviewing", value: interviewing.length },
    { title: "Negotiating", value: negotiating.length },
    { title: "Accepted", value: accepted.length },
  ];

  return (
    <div className="flex gap-2 md:gap-5">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {statsOne.map((stat) => (
          <Stat
            key={stat.title}
            title={stat.title}
            value={String(stat.value)}
          />
        ))}
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {statsTwo.map((stat) => (
          <Stat
            key={stat.title}
            title={stat.title}
            value={String(stat.value)}
          />
        ))}
      </div>
    </div>
  );
};

const Stat = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="stat min-w-[150px]">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default Stats;
