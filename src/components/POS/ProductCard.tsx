import React from "react";

interface ProductCardProps {
  item: {
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="w-full cursor-pointer sm:w-1/3 md:w-1/3 lg:w-1/3">
      <div className="rounded-lg border bg-white p-4">
        <div className="mr-4 ">
          <span className="rounded-full bg-blue-500  px-6 py-1 text-white ">
            {item.quantity} left
          </span>
        </div>
        <div className="mb-2 flex justify-center pt-1">
          <img
            src={
              (item.image =
                "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")
            }
            alt={item.name}
            className="h-24 w-24 object-contain"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">Rs.{item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
