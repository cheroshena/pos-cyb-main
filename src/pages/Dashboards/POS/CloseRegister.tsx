import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const CloseRegister = () => {
  return (
    <div className=" flex-cols-1 flex justify-center gap-4 px-4 pb-2 pt-4 lg:grid-cols-4">
      <div className="w-1/2 overflow-auto  rounded bg-gray-100 p-4 shadow  lg:col-span-4">
        <div className="container mx-auto px-4 py-16 pt-4">
          <h1 className="mb-8 font-bold">Close Register </h1>
          <div className="overflow-x-auto ">
            <table className="w-full rounded shadow-lg">
              <tbody>
                <tr>
                  <td className="border border-gray-300 pr-4">Cash in Hand</td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="qtyData">
                      Value1
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 pr-4">Cash</td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="qtyData">
                      Value1
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 pr-4">Cheques</td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="amountData">
                      Value2
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 pr-4">
                    Bank Transfers
                  </td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="discountData">
                      Value3
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 pr-4">Crypto</td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="qtyData">
                      Value1
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 pr-4">Other</td>
                  <td className="border border-gray-300">
                    <span className="text-blue-600" id="totalData">
                      Value4
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container mx-auto px-4 pt-4 "></div>
          <table className="w-full rounded shadow-lg">
            <tbody>
              <tr>
                <td className="border border-gray-300 pr-4">Total Sales</td>
                <td className="border border-gray-300">
                  <span className="text-blue-600" id="amountData">
                    Value2
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 pr-4">Total Refunds</td>
                <td className="border border-gray-300">
                  <span className="text-blue-600" id="discountData">
                    Value3
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 pr-4">Total Payments</td>
                <td className="border border-gray-300">
                  <span className="text-blue-600" id="totalData">
                    Value4
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6 w-full  px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
            htmlFor="grid-first-name"
          >
            Total Cash
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="text"
          ></input>
        </div>
        <div className="mb-6  w-full px-3 md:mb-0 ">
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
            htmlFor="grid-city"
          >
            Note
          </label>
          <textarea
            id="note"
            className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            placeholder=""
          ></textarea>
        </div>

        <div className="mb-4 flex justify-end pt-5">
          <button className="mr-2 flex items-center rounded-lg border bg-blue-500 px-6 py-2 text-white hover:bg-green-800">
            <BiArrowBack className="mr-2" />
            Back
          </button>
          <button className="mr-2 flex items-center rounded-lg border bg-orange-500 px-6 py-2 text-white hover:bg-orange-800">
            <FaRegWindowClose className="mr-2" />
            Close Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default CloseRegister;
