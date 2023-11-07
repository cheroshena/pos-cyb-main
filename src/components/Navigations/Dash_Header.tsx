import React, { ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiFullscreenLine } from "react-icons/ri";
type DashHeaderProps = {
  children: ReactNode;
};
const Dash_header = () => {
  const userImageUrl = "https://example.com/path/to/user-image.png";
  const userName = "John Doe";
  const router = useRouter();
  const handleNavigateToUserProfile = () => {
    router.push("/user-profile");
  };
  return (
    <div
      className={
        "bg-white-100 bg-white-b h-18 container flex max-w-full items-center border-b-2 bg-white px-6 py-2"
      }
    >
      <h1 className="font-bold">Company Name</h1>
      <div className="flex-grow"></div>
      {/* Left buttons */}
      <div className="flex items-center space-x-4">
        <Link href="POS/POS">
          <div
            className="inline-flex w-[80px] cursor-pointer items-center justify-center rounded-lg bg-gray-100 p-2 font-bold text-gray-500 hover:bg-gray-200"
            title="POS"
          >
            POS
          </div>
        </Link>
        <Link href="/">
          <div
            className="inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            title="Full Screen"
          >
            <RiFullscreenLine size={20} />
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
                className={`p-2 text-gray-500 ${open ? "text-gray-700" : ""}`}
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
export default Dash_header;
