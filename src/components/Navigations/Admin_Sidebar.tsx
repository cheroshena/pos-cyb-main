import React, { useState } from "react";
import {
  BsChevronBarDown,
  BsSearch,
  BsGridFill,
  BsShieldLock,
  BsChatSquare,
} from "react-icons/bs";

import { RiDashboardFill, RiSettings2Fill, RiShieldUserLine } from "react-icons/ri";

import {
  FaAnglesRight,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa6";
import {
  BiBarcode,
  BiPurchaseTagAlt,
  BiSolidCart,
  BiSolidCartAdd,
  BiSolidReport,
  BiSolidUserPlus,
} from "react-icons/bi";

import { FaCaretLeft, FaSms } from "react-icons/fa";

import { ImStatsBars } from "react-icons/im";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineCategory,
  MdOutlinePayments,
} from "react-icons/md";

import { SiBrandfolder } from "react-icons/si";

import {
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

import { TbCurrencyShekel, TbReportAnalytics } from "react-icons/tb";
import Link from "next/link";

const Admin_Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const Menus = [
    {
      title: "Dashboard",
      icon: <RiDashboardFill />,
      onclick: "/Dashboards/Admin_dashboard",
    },
    {
      title: "Products",
      mlink: "/Products/Products",
      submenu: true,
      submenuItems: [
        {
          title: "Products",
          icon: <BiSolidCartAdd />,
          link: "/Products/Products",
        },
        {
          title: "Categories",
          icon: <MdOutlineCategory />,
          link: "/Products/Categories",
        },
        {
          title: "Brands",
          icon: <SiBrandfolder />,
          link: "/Products/Brands",
        },
        {
          title: "Print Barcode",
          icon: <BiBarcode />,
          link: "/Products/PrintBarcode",
        },
      ],
    },
    {
      title: "Sales",
      icon: <ImStatsBars />,
      submenu: true,
      submenuItems: [
        {
          title: "Sales",
          icon: <AiOutlineBarChart />,
          link: "/Sales/Sales",
        },
        {
          title: "Sales Returns",
          icon: <AiOutlineUnorderedList />,
          link: "/Sales/SalesReturns",
        },
      ],
    },
    {
      title: "Purchase",
      icon: <BsGridFill />,
      submenu: true,
      submenuItems: [
        {
          title: "Purchases",
          icon: <BiPurchaseTagAlt />,
          link: "/Purchase/PurchaseList",
        },
        {
          title: "Purchases Returns",
          icon: <AiOutlineUnorderedList />,
          link: "/Purchase/PurchaseReturnsList",
        },
      ],
    },
    {
      title: "Expenses",
      icon: <FaMoneyBillTrendUp />,
      submenu: true,
      submenuItems: [
        {
          title: "Expenses",
          icon: <FaMoneyBillTransfer />,
          link: "/Expenses/ExpensesList",
        },
        {
          title: "Expenses Categories",
          icon: <AiOutlineUnorderedList />,
          link: "/Expenses/CategoryList",
        },
      ],
    },
    {
      title: "Suppliers",
      icon: <FaUserPlus />,
      submenu: true,
      submenuItems: [
        {
          title: "New Supplier",
          icon: <BiSolidUserPlus />,
          link: "/Suppliers/NewSupplier",
        },
        {
          title: "Suppliers List",
          icon: <AiOutlineUnorderedList />,
          link: "/Suppliers/SuppliersList",
        },
      ],
    },
    {
      title: "Customers",
      icon: <FaUsers />,
      submenu: true,
      submenuItems: [
        {
          title: "New Customer",
          icon: <BiSolidUserPlus />,
          link: "/Customers/NewCustomer",
        },
        {
          title: "Customers List",
          icon: <AiOutlineUnorderedList />,
          link: "/Customers/CustomersList",
        },
      ],
    },
    {
      title: "Users",
      icon: <FaUserCheck />,
      submenu: true,
      submenuItems: [
        {
          title: "New User",
          icon: <BiSolidUserPlus />,
          link: "/Users/NewUser",
        },
        {
          title: "Users List",
          icon: <AiOutlineUnorderedList />,
          link: "/Users/UsersList",
        },
      ],
    },
    {
      title: "Reports",
      icon: <BiSolidReport />,
      submenu: true,
      submenuItems: [
        {
          title: "Sales Report",
          icon: <TbReportAnalytics />,
          link: "/Reports/SalesReport",
        },
        {
          title: "Sales Returns",
          icon: <TbReportAnalytics />,
          link: "/Reports/SalesReturnReport",
        },
        {
          title: "Purchase Report",
          icon: <TbReportAnalytics />,
          link: "/Reports/PurchaseReport",
        },
        {
          title: "Purchase Returns",
          icon: <TbReportAnalytics />,
          link: "/Reports/PurchaseReturnReport",
        },
      ],
    },
    {
      title: "SMS",
      icon: <FaSms />,
      submenu: true,
      submenuItems: [
        { title: "New SMS", icon: <AiOutlineMail />, link: "/SMS/SendSMS" },
        {
          title: "SMS List",
          icon: <AiOutlineUnorderedList />,
          link: "/SMS/TemplatesList",
        },
        { title: "SMS API", icon: <BsChatSquare />, link: "/SMS/SendSMS" },
      ],
    },
    {
      title: "Promotions",
      icon: <ImStatsBars />,
      submenu: true,
      submenuItems: [
        {
          title: "Discounts",
          icon: <AiOutlineBarChart />,
          link: "/Promotions/Discounts",
        },
        {
          title: "New Discounts",
          icon: <AiOutlineBarChart />,
          link: "/Promotions/NewDiscount",
        },
        {
          title: "Vouchers",
          icon: <AiOutlineUnorderedList />,
          link: "/Promotions/Vouchers",
        },
        {
          title: "New Vouchers",
          icon: <AiOutlineUnorderedList />,
          link: "/Promotions/NewVoucher",
        },
      ],
    },
    {
      title: "Settings",
      icon: <RiSettings2Fill />,
      submenu: true,
      submenuItems: [
        {
          title: "Company Profile",
          icon: <CgProfile />,
          link: "/Settings/CompanyProfile",
        },
        {
          title: "Currency List",
          icon: <TbCurrencyShekel />,
          link: "/Settings/Currency/CurrencyList",
        },
        {
          title: "Units List",
          icon: <AiOutlineUnorderedList />,
          link: "/Settings/Units/UnitList",
        },
        {
          title: "Tax List",
          icon: <AiOutlineUnorderedList />,
          link: "/Settings/Tax/TaxList",
        },
        {
          title: "Payments",
          icon: <MdOutlinePayments />,
          link: "/Settings/Payments/PaymentTypes",
        },
        {
          title: "Site Settings",
          icon: <MdOutlineAdminPanelSettings />,
          link: "/Settings/SiteSetting",
        },
        {
          title: "Change Password",
          icon: <BsShieldLock />,
          link: "/Settings/ChangePassword",
        },
      ],
    },
  ];

  const [submenuOpen, setSubmenuOpen] = useState(
    Array(Menus.length).fill(false),
  );

  return (
    <div className="flex ">
      <div
        className={`min-h-screen bg-violet-100 p-5 pt-8 
        ${open ? "w-52" : "w-20"} relative duration-300`}
      >
        <FaCaretLeft
          className={`top-8 absolute -right-2 cursor-pointer rounded-full border border-purple-950 bg-white text-2xl text-purple-800
            ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <RiShieldUserLine
            className={`float-left mr-2 block cursor-pointer rounded bg-purple-800 p-3 text-5xl text-white duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-l origin-left font-medium text-black duration-300 ${
              !open && "scale-0"
            }`}
          >
            Admin Dashboard
          </h1>
        </div>
        <div
          className={`mt-6 flex items-center rounded-md bg-violet-200 
          ${!open ? "px-2.5" : "px-4"} py-2`}
        >
          <BsSearch
            className={`text-m float-left block cursor-pointer text-gray-500 
            ${open && "mr-2"}`}
          />

          <input
            type="search"
            placeholder="Search"
            className={`w-full bg-transparent text-base focus:outline-none 
            ${!open && "hidden"}`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <React.Fragment>
              <li
                key={index}
                className="mt-2 flex cursor-pointer items-center
                gap-x-4 rounded-md p-2 text-sm font-semibold 
                text-gray-600 hover:bg-violet-200"
              >
                {/* <Link href={menu.mlink} className="slider_link">  */}
                <a className="slider_link">
                  <span className="float-left block text-xl" title={menu.title}>
                    {menu.icon ? menu.icon : <BiSolidCart />}
                  </span>
                </a>

                <span
                  className={`flex-1 text-base font-medium duration-200 
                ${!open && "hidden"}`}
                  onClick={() => {
                    const newSubmenuOpen = [...submenuOpen];
                    newSubmenuOpen[index] = !newSubmenuOpen[index];
                    setSubmenuOpen(newSubmenuOpen);
                  }}
                >
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronBarDown
                    className={`${submenuOpen[index] ? "rotate-180" : ""}`}
                  />
                )}
                {/* </Link>  */}
              </li>
              {menu.submenu && submenuOpen[index] && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex, link) => (
                    <li
                      key={subIndex}
                      className="mt-2 flex cursor-pointer items-center gap-x-4
                       rounded-md bg-gray-100 p-2 px-5 text-sm font-semibold 
                      text-gray-600 hover:bg-violet-200"
                    >
                      <Link href={submenuItem.link} className="slider_link">
                        <span
                          className="text-m float-left  mr-2 block "
                          title={submenuItem.title}
                        >
                          {submenuItem.icon ? (
                            submenuItem.icon
                          ) : (
                            <FaAnglesRight />
                          )}
                        </span>

                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Admin_Sidebar;
