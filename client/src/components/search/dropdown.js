import React, { Component } from 'react'

export class dropdown extends Component {

    render() {
        return (
            <form>
                <select name="regions" onChange={this.props.filterByRegion} >
                    {this.props.regions.map(region =>
                        <option value={region} key={region}>{region}</option>)}
                </select>
            </form>
        )
    }
}

export default dropdown
