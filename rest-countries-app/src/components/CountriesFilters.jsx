import React from "react";

const CountriesFilters = ({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) => {
  return (
    <section className="flex flex-row gap-6 sm:flex-row justify-between p-4">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-2xl w-full sm:w-1/3 px-4 py-2 text-black dark:bg-gray-800 dark:text-white"
      />

      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="border rounded-2xl px-4 py-2 mt-3 sm:mt-0 sm:ml-4 dark:bg-gray-800 dark:text-white"
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
