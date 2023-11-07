import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProductForm = () => {
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
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const numericInputRegex = /^[0-9]*\.?[0-9]*$/;

  // State variables for price fields
  const [price, setPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  // Event handlers for price fields
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (numericInputRegex.test(inputValue)) {
      setPrice(inputValue);
    }
  };

  const handlePurchasePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    if (numericInputRegex.test(inputValue)) {
      setPurchasePrice(inputValue);
    }
  };

  const handleProfitMarginChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    if (numericInputRegex.test(inputValue)) {
      setProfitMargin(inputValue);
    }
  };

  const handleSalesPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    if (numericInputRegex.test(inputValue)) {
      setSalesPrice(inputValue);
    }
  };

  const handleFinalPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    if (numericInputRegex.test(inputValue)) {
      setFinalPrice(inputValue);
    }
  };

  return (
    <div>
      <form className="'col-span-1 fix m-4 overflow-auto rounded-lg border bg-white p-4">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <h1 className="block pl-2 font-extrabold uppercase ">
            Create Product
          </h1>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Product"
              required
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-state"
            >
              Brand
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option>Select</option>
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

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
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
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
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
              htmlFor="grid-unit"
            >
              Unit <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
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
              htmlFor="grid-city"
            >
              SKU
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="SKU"
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              HSN
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="HSN"
            ></input>
          </div>
        </div>
        <div className="-mx-3 mb-2 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Minimum Qty
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Lot Number
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-zip"
            >
              Expire Date
            </label>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none "
            />
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Barcode
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="Barcode"
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Description
            </label>
            <textarea
              id="message"
              className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Product Image
            </label>
            <button
              className="focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-300 focus:outline-none"
              type="button"
            >
              Choose File
            </button>
            <p className="text-xs italic text-red-500">
              Max Width/Height: 1000px * 1000px & Size: 1MB
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={price}
              onChange={handlePriceChange}
              required
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-unit"
            >
              Tax <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                required
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
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
              className=" mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Purchase Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={purchasePrice}
              onChange={handlePurchasePriceChange}
              disabled
              required
            ></input>
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Discount <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-unit"
            >
              Tax Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option value="">Select</option>
                <option>xplx</option>
                <option>jksuh</option>
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
              className="relative mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Profit Margin (%)
              <span
                className="absolute h-4 w-4 -translate-y-1/4 translate-x-1/4 transform justify-center rounded-full bg-red-500 text-center font-serif text-xs lowercase text-white"
                onMouseEnter={() => setShowPopup2(true)}
                onMouseLeave={() => setShowPopup2(false)}
              >
                i
              </span>
              {showPopup2 && (
                <div className="popup-box absolute left-0 top-8 rounded border border-gray-300 bg-white p-4 shadow-md">
                  Based on Purchased Price
                </div>
              )}
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder=""
              value={profitMargin}
              onChange={handleProfitMarginChange}
            />
          </div>
        </div>

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              sales Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={salesPrice}
              onChange={handleSalesPriceChange}
              required
            ></input>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Final Price <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              value={finalPrice}
              onChange={handleFinalPriceChange}
              disabled
              required
            ></input>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className=" -mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Current Opening stock
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
              disabled
            ></input>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="relative mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Adjust stock
              <span
                className="absolute h-4 w-4 -translate-y-1/4 translate-x-1/4 transform justify-center rounded-full bg-red-500 text-center font-serif text-xs lowercase text-white"
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                i
              </span>
              {showPopup && (
                <div className="popup-box absolute left-0 top-8 rounded border border-gray-300 bg-white p-4 shadow-md">
                  Add(+) or Deduct(-) Stock <br /> if want to deduct then should
                  use minus symbol.(Eg: -10.00)
                </div>
              )}
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-city"
              type="text"
              placeholder="$"
            />
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
              htmlFor="grid-city"
            >
              Adjustment Note
            </label>
            <textarea
              id="message"
              className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              placeholder=""
            ></textarea>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

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
  );
};

export default AddProductForm;
