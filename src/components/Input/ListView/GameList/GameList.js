import React, { Component } from 'react'

import './GameList.css'
import Game from './Game/Game.js'

export default class GameList extends Component  {
    constructor() {
        super()

        this.state = {
            checked: false
        }
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
        let mappedGames = this.props.gameList.map( (e, i) => {
            let obj = {
                summary:e.summary,
            }
            if (obj.summary !== undefined){
                return(
                        <Game name = { e.name }
                              summary = { e.summary }
                              release = { e.first_release_date }
                              convertToHumanFn = { this.convertToHuman }
                              img = { e.cover }
                        />
                )
            }
        })

        return (
                mappedGames
        )
    }
}