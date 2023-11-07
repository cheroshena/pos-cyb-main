import { useRouter } from "next/router";
import React, { useState } from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const CompannyProfile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const UPICodeUrl = "https://example.com/path/to/user-image.png";
  const router = useRouter();
  const handleNavigateToUPICode = () => {
    router.push("/upi-code");
  };

  const companyProfileUrl = "https://example.com/path/to/user-image.png";

  const handleNavigateToCompanyProfile = () => {
    router.push("/Company-Profile");
  };

  const handleSave = () => {
    if (name.trim() === "") {
      setErrorMessage("Name is a required field.");
      return;
    }

    // Check if the "Phone" field contains only numbers
    if (!/^\d+$/.test(phone)) {
      setErrorMessage("Phone number must contain only numbers.");
      return;
    }

    if (
      email &&
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)
    ) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // If the "Name" field is not empty, you can proceed with form submission
    // You can add logic to send the form data to your server or perform any other actions here
    // Reset error message
    setErrorMessage("");
  };

  return (
    <div className="bg-gray-100   ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />

        <form className="'col-span-1 m-4 w-full overflow-auto rounded-lg border bg-white p-4">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <h1 className="block pl-2 font-extrabold uppercase text-black">
              Company Profile
            </h1>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="required: mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                value={phone}
                onChange={(e) => {
                  // Allow only numeric input for the phone field
                  const numericInput = e.target.value.replace(/\D/g, "");
                  setPhone(numericInput);
                }}
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                GST Number
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
                htmlFor="grid-first-name"
              >
                VAT Number
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
                htmlFor="grid-first-name"
              >
                PAN Number
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
              ></input>
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Website
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
                htmlFor="grid-first-name"
              >
                UPI Id:
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
                htmlFor="grid-city"
              >
                UPI Code
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
                src={UPICodeUrl}
                className="h-20 w-20 cursor-pointer  bg-blue-100"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Country
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option></option>
                  <option>Sri Lanka</option>
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
                State
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option>-Select-</option>
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
                htmlFor="grid-first-name"
              >
                City
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
              ></input>
            </div>
          </div>
          <div className=" -mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                Postcode
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                type="text"
                placeholder=""
              ></input>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                Address
              </label>
              <textarea
                id="message"
                className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div className=" -mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3 ">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                Bank Details
              </label>
              <textarea
                id="message"
                className="block w-full rounded border border-gray-200 bg-gray-200 p-2.5 px-4 py-3 text-sm leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder=""
              ></textarea>
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
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
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="mb-4 flex justify-center">
            <button
              className="mr-2 rounded-lg border bg-blue-500 px-10 py-2 text-white hover:bg-blue-300"
              type="button"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="mr-2 rounded-lg border bg-yellow-500 px-10 py-2 text-white hover:bg-yellow-300"
              type="button"
            >
              Close
            </button>
          </div>
          {/* Display error message */}
          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default CompannyProfile;
