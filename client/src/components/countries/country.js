import React from 'react';
import { Link } from 'react-router-dom';

import './country.css'

const Country = ({ country }) => {

    return (
        <Link to={`/country/${country.name}`} target='_blank' key={country.numericCode} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="countryCard">
                <div className="imgContainer">
                    <img alt="country flag" src={country.flag} />
                </div>
                <div className="countryInfo">
                    <h3>{country.name}</h3>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region} </p>
                    <p>Capital: {country.capital} </p>
                </div>
            </div>
        </Link>
    )

}

export default Country;
