import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, ReactNode } from "react";
import { RiDashboardFill, RiFullscreenLine } from "react-icons/ri";
import { BiListUl, BiSolidCalculator } from "react-icons/bi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

type CashierNavbarProps = {
  children: ReactNode;
};
const CashierNavbar = () => {
  const userImageUrl = "https://example.com/path/to/user-image.png";
  const userName = "John Doe";
  const router = useRouter();
  const handleNavigateToUserProfile = () => {
    router.push("/user-profile");
  };

  return (
    <div
      className={
        "h-18 container flex max-w-full items-center border-b-2 bg-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2"
      }
    >
      <h1 className="font-bold">Company Name</h1>
      <div className="grow">
        <div className="flex  cursor-pointer items-center justify-center gap-2 md:gap-8">
          <a href="/Sales/Sales" className="hover:text-white">
            Sales List
          </a>
          <a href="#" className="hover:text-white">
            Invoice
          </a>
          <a href="/Products/Products" className="hover:text-white">
            Products List
          </a>
        </div>
      </div>
      <div className="flex-grow"></div>
      {/* Left buttons */}
      <div className="flex items-center space-x-4">
        <Popup
          className=""
          trigger={
            <button id="hold">
              <div
                className="relative inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
                title="Hold List"
              >
                <BiListUl size={20} />
                <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
            </button>
          }
          position="bottom center"
        >
          <div className="flex-cols-1 lg:grid-cols-0 flex justify-center gap-4 px-4 pb-2 pt-4 lg:h-[70vh]">
            <div className="rounded bg-white p-4 shadow lg:col-span-4 ">
              <div className="mx-widthauto container w-full px-4 py-16 pt-4">
                <h1 className="mb-8 font-bold">Hold List</h1>
                <div className="w-full overflow-x-auto">
                  <table className="w-full rounded shadow-lg">
                    <thead>
                      <tr>
                        <th className="px-4 text-left">ID</th>
                        <th className="px-4 text-left">Date</th>
                        <th className="px-4 text-left">Ref Id</th>
                        <th className="px-4 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">B7845</td>
                        <td className="px-4 py-2">14/04/2023</td>
                        <td className="px-4 py-2">445354354</td>
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
            </div>
          </div>
        </Popup>

        <Link href="/register">
          <div
            className="inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            title="Calculator"
          >
            <BiSolidCalculator size={20} />
          </div>
        </Link>
        <Link href="/fullScreen">
          <div
            className="inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            title="Full Screen"
          >
            <RiFullscreenLine size={20} />
          </div>
        </Link>
        <Link href="/dashboard">
          <div
            className="inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            title="Dashboard"
          >
            <RiDashboardFill size={20} />
          </div>
        </Link>
      </div>
      <div className="w-4"></div> {/* Empty div for space */}
      <div className="flex flex-col items-center">
        {/* User Image */}
        <img
          src={userImageUrl}
          alt="User"
          className="h-6 w-6 cursor-pointer rounded-full"
        />
        {/* User Menu */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={`p-2 text-white ${open ? "text-gray-700" : ""}`}
              >
                {userName}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleNavigateToUserProfile}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          Register Details
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleNavigateToUserProfile}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          Close Register
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleNavigateToUserProfile}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          Log Out
                        </button>
                      )}
                    </Menu.Item>
                    {/* Add more menu items as needed */}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default CashierNavbar;
