import React from "react";
const StockAlerts = () => {
  // Replace this with actual data of recent sales
  const StockAlertData = [
    {
      code: "REF001",
      product: "John Doe",
      warehouse: "Completed",
      quantity: "$100",
      alert: "$80",
    },
    // Add more sales data objects here if needed
  ];
  return (
    <div className="lg:grid-cols-0 grid  pb-2 pt-4  lg:h-[40vh] ">
      <div className="w-full justify-between overflow-auto rounded-lg border bg-white p-4">
        <h1 className="mb-4 font-bold">Stock Alerts</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 text-left">Code</th>
              <th className="px-4 text-left">Product</th>
              <th className="px-4 text-left">Warehouse</th>
              <th className="px-4 text-left">Quantity</th>
              <th className="px-4 text-left">ALERT</th>
            </tr>
          </thead>
          <tbody>
            {StockAlertData.map((stock, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{stock.code}</td>
                <td className="px-4 py-2">{stock.product}</td>
                <td className="px-4 py-2">{stock.warehouse}</td>
                <td className="px-4 py-2">{stock.quantity}</td>
                <td className="px-4 py-2">{stock.alert}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StockAlerts;
