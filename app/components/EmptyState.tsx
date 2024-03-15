"use client";

import { useRouter } from "next/navigation";

const EmptyState = () => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
    "
    >
      <h1 className="font-semibold text-lg">
        No jobs with this ID were found.
      </h1>

      <button
        className="btn btn-outline w-32"
        onClick={() => router.push("/dashboard")}
      >
        Go Back
      </button>
    </div>
  );
};

export default EmptyState;
