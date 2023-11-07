import React from "react";
import RecentSales from "~/components/AdminDashboard/RecentSales";
import TopCards from "~/components/AdminDashboard/TopCards";
import StockAlerts from "~/components/AdminDashboard/stockAlerts";
import DateTime from "~/components/CashierDashboard/DateTime";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const dashboard = () => {
  const now = new Date();

  return (
    <div className="min-h-screen bg-gray-100  ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="  w-full py-5 ">
          <DateTime time={now} />
          <TopCards />
          <RecentSales />
          <StockAlerts />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
