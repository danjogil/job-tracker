import getCurrentUser from "../actions/getCurrentUser";
import EditJobForm from "./EditJobForm";
import prisma from "@/app/libs/prismadb";

interface Props {
  params: { jobId: string };
}

const JobPage: React.FC<Props> = async ({ params }) => {
  const currentUser = await getCurrentUser();

  const job = await prisma.job.findUnique({
    where: {
      id: params?.jobId,
      userId: currentUser?.id,
    },
  });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 mb-10 pt-24">
      <div className="gap-3 flex flex-col items-center w-full lg:mx-36">
        <EditJobForm job={job} jobId={params?.jobId} />
      </div>
    </div>
  );
};

export default JobPage;
