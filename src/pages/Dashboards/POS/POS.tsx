import React, { Fragment, useState } from "react";
import DetailsScreen from "~/components/POS/DetailsScreen";
import ProductsScreen from "~/components/POS/ProductsScreen";

import CashierNavbar from "~/components/Navigations/CashierNavbar";

const POS = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CashierNavbar />

      <div className="p-4 py-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="w-full md:mr-4">
            <DetailsScreen />
          </div>
          <div className="w-full">
            <ProductsScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
