import React, { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";
import CountrySelector from "../components/CountrySelector";


const CountryContainer = ()=>{
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(()=>{
        getCountries();
    },[]);

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    };

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    };

    const worldPopulation = function() {  
        const total = countries.reduce((runningTotal, country)=>{
        return runningTotal + country.population
        }, 0)
        return total;
    };

    return(
        <div> 
            <h2>World Population: {worldPopulation()}</h2>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> :null}
        </div>
    )
};

export default CountryContainer;