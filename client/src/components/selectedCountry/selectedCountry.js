import React, { Component } from 'react'
import fetch from 'node-fetch'
import { Link } from 'react-router-dom'

import './selectedCountry.css'

export class SelectedCountry extends Component {

    state = {
        country: []
    }


    componentDidMount() {
        const { name } = this.props.match.params;

        fetch(`/country/${name}`)
            .then(res => res.json())
            .then(data => this.setState({ country: data[0] }))
    }

 

    render() {

        const { country = {} } = this.state;
        const { languages = [] } = country;
        const { currencies = [] } = country;
        const { topLevelDomain = [] } = country;
        const { borders = [] } = country;

        return (
            <div className="selectedCountryContainer">
                <div >
                    <Link to="/">
                        <button className="navButton">Back</button>
                    </Link>
                </div>
                <div className="selectedCountryCard">
                    <div className="imageWrapper">
                        <img src={country.flag} alt="country flag" />
                    </div>
                    <div className="infoContainer">
                        <div className="countryName">
                            <h3>{country.name}</h3>
                        </div>
                        <div className='countryInfo'>
                            <div className="infoColumn">
                                <p>Native name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Sub region: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                            <div className="infoColumn">
                                <p>Top level domain: <span>{topLevelDomain.map(domain => <span key={domain}>{domain}</span>)}</span></p>
                                <p>Currencies: <span>{currencies.map(currency => <span key={currency.code}>{currency.name}</span>)}</span></p>
                                <p>Laguages: <span>{languages.map(language => <span key={language.name}>{language.name}, </span>)}</span></p>
                            </div>
                        </div>
                        <div>
                            <h4>Border countries: {borders.map(border => <span key={border}>{border} </span>)}</h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SelectedCountry


