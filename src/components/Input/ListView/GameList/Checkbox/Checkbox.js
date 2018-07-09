import React, { Component } from 'react'

import './Checkbox.css'
import Rating from '../Rating/Rating.js'

export default class Checkbox extends Component  {
    constructor() {
        super()

        this.state = {
            checked: false
        }
    }

    handleClick() {
        this.setState({
            checked: !this.state.checked
        })
    }

    convertToHuman(val) {
        if(val === false || val === undefined ){
        return "Release date not Available"
        }else {
        let newDate = new Date(val)
        return newDate.toDateString()
        }

    }
    
    render() {
        return(
            <div>
                <div className="container">
                    <input
                        type={"checkbox"} 
                        id={this.props.name} 
                        name={this.props.name} 
                        value={this.props.name} 
                        onClick={ () => { this.handleClick() } }
                    />
                </div>
                    <br/><h3>{ this.props.name }</h3>
                    <br/><p>{ this.props.summary }</p>
                    <br/>{ this.convertToHuman(this.props.firstReleaseDate) }
                    <Rating checked = { this.state.checked }/>
            </div>
        )
    }
}