import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // Your search logic here...
  };
  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="rounded-l-lg border p-2 pr-20"
        />
        <button
          type="submit"
          className="rounded-r-lg border bg-violet-400 px-4 text-white hover:bg-violet-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
