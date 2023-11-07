import { useState, useEffect, useRef } from "react";

const DropdownComponent: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const closeDropdown = (event: MouseEvent) => {
    if (
      !buttonRef.current?.contains(event.target as Node) &&
      !dropdownRef.current?.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <td className="px-4 py-2">
      <div className="relative inline-block text-left">
        <button
          ref={buttonRef}
          id="dropdownDefaultButton"
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center rounded-lg  bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 "
        >
          Action
          <svg
            className="ml-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            id="dropdown"
            className="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm dark:text-gray-200"
              aria-labelledby="Action"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Pay Due Payments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Pay Return Due
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <style jsx>{`
        .absolute {
          position: absolute;
        }
      `}</style>
    </td>
  );
};
export default DropdownComponent;
