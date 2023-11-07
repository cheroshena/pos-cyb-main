import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import CreateSalesReturnsForm from "~/components/Sales/CreateSalesReturnsForm";

const CreateSalesReturns = () => {
  return (
    <div className="min-h-screen bg-gray-100  ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className=" w-full py-5 pl-5 ">
          <CreateSalesReturnsForm />
        </div>
      </div>
    </div>
  );
};

export default CreateSalesReturns;
