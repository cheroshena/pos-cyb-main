import React from "react";
import { BiWorld } from "react-icons/bi";
import {
  FaEdit,
  FaEye,
  FaFileInvoice,
  FaPrint,
  FaTrash,
  FaUndo,
} from "react-icons/fa";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const SalesInvoice = () => {
  return (
    <div className="min-h-screen min-w-fit bg-gray-100">
      <Dash_header />

      <div className="flex flex-grow">
        <Admin_Sidebar />

        <div className="w-full py-7 pl-4 pr-8">
          <h1 className="mb-4 block font-bold uppercase tracking-wide">
            Invoice
          </h1>

          <div className="lg:grid-cols-0 grid pb-2 lg:h-[40vh]">
            <div className="w-full justify-between rounded-lg border bg-white p-4">
              <div className="flex items-center justify-between border-b p-3">
                <h1 className="flex text-xl font-semibold">
                  <BiWorld className="mt-1 text-xl" />
                  Sales Invoice
                </h1>
                <p className="text-m">
                  <span className="font-semibold">Date:</span>
                  <span className="px-2">September 1, 2023</span>
                </p>
              </div>

              <div className="-mx-3 mb-6 flex flex-wrap py-2">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                  <h2 className="font-serif">From:</h2>
                  <p className="font-semibold">Company Name</p>
                  <p className="">
                    Address
                    <br />
                    Phone:
                    <br />
                    Email:
                  </p>
                </div>

                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                  <h2 className="font-serif">Customer:</h2>
                  <p className="font-semibold">Customer Name</p>
                  <p className="">Address</p>
                </div>

                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                  <p className="font-semibold">
                    Invoice No
                    <br />
                    Sales Status:
                    <br />
                    Reference No:
                  </p>
                </div>
              </div>

              <div className="lg:grid-cols-0 grid  pb-2 pt-4  ">
                <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left font-semibold">
                          #
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Item Name
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Unit Price
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Quantity
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Net Cost
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Tax
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Tax Amount
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Discount
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Discount Amount
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Unit Cost
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold">
                          Total Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-4 border-gray-200" />
              <div className="flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row ">
                {/* Left side (Table) */}
                <div></div>
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
                          <td className="border-b py-2 pr-4">
                            Discount on All
                          </td>
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
                  <form className="'col-span-1 w-full overflow-auto rounded-lg border bg-white p-4 ">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border px-4 py-2 text-left font-semibold">
                            #
                          </th>
                          <th className="border px-4 py-2 text-left font-semibold">
                            Date
                          </th>
                          <th className="border px-4 py-2 text-left font-semibold">
                            Payment Type
                          </th>
                          <th className="border px-4 py-2 text-left font-semibold">
                            Payment note
                          </th>
                          <th className="border px-4 py-2 text-left font-semibold">
                            Paid Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="border px-4 py-2"></td>
                          <td className="border px-4 py-2"></td>
                          <td className="border px-4 py-2"></td>
                          <td className="border px-4 py-2"></td>
                          <td className="border px-4 py-2"></td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="mb-4 flex ">
                <button className="mr-2 flex items-center rounded-lg border bg-green-500 px-4 py-2 text-white hover:bg-green-800">
                  <FaEdit className="mr-2 h-5 w-5" /> Edit
                </button>

                <button className="mr-2 flex items-center rounded-lg border bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-800">
                  <FaPrint className="mr-2 h-5 w-5" /> Print
                </button>

                <button className="mr-2 flex items-center rounded-lg border bg-blue-500 px-4 py-2 text-white hover:bg-blue-800">
                  <FaFileInvoice className="mr-2 h-5 w-5" /> POS Invoice
                </button>

                <button className="mr-2 flex items-center rounded-lg border bg-red-500 px-4 py-2 text-white hover:bg-red-800">
                  <FaUndo className="mr-2 h-5 w-5" /> Sales Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
