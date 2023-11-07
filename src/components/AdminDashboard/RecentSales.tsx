import React from 'react';
const RecentSales = () => {
  // Replace this with actual data of recent sales
  const recentSalesData = [
    {
      reference: 'REF001',
      customer: 'John Doe',
      status: 'Completed',
      total: '$100',
      paid: '$80',
      due: '$20',
    },
    // Add more sales data objects here if needed
  ];
  return (
    <div className="grid lg:grid-cols-0  pt-4 pb-2 lg:h-[40vh] ">
      <div className='bg-white justify-between w-full border p-4 rounded-lg overflow-auto'>
        <h1 className='font-bold mb-4'>Recent Sales</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4">Reference</th>
              <th className="text-left px-4">Customer</th>
              <th className="text-left px-4">Status</th>
              <th className="text-left px-4">Total</th>
              <th className="text-left px-4">Paid</th>
              <th className="text-left px-4">Due</th>
            </tr>
          </thead>
          <tbody>
            {recentSalesData.map((sale, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{sale.reference}</td>
                <td className="px-4 py-2">{sale.customer}</td>
                <td className="px-4 py-2">{sale.status}</td>
                <td className="px-4 py-2">{sale.total}</td>
                <td className="px-4 py-2">{sale.paid}</td>
                <td className="px-4 py-2">{sale.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RecentSales;