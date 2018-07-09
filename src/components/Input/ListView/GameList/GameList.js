import React, { Component } from 'react'

import './GameList.css'

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
                name:e.name,
                summary:e.summary,
                FirstReleased: e.first_release_date
            }
            if (obj.summary !== undefined){
                return(
                    <div key={i}>
                        <h2>{ e.name }</h2>
                        <p>{ e.summary }</p>
                        <p>First released on: { this.convertToHuman(e.first_release_date) }</p>
                    </div>
                )
            }
        })

        return (
            <div>
                {mappedGames}
            </div>
        )
    }
}