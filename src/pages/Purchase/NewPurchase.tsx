import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";
import SearchBar from "~/components/Utils/SearchBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewPurchase = () => {
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
    <div className="min-h-screen bg-gray-100  ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />

        <div className=" w-full py-5 pl-5">
          <form className="'col-span-1  m-4 overflow-auto rounded-lg border bg-white p-4">
            <div className=" -mx-3 mb-6 flex-wrap">
              <h1 className="block pl-2 font-extrabold uppercase ">
                New Purchase
              </h1>
            </div>

            <div className="-mx-3 mb-6 flex flex-wrap justify-center">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-state"
                >
                  Supplier Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-state"
                    required
                  >
                    <option value=""></option>
                    <option></option>
                    <option></option>
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

              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-zip"
                >
                  Purchase Date <span className="text-red-500">*</span>
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
                  required
                />
              </div>
            </div>

            <div className="-mx-3 mb-6 flex flex-wrap justify-center">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-state"
                >
                  Status <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-state"
                    required
                  >
                    <option value="">Received</option>
                    <option>Pending</option>
                    <option>Ordered</option>
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

              <div className="mb-6 w-full px-2 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-city"
                >
                  Reference No:
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-city"
                  type="text"
                  placeholder=""
                ></input>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <SearchBar />

            <div className="lg:grid-cols-0 grid  pb-2 pt-4  ">
              <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-4  text-left  font-semibold">
                        Item Name
                      </th>
                      <th className="px-4  text-left  font-semibold"> Qty</th>
                      <th className="px-4  text-left  font-semibold">
                        Purchase Price
                      </th>
                      <th className="px-4  text-left  font-semibold">Tax(%)</th>
                      <th className="px-4  text-left  font-semibold">
                        Tax Amount(%)
                      </th>
                      <th className="px-4  text-left  font-semibold">
                        Discount(%)
                      </th>
                      <th className="px-4  text-left  font-semibold">
                        Unit Cost(Rs)
                      </th>
                      <th className="px-4  text-left  font-semibold">
                        Total Amount(Rs)
                      </th>
                      <th className="px-4  text-left  font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
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

            <hr className="my-4 border-gray-200" />
            <div className="flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row ">
              {/* Left side (Table) */}
              <div className="w-full p-4 md:w-1/3 ">
                <div className="bg-gray-100 p-5 font-bold">
                  <table className="table-fixed border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-b py-2 pr-4">Sub Total</td>
                        <td className="border-b py-2">
                          <span className="text-blue-600" id="qtyData">
                            Rs.
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b py-2 pr-4">Other Charges</td>
                        <td className="border-b py-2">
                          <span className="text-blue-600" id="amountData">
                            Rs.
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b py-2 pr-4">Discount on All</td>
                        <td className="border-b py-2">
                          <span className="text-blue-600" id="discountData">
                            Rs.
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b py-2 pr-4">Round Off</td>
                        <td className="border-b py-2">
                          <span className="text-blue-600" id="discountData">
                            Rs.
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Grand Total:</td>
                        <td className="py-2">
                          <span className="text-blue-600" id="totalData">
                            Rs.
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right side (Form) */}
              <div className="w-full p-4 md:w-2/3 ">
                <form className="'col-span-1 m-4 w-full rounded-lg border bg-white p-4 ">
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                      <label
                        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                        htmlFor="grid-first-name"
                      >
                        Other charges
                      </label>
                      <input
                        className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="text"
                      ></input>
                    </div>
                    <div className="mb-6 w-full px-3 pt-6 md:mb-0 md:w-1/3">
                      <div className="relative">
                        <select
                          className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                          id="grid-state"
                        >
                          <option>None</option>
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
                  </div>

                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                      <label
                        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                        htmlFor="grid-first-name"
                      >
                        Discount on All
                      </label>
                      <input
                        className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="text"
                      ></input>
                    </div>
                    <div className="mb-6 w-full px-3 pt-6 md:mb-0 md:w-1/3">
                      <div className="relative">
                        <select
                          className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                          id="grid-state"
                        >
                          <option>Per %</option>
                          <option>Fixed</option>
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

                  <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2 ">
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                      htmlFor="grid-city"
                    >
                      Note
                    </label>
                    <textarea
                      id="message"
                      className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      placeholder="Note"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="lg:grid-cols-0 grid  px-2 pb-2 pt-4   ">
              <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
                <h1 className="mb-4 block font-bold uppercase tracking-wide">
                  Previous Payment Information:
                </h1>
                <table className="w-full ">
                  <thead>
                    <tr>
                      <th className="px-4  text-left font-semibold">Date</th>
                      <th className="px-4  text-left font-semibold">
                        Payment Type
                      </th>
                      <th className="px-4  text-left  font-semibold">
                        Payment Note
                      </th>
                      <th className="px-4  text-left  font-semibold">
                        Payment
                      </th>
                      <th className="px-4  text-left  font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row">
                          <button className="mr-2 text-blue-600">
                            <FaEye />
                          </button>
                          <button className="mr-2 text-yellow-600">
                            <FaEdit />
                          </button>
                          <button className="text-red-600">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className=" w-full p-4 md:w-2/3 ">
              <form className="'col-span-1 m-4 w-full rounded-lg border bg-white p-4 ">
                <div className="-mx-3 mb-6 flex flex-wrap">
                  <h1 className="block pl-2 font-extrabold uppercase text-black">
                    Make Payment
                  </h1>
                </div>
                <div className="-mx-3 mb-6 flex flex-wrap">
                  <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                      htmlFor="grid-first-name"
                    >
                      Amount
                    </label>
                    <input
                      className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                      id="grid-first-name"
                      type="text"
                    ></input>
                  </div>
                  <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                      htmlFor="grid-unit"
                    >
                      Payment Type
                    </label>
                    <div className="relative">
                      <select
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-state"
                      >
                        <option>Select</option>
                        <option>Cash</option>
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
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2 ">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-city"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    placeholder=""
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="mb-4 flex justify-end">
              <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white hover:bg-blue-800">
                Save
              </button>
              {/* Export Product Button */}
              <button className="mr-2 rounded-lg border bg-red-500  px-4 py-2 text-white hover:bg-red-800">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPurchase;
