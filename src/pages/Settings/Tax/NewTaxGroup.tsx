import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const NewTaxGroup = () => {
  return (
    <div className="min-h-screen min-w-max bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full">
          <form className="'col-span-1 m-4 overflow-auto rounded-lg bg-white p-4 ">
            <div className="-mx-3 mb-6 flex flex-wrap">
              <h1 className="block pl-2 font-extrabold uppercase text-black">
                New Tax
              </h1>
            </div>
            <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Tax Name <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                required
              ></input>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Sub Taxes <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  <option value="">-Select</option>
                  <option>001</option>
                  <option>No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Tax Percentage <span className="text-red-500">*</span>
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
export default NewTaxGroup;
