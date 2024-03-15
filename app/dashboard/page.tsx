import Link from "next/link";
import Stats from "./Stats";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 gap-2 lg:gap-5 pt-24">
      <Stats />
      <Link href="/new" className="btn">
        Add job
      </Link>
    </div>
  );
};

export default DashboardPage;
