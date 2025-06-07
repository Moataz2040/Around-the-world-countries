import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchDataFromAPI = () => {
    setIsLoading(true);
    let url = "https://restcountries.com/v3.1/independent?status=true";
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          // Country Page
          setResult(data[0]);
        } else {
          // Home Page
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };

  useEffect(() => {
    if (country) {
      // Country Page
      fetchDataFromAPI();
    } else {
      // Home Page
      fetchDataFromLocalStorage();
    }
  }, []);
  return {
    isError,
    isLoading,
    result,
    setFilteredCountries,
    filteredCountries,
  };
};
