import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import AddProductForm from "~/components/Products/AddProductForm";

const CreateProducts = () => {
  return (
    <div className="min-h-screen min-w-fit bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className=" w-full py-5 pl-5 ">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
