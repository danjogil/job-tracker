import React from "react";
import NewJobForm from "./NewJobForm";

const NewJobPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:mx-24 mb-10 pt-24">
      <div className="gap-3 flex flex-col w-full">
        <h2 className="font-bold text-xl mb-3 lg:text-2xl">Add a new job</h2>
        <NewJobForm />
      </div>
    </div>
  );
};

export default NewJobPage;
