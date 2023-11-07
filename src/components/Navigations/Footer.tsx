import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-4 text-black">
      <div className="flex items-center justify-between">
        <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
        <div>Company Name</div>
      </div>
    </footer>
  );
};

export default Footer;
