import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import NewSupplierForm from "~/components/People/NewSupplierForm";

const NewSupplier = () => {
  return (
    <div className="bg-gray-100   ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <NewSupplierForm />
          <div className="lg:grid-cols-0 grid   pb-2 pt-4  lg:h-[40vh]">
            <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
              <h1 className="mb-4 font-bold">Opening Balance Payments</h1>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 text-left">Payment Date</th>
                    <th className="px-4 text-left">Payment</th>
                    <th className="px-4 text-left">Payment Type</th>
                    <th className="px-4 text-left">Payment Note</th>
                    <th className="px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      <button className="mr-2 text-yellow-600">
                        <FaEdit />
                      </button>
                      <button className="text-red-600">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewSupplier;
