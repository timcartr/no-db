import React, { Component } from 'react'

import './GameList.css'
import Checkbox from './Checkbox/Checkbox.js';

export default class GameList extends Component  {
    constructor() {
        super()

        this.state = {
            checked: false
        }
    }
    
    render() {
        let mappedGames = this.props.gameList.map( (e, i) => {
            return(
                <div key={i}>
                    <Checkbox name = { e.name }
                              summary = { e.summary }
                              firstReleaseDate = { e.first_release_date }/>
                </div>
            )
        })
        return(
            <div>
                { mappedGames }
            </div>
        )
    }
}