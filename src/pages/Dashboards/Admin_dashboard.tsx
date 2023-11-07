import React from "react";
import BarChart from "~/components/AdminDashboard/BarChart";
import RecentSales from "~/components/AdminDashboard/RecentSales";
import TodaysTotalSales from "~/components/AdminDashboard/TodaysTotalSales";
import TopCards from "~/components/AdminDashboard/TopCards";
import TopSellingPie from "~/components/AdminDashboard/TopSellingPie";
import TopSelling from "~/components/AdminDashboard/TopSellings";
import StockAlerts from "~/components/AdminDashboard/stockAlerts";
import Admin_Sidebar from "~/components/Navigations/Admin_Sidebar";
import Dash_header from "~/components/Navigations/Dash_Header";

const Admin_dashboard = () => {
  return (
    <div className="min-h-screen min-w-fit bg-gray-100 ">
      <Dash_header />
      <div className="flex flex-grow ">
        <Admin_Sidebar />
        <div className="w-full py-5 pl-4 pr-8">
          <div className="mb-4 flex justify-end pt-3"></div>
          <TopCards />
          <TopCards />
          <div className=" grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
            <BarChart />
            <TodaysTotalSales />
          </div>
          <div className="w-full py-5 pl-4 pr-8">
            <div className=" grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
              <TopSelling />
              <TopSellingPie />
            </div>
            <RecentSales />
            <StockAlerts />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin_dashboard;
