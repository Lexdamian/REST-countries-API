import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './country.css'

export class Country extends Component {
    render() {
        return (
            <Link to={`/country/${this.props.country.name}`} target='_blank' key={this.props.country.numericCode} style={{textDecoration: 'none', color: 'black'}}>
                <div className="countryCard">
                    <div className="imgContainer">
                        <img alt="country flag" src={this.props.country.flag} />
                    </div>
                    <div className="countryInfo">
                        <h3>{this.props.country.name}</h3>
                        <p>Population: {this.props.country.population}</p>
                        <p>Region: {this.props.country.region} </p>
                        <p>Capital: {this.props.country.capital} </p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Country;
