import React, { useState, useEffect } from "react";

const restUrl = "https://restcountries.com/v3.1/all";

const AllCountries = ({ searchTerm, selectedRegion }) => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchAllCountryData = async () => {
      try {
        const response = await fetch(restUrl);
        if (!response.ok) throw new Error("Failed to fetch country data");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchAllCountryData();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === "" || country.region === selectedRegion)
  );

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  return (
    <div className="px-6 py-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleCountries.length > 0 ? (
          visibleCountries.map((country) => {
            const { cca3, name, population, region, capital, flags } = country;

            return (
              <article
                key={cca3}
                className="bg-white dark:bg-[hsl(209,23%,22%)] text-black dark:text-white rounded-lg shadow-lg overflow-hidden w-full max-w-[280px] mx-auto transition-colors duration-300"
              >
                <img src={flags.png} alt={`Flag of ${name.common}`} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{name.common}</h3>
                  <h4 className="font-semibold text-black dark:text-white">
                    Population:
                    <span className="text-gray-600 dark:text-gray-400 text-sm"> {population.toLocaleString()}</span>
                  </h4>
                  <h4 className="font-semibold text-black dark:text-white">
                    Region:
                    <span className="text-gray-600 dark:text-gray-400 text-sm"> {region}</span>
                  </h4>
                  <h4 className="font-semibold text-black dark:text-white">
                    Capital:
                    <span className="text-gray-600 dark:text-gray-400 text-sm"> {capital ? capital[0] : "N/A"}</span>
                  </h4>
                </div>
              </article>
            );
          })
        ) : (
          <p className="text-black dark:text-white text-center col-span-full">No countries found.</p>
        )}
      </section>

      {visibleCount < filteredCountries.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prevCount) => prevCount + 6)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCountries;
