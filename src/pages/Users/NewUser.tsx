import { useRouter } from "next/router";
import React, { useState } from "react";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const NewUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roleError, setRoleError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = () => {
    // Check if the "Name" field is empty
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

    // Check if the "Role" field is empty
    if (role.trim() === "") {
      setRoleError("Role is a required field.");
      return;
    }

    // Check if the "Password" field is empty
    if (password.trim() === "") {
      setPasswordError("Password is a required field.");
      return;
    }

    // Check if the "Confirm Password" field is empty
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is a required field.");
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    // If the "Name" field is not empty and all other validations pass,
    // you can proceed with form submission
    // You can add logic to send the form data to your server or perform any other actions here
    // Reset error messages
    setErrorMessage("");
    setRoleError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const userImageUrl = "https://example.com/path/to/user-image.png";

  const router = useRouter();
  const handleNavigateToUserProfile = () => {
    router.push("/user-profile");
  };

  return (
    <div className="bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />

        <form className="'col-span-1 m-4 w-full overflow-auto rounded-lg border bg-white p-4">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <h1 className="block pl-2 font-extrabold uppercase text-black">
              Add/Update
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
            <p className="text-xs text-red-500">{ errorMessage}</p>
          </div>

          <div className="-mx-3 mb-6 flex flex-wrap">
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
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                Role <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>-Select-</option>
                  <option>Sales Person</option>
                  <option>Cashier</option>
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
              <p className="text-xs text-red-500">{roleError}</p>
            </div>
          </div>

          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-xs text-red-500">{confirmPasswordError}</p>
            </div>
          </div>

          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                Profile Picture
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

              {/* User Image */}
              <img
                src={userImageUrl}
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

          
        </form>
      </div>
    </div>
  );
};
export default NewUser;
