import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
// Register the scales and elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  }>({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'This week Sales & Purchases',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });
  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 21111],
          borderColor: 'rgb(53,162,235)',
          backgroundColor: 'rgba(53,162,235,0.4)',
        },
        {
          label: 'Purchases $',
          data: [14500, 17842, 19823, 16123, 20193, 18522, 20111],
          borderColor: 'rgb(255,99,132)',
          backgroundColor: 'rgba(255,99,132,0.4)',
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'This week Sales & Purchases',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
export default BarChart;
