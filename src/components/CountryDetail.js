import React from "react";
import ListItem from "./ListItem";

const CountryDetail = ({country})=>{

    const countryLanguages = country.languages.map((language)=>{
        return <p>{language.name}</p> 
    })

    const countriesNeighbouring = country.borders.map((border)=>{
        return<p>{border}</p>
    })

  
    return(
        <div>
            <h3>{country.name}</h3>
            <p>Flag:</p>
            <img src={country.flag}/>
            <p>Languages Spoken: {countryLanguages}</p>
            <p>Neighbouring Countries: {countriesNeighbouring}</p>
        </div>
    )


};

export default CountryDetail;