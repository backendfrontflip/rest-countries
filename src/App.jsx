import React, { useState } from "react";
import Header from './components/Header'
import CountriesFilters from "./components//CountriesFilters";
import AllCountries from "./components//AllCountries";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <CountriesFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <AllCountries searchTerm={searchTerm} selectedRegion={selectedRegion} />
    </div>
  );
};

export default App;
