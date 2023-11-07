import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const NewExpense = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    // Handle date change logic here
    if (date) {
      setStartDate(date);
    }
  };
  return (
    <div className="bg-gray-100   ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <form className="'col-span-1 m-8 overflow-auto rounded-lg border bg-white p-4 md:w-1/2">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <h1 className="block pl-2 font-extrabold uppercase text-black">
              Create Expense
            </h1>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2 ">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-zip"
              >
                Expense Date <span className="text-red-500">*</span>
              </label>

              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
              />
            </div>

            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  required
                >
                  <option value=""></option>
                  <option>mng</option>
                  <option>lmlkkuh</option>
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

          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Expense For: <span className="text-red-500">*</span>
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
                htmlFor="grid-first-name"
              >
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                required
              ></input>
            </div>
          </div>

          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Reference No:
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
              ></input>
            </div>

            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Reference No:
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
              ></input>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                Note
              </label>
              <textarea
                id="message"
                className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder="Payment Note"
              ></textarea>
            </div>
          </div>
          <div className="mb-4 flex justify-end  ">
            <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white">
              Save
            </button>
            {/* Export Product Button */}
            <button className="mr-2 rounded-lg border bg-yellow-500 px-4 py-2 text-white">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewExpense;
