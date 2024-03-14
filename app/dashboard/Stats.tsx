const Stats = () => {
  const statsOne = [
    { title: "Applying", value: "3" },
    { title: "Applied", value: "23" },
    { title: "Rejected", value: "7" },
  ];

  const statsTwo = [
    { title: "Interviewing", value: "2" },
    { title: "Negotiating", value: "1" },
    { title: "Accepted", value: "0" },
  ];

  return (
    <div className="flex gap-2 md:gap-5">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {statsOne.map((stat) => (
          <Stat key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {statsTwo.map((stat) => (
          <Stat key={stat.title} title={stat.title} value={stat.value} />
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
