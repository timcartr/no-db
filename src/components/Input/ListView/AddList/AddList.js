import React, { Component } from 'react'
import axios from "axios";

import './AddList.css'
import { create } from 'domain';

export default class Nav extends Component {
    constructor() {
        super() 

        this.state = {
            savedList: []
        }
    }

    handleClick() {
        const { gameList } = this.props
        this.props.createListFn(gameList)     
    }

    render() {
        console.log(this.state.savedList)
        return(
            <div>
            <button onClick={ () => { this.handleClick() } }>Save</button>
            { this.updateState }
            </div>
        )
    }
}