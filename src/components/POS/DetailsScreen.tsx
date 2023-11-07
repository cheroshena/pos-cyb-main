import React, { Fragment, useState } from "react";
import {
  FaClone,
  FaMoneyBillWave,
  FaShop,
  FaTrash,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import { FaRegPauseCircle, FaUndo } from "react-icons/fa";
import Modal from "../Modals/Modal";

const DetailsScreen = () => {
  const [customerName, setCustomerName] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <Fragment>
      <div className="lg:grid-cols-0 grid   ">
        <div className="w-full justify-between rounded-lg border bg-white p-4 ">
          <div className="flex pb-8 ">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                type="text"
                className="w-full rounded-l border py-2 pl-10 pr-4"
                placeholder="Customer"
              />
            </div>
            <button className="relative rounded-r bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
              <span className="absolute inset-y-0 left-0 flex items-center p-2">
                <FaUserPlus className="text-gray-800" />
              </span>
            </button>
            <div className="flex-auto pl-10" data-te-modal-body-ref>
              <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaShop className="text-gray-400" />
                </span>
                <select
                  className="block w-full appearance-none overflow-auto rounded border border-gray-200 bg-gray-200 py-2 pl-10 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  {/* Placeholder option */}
                  <option value="" disabled selected>
                    Warehouse
                  </option>
                  {/* Other options */}
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-60 w-full overflow-auto rounded bg-gray-100 p-4 shadow ">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 text-left">Product</th>
                  <th className="px-4 text-left">Stock</th>
                  <th className="px-4 text-left">Qty</th>
                  <th className="px-4 text-left">Price</th>
                  <th className="px-4 text-left">Sub Total</th>
                  <th className="px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">
                    <button className="text-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Tax Input */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {/* Input fields */}
            <div className="col-span-1">
              <div className="p-2">
                <input
                  type="text"
                  className="w-full rounded border px-4 py-2"
                  placeholder="Tax"
                />
              </div>

              <div className="p-2">
                <input
                  type="text"
                  className="w-full rounded border px-4 py-2"
                  placeholder="Discount"
                />
              </div>

              <div className="p-2">
                <input
                  type="text"
                  className="w-full rounded border px-4 py-2"
                  placeholder="Voucher Code"
                />
              </div>
              <div className="p-2">
                <input
                  type="text"
                  className="w-full rounded border px-4 py-2"
                  placeholder="Shipping"
                />
              </div>
            </div>
            {/* Card to display data */}
            <div
              className="col-span-1 rounded bg-gray-100 shadow"
              style={{ maxHeight: "8rem" }}
            >
              <div className="p-5 font-bold">
                <table className="table-fixed">
                  <tbody>
                    <tr>
                      <td className="pr-4">Total QTY:</td>
                      <td>
                        <span className="text-blue-600" id="qtyData">
                          Value1
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-4">Total Amount:</td>
                      <td>
                        <span className="text-blue-600" id="amountData">
                          Value2
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-4">Total Discount:</td>
                      <td>
                        <span className="text-blue-600" id="discountData">
                          Value3
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-4">Grand Total:</td>
                      <td>
                        <span className="text-blue-600" id="totalData">
                          Value4
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-4 flex justify-center">
            <button className="mr-2 flex items-center rounded-lg border bg-orange-500 px-6 py-2 text-white hover:bg-orange-800">
              <FaRegPauseCircle className="mr-2" />
              Hold
            </button>

            <button
              className="mr-2 flex items-center rounded-lg border bg-purple-500 px-6 py-2 text-white hover:bg-purple-800"
              onClick={() => setShowModal2(true)}
            >
              <FaClone className="mr-2" />
              Multiple
            </button>

            <button
              className="mr-2 flex items-center rounded-lg border bg-green-500 px-6 py-2 text-white hover:bg-green-800"
              onClick={() => setShowModal(true)}
            >
              <FaMoneyBillWave className="mr-2" />
              Pay Now
            </button>

            <button className="mr-2 flex items-center rounded-lg border bg-red-500 px-6 py-2 text-white hover:bg-red-800">
              <FaUndo className="mr-2" />
              Reset
            </button>
          </div>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row ">
          {/* Left side (Table) */}
          <div className="w-full p-4 md:w-1/3 ">
            <div className="bg-gray-100 p-5 font-bold">
              <table className="table-fixed border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Products:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="qtyData">
                        Value1
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Amount:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="amountData">
                        Value2
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Order Tax:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Discount:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Shipping:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Grand Total:</td>
                    <td className="py-2">
                      <span className="text-blue-600" id="totalData">
                        Value4
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="w-full p-4 md:w-2/3 ">
            <h2 className="mb-4 text-xl font-bold">Make Payments</h2>
            <form className="'col-span-1 m-4 w-full rounded-lg border bg-white p-4 ">
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-first-name"
                  >
                    Received Amount
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
                    Total Amount
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-first-name"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-first-name"
                  >
                    Change Return
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-first-name"
                    type="text"
                  ></input>
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
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </form>

            <div className="mb-4 flex justify-end  ">
              <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                Save
              </button>
              {/* Export Product Button */}
              <button className="mr-2 rounded-lg border bg-green-500 px-4 py-2 text-white hover:bg-green-700">
                Save & Print
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row">
          {/* Left side (Table) */}
          <div className="w-full bg-gray-100 p-4 md:w-1/3">
            <div className="p-5 font-bold">
              <table className="table-fixed border-collapse">
                <tbody>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Products:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="qtyData">
                        Value1
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Amount:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="amountData">
                        Value2
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Order Tax:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Total Discount:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 pr-4">Shipping:</td>
                    <td className="border-b py-2">
                      <span className="text-blue-600" id="discountData">
                        Value3
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Grand Total:</td>
                    <td className="py-2">
                      <span className="text-blue-600" id="totalData">
                        Value4
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-4 flex justify-end">
              <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                Save
              </button>
              {/* Save & Print Button */}
              <button className="mr-2 rounded-lg border bg-green-500 px-4 py-2 text-white hover:bg-green-700">
                Save & Print
              </button>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="w-full p-4 md:w-2/3 ">
            <h2 className="mb-4 text-xl font-bold">Make Payments</h2>
            <form className="'col-span-1 m-4 w-full rounded-lg border bg-white p-4 ">
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-state"
                  >
                    Payment Type
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      id="grid-state"
                    >
                      <option>Cash</option>
                      <option>Cheques</option>
                      <option>Crypto</option>
                      <option>Other</option>
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
                    htmlFor="grid-first-name"
                  >
                    Received Amount
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-first-name"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-first-name"
                  >
                    Total Amount
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
                    Change Return
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-first-name"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="mb-6  w-full px-3 md:mb-0 ">
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-city"
                >
                  Note
                </label>
                <textarea
                  id="message"
                  className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  placeholder="Description"
                ></textarea>
              </div>
            </form>
            <div className="mb-4 flex justify-center  ">
              <button className="mr-2 rounded-lg border bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                Add Payment Row
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default DetailsScreen;
