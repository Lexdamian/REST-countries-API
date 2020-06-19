import React, { Component } from 'react';
import './search.css'

class Search extends Component {

  handleInputChange = () => {

    let name = document.getElementById('search').value;

    if (name.length > 2) {
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            this.props.updateCountries(data)
          } else {
            return ('No countries found')
          }
        })
        .catch(err => console.log(err))
    } else if (name.length === 0) {
      fetch('/countries')
        .then(res => res.json())
        .then(data => this.props.updateCountries(data))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <form>
        <input
          id='search'
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          className="searchBox"
        />
      </form>
    )
  }
}

export default Search