import React from "react";
import NewJobForm from "./NewJobForm";

const NewJobPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 mb-10 pt-24">
      <div className="gap-3 flex flex-col items-center w-full lg:mx-36">
        <NewJobForm />
      </div>
    </div>
  );
};

export default NewJobPage;
