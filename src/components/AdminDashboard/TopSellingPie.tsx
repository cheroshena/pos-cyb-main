import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, Title, Tooltip, Legend } from "chart.js";
Chart.register(Title, Tooltip, Legend);

const TopSellingPie = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  }>({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Daily Revenues",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });
 
  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sellings",
          data: [4500, 5500, 6500, 7500, 8500, 6000, 7000],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
            "rgb(255, 159, 64)",
            "rgb(94, 94, 94)",
          ],
        },
      ],
    });
  
    setChartOptions({
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Top Selling Products (Year)",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
 
  return (
    <>
      <div className="relative col-span-1 m-auto h-[50vh] w-full rounded-lg border bg-white p-4 lg:h-[70vh] ">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
export default TopSellingPie;
