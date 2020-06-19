import React, { Component } from 'react';
import Countries from '../components/countries/countries';
import Search from '../components/search/search';
import Dropdown from '../components/search/dropdown'

import './home.css';

class Home extends Component {
  state = {
    countries: [],
    regions: []
  };

  filteredcountries = [];

  componentDidMount() {
    fetch('/countries')
      .then(res => res.json())
      .then(countries => this.setState({ countries }))
      .then(() => {
        let data = this.state.countries.map((country) => country.region);
        let uniqueRegions = [...new Set(data)]
        uniqueRegions.forEach(region => {
          if (region === "") {
            uniqueRegions.splice(uniqueRegions.indexOf(region), 1);
          }
        })
        uniqueRegions.unshift('All')

        this.setState({ regions: uniqueRegions })
      })
      .catch(err => console.log(err))
  }

  updateCountries = (filteredcountries) => {
    this.setState({ countries: filteredcountries })
  }

  filterByRegion = (value) => {
    let region = value.currentTarget.value

    if (region === 'All') {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => this.setState({ countries: data }))
    } else {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(data => this.setState({ countries: data }))
      }
  }


  render() {

    const { countries, regions } = this.state;

    console.log('regions: ', countries)

    return (
      <div className="App">
        <div className="searchBar">
          <Search filteredcountries={this.props.filteredcountries} countries={countries} updateCountries={this.updateCountries} />
          <Dropdown regions={regions} filterByRegion={this.filterByRegion} setRegions={this.setRegions} />
        </div>
        <div className="countriesContainer">
          <Countries countries={this.state.countries} selectCountry={this.selectCountry} />
        </div>
      </div>
    );
  }
}

export default Home;
