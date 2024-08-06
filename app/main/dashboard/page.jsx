import Dashboard from "@/app/components/Dashboard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col  md:p-5 w-full h-full bg-gray-50 ss:p-9 sm:p-12">
      <Dashboard />
    </div>
  );
  //    <Dashboard />;
};

export default page;
