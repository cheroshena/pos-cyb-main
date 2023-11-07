import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { data } from "./data";

const TopSelling = () => {
  return (
    <div className="relative m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 md:col-span-2 lg:h-[70vh]">
      <h1>Top Selling Products (Month)</h1>
      <ul>
        {data.map((order) => (
          <li
            key={order.id}
            className="hover:bg-gra-100 my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2"
          >
            <div className="mr-2 rounded-lg bg-purple-100 p-2">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p>{order.product}</p>
            </div>

            <p className="lg: text-m flex pl-10">{order.quantity}</p>

            <p className="lg: text-m flex pl-10">${order.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopSelling;
