import React from "react";

function fillSizes(minValue, maxValue){
    let a = [];
    for (var i = minValue; i <= maxValue; i++){
        a.push(<option value={i} key={i}>size = {i}</option>)
    }
    return a
}

export default class Filter extends React.Component{
    constructor(props){
        super(props);

      }

    render(){
        return (
        <div className="filter">
            <div>
                <h3 onClick={this.props.changeFilterState}>Gender</h3>
                <label>
                    <input onChange={this.props.handler} type="checkbox" />
                    male/female
                </label>
            </div>
            <div>
                <h3>Size</h3>
                <select>
                    <option value='0' >select size</option>
                    {fillSizes(1, 10)}
                </select>
            </div>
        </div>
        )
    }
}