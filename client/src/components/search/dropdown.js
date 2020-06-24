import React from 'react'

const dropdown = ({ regions, filterByRegion }) => {

    return (
        <form>
            <select name="regions" onChange={filterByRegion} >
                {regions.map(region =>
                    <option value={region} key={region}>{region}</option>)}
            </select>
        </form>
    )

}

export default dropdown
