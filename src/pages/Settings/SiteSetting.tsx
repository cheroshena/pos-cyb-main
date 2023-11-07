import router, { useRouter } from "next/router";
import React from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const SiteSettings = () => {
  const companyProfileUrl = "https://example.com/path/to/user-image.png";

  const handleNavigateToCompanyProfile = () => {
    router.push("/Company-Profile");
  };

  return (
    <div className="bg-gray-100   ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <form className="'col-span-1 m-4 w-full overflow-auto rounded-lg border bg-white p-4">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <h1 className="block pl-2 font-extrabold uppercase text-black">
              Site Setting
            </h1>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Site Name <span className="text-red-500">*</span>
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
                Time Zone <span className="text-red-500">*</span>
              </label>
              <div className="relative flex-auto " data-te-modal-body-ref>
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  data-te-select-init data-te-container="#exampleModal"
                  data-te-select-filter="true"
                  <option value="1">One/colombo</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                </select>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Date Format <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  <option value=""></option>
                  <option>dd-mm-yyyy</option>
                  <option>mm/dd/yyyy</option>
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
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Time Format <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  <option value=""></option>
                  <option>12 Hours</option>
                  <option>24 Hours</option>
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
          </div>
          <div className=" -mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Currency <span className="text-red-500">*</span>
              </label>
              <div className="relative flex-auto " data-te-modal-body-ref>
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  data-te-select-init data-te-container="#exampleModal"
                  data-te-select-filter="true"
                  <option value="1">One/colombo</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                </select>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Currency Symbol Placement{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  <option value="">-Select-</option>
                  <option>Before Amount</option>
                  <option>After Amount</option>
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
          </div>
          <div className=" -mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              ></input>
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-800"
              >
                Enable Round Off
              </label>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Language <span className="text-red-500">*</span>
              </label>
              <div className="relative flex-auto " data-te-modal-body-ref>
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  data-te-select-init data-te-container="#exampleModal"
                  data-te-select-filter="true"
                  <option value="1">One/colombo</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                </select>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Company Logo
            </label>
            <button
              className="focus:shadow-outline rounded bg-purple-500 px-3 py-2 font-bold text-white shadow hover:bg-purple-300 focus:outline-none"
              type="button"
            >
              Choose File
            </button>
            <p className="text-xs italic text-red-500">
              Max Width/Height: 1000px * 1000px & Size: 1MB
            </p>

            {/* User Image */}
            <img
              src={companyProfileUrl}
              className="h-20 w-20 cursor-pointer  bg-blue-100"
            />
          </div>

          <hr className="my-4 border-gray-200" />
          <div className="mb-4 flex justify-center  ">
            <button className="mr-2 rounded-lg border bg-blue-500 px-10 py-2 text-white hover:bg-blue-300">
              Save
            </button>
            <button className="mr-2 rounded-lg border bg-yellow-500 px-10 py-2 text-white hover:bg-yellow-300">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SiteSettings;
