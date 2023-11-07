import React from "react";

const TopCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-2 pt-4 lg:grid-cols-4">
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-violet-200 p-2">
          <span className="text-lg text-violet-700">+18%</span>
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,846</p>
          <p className="text-gray-600">Today's Transactions</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-violet-200 p-2">
          <span className="text-lg text-violet-700">+15%</span>
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$11,522</p>
          <p className="text-gray-600">Sales this Month</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-violet-200 p-2">
          <span className="text-lg text-violet-700">+11%</span>
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$25.5</p>
          <p className="text-gray-600">Last Payout</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-violet-200 p-2">
          <span className="text-lg text-violet-700">+18%</span>
        </p>
      </div>
    </div>
  );
};
export default TopCards;
