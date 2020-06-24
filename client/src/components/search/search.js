import React from 'react';
import './search.css'

const Search = (props) => {

  const handleInputChange = () => {

    let name = document.getElementById('search').value;

    if (name.length > 2) {
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            props.updateCountries(data)
          } else {
            return ('No countries found')
          }
        })
        .catch(err => console.log(err))
    } else if (name.length === 0) {
      fetch('/countries')
        .then(res => res.json())
        .then(data => props.updateCountries(data))
        .catch(err => console.log(err))
    }
  }

  return (
    <form>
      <input
        id='search'
        placeholder="Search for..."
        onChange={handleInputChange}
        className="searchBox"
      />
    </form>
  )
}

export default Search