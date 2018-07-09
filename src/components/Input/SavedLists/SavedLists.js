import React from 'react'
import Checkbox from '../ListView/GameList/Checkbox/Checkbox.js'

import './SavedLists.css'

export default function SavedLists(props) {
    let mappedGames = props.lists.games.map( (e, i) => {
        let obj = {
            name:e.name,
            summary:e.summary,
            FirstReleased: e.first_release_date
        }
        if (obj.summary !== undefined){
            return(
                <div key={i}>
                    <Checkbox name = { e.name }
                            summary = { e.summary }
                            firstReleaseDate = { e.first_release_date }/>
                </div>
            )
        }
    })

    let mappedYears = []
    props.lists.games.map( (e, i) => {
        return mappedYears.push(e.first_release_date)
    })

    let sortedYears = mappedYears.sort(function(a,b){
        return a - b;
    })

    let firstRelease = sortedYears.shift()

    let unixReleaseDate = new Date(firstRelease)

    let releaseDate = unixReleaseDate.toDateString()

    let countedGames = mappedYears.length

    let coverImg = []
    props.lists.games.map( (e, i) => {
        return coverImg.push(e.cover)
    })

    let coverImgUrl = coverImg.shift()

    let coverImgUrlBig = coverImgUrl['url'].replace('t_thumb', 't_cover_big')

    return(
        <div>
            <img src={ coverImgUrlBig } />
            <h2>{ props.lists.listName[0] }</h2>
            <p> First released on { releaseDate }</p>
            <p> Number of games: { countedGames }</p>
            { mappedGames }
        </div>
    )

}