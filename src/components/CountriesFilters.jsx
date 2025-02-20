import React from "react";
import { FaSearch } from "react-icons/fa";

const CountriesFilters = ({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) => {
  return (
    <section className="flex flex-col sm:flex-row justify-between p-4 gap-6">
      {/* Search Input with Icon */}
      <div className="relative w-full sm:w-1/3">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-2xl w-full px-10 py-2 text-black dark:bg-gray-800 dark:text-white"
        />
      </div>

      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="border rounded-2xl px-4 py-2 dark:bg-gray-800 dark:text-white"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default CountriesFilters;
