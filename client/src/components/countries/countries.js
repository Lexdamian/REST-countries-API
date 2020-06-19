import React from 'react';
import Country from './country';


class Countries extends React.Component {

    render() {
        return (
            <div className='countriesContainer'>
                {this.props.countries.map((country) => (
                    <Country country={country} key={country.numericCode}/>
                ))}
            </div>
        )
    }
}

export default Countries;
