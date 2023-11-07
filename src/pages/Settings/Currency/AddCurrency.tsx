import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const AddCurrency = () => {
  return (
    <div className="min-h-screen min-w-max bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full">
          <form className="'col-span-1 m-4 overflow-auto rounded-lg bg-white p-4 ">
            <div className="-mx-3 mb-6 flex flex-wrap">
              <h1 className="block pl-2 font-extrabold uppercase text-black">
                New Currency
              </h1>
            </div>
            <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Currency Name <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                required
              ></input>
            </div>
            <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Currency Code
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
              ></input>
            </div>
            <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Currency Symbol <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                required
              ></input>
            </div>

            <hr className="my-4 border-gray-200" />
            <div className="mb-4 flex justify-center  ">
              <button className="mr-2 rounded-lg border bg-green-500 px-10 py-2 text-white hover:bg-green-800">
                Save
              </button>
              <button className="mr-2 rounded-lg border bg-red-500 px-10 py-2 text-white hover:bg-red-800">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddCurrency;
