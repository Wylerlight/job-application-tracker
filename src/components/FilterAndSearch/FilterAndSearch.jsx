import React, { useState } from "react";

export default function FilterAndSearch({ onFilter, onSearch }) {
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    const category = e.target.value;
    setFilterCategory(category);
    onFilter(category);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <label>
        Filter by Category:
        <select value={filterCategory} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="hot">Hot</option>
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
        </select>
      </label>

      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
    </div>
  );
}
