import React from 'react';
import Country from './country';


const Countries = ({countries}) => {
    return (
        <div className='countriesContainer'>
            {countries.map((country) => (
                <Country country={country} key={country.numericCode} />
            ))}
        </div>
    )
}

export default Countries;
