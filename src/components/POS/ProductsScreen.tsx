import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { AutoComplete, Input } from "antd";
import { BarcodeOutlined } from "@ant-design/icons";

const products = [
  {
    name: "Coffee",
    price: 29.99,
    image: "/product2.jpg",
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 29.99,
    image: "/product2.jpg",
    quantity: 483.52,
  },
  {
    name: "Product 2",
    price: 29.99,
    image: "/product2.jpg",
    quantity: 5,
  },
  {
    name: "Ice Cream",
    price: 29.99,
    image: "/product2.jpg",
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 3.99,
    image: "/product2.jpg",
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 2.99,
    image: "/product2.jpg",
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 2.99,
    image: "/product2.jpg",
    quantity: 5,
  },
];

const ProductsScreen: React.FC = () => {

  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const handleSearch = (value: string) => {
    let res: { value: string; label: string; imageUrl: string }[] = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = products.map((product) => ({
        value: product.name,
        label: product.name,
        imageUrl: `${product.image}?size=small`, // Adjust the image URL as needed
      }));
    }
    setOptions(res);
  };

  const chunks: {
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[][] = products.reduce(
    (acc, _, index) => {
      if (index % 3 === 0) {
        acc.push(products.slice(index, index + 3));
      }
      return acc;
    },
    [] as { name: string; price: number; image: string; quantity: number }[][],
  );

  return (
    <div className="w-full justify-between rounded-lg border bg-white p-4 lg:h-[87vh] ">
      <div className="w-full overflow-auto rounded bg-gray-100 p-4 shadow md:h-[74vh] lg:col-span-4">
        <div className="px-4 ">
          <AutoComplete
            style={{ width: 400 }}
            onSearch={handleSearch}
            options={options}
          >
            {/* Add Barcode Icon */}
            <Input 
              // Add the barcode icon as a prefix
              prefix={<BarcodeOutlined />}
              placeholder="Scan Barcode/Search"
            />
          </AutoComplete>
        </div>

        {chunks.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-4 overflow-auto px-4 pb-2 pt-4"
          >
            {row.map((product, index) => (
              <ProductCard key={index} item={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
