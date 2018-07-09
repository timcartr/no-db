import React from 'react'
import Checkbox from '../ListView/GameList/Checkbox/Checkbox.js'

import './SavedLists.css'

export default function SavedLists(props) {
    console.log(props.lists)

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

    let mappedGames = props.lists.games.map( (e, i) => {
        let obj = {
            name:e.name,
            summary:e.summary,
            FirstReleased: e.first_release_date
        }
        if (obj.summary !== undefined){
            return(
                <div key={i} className="savedgamelist">
                    <Checkbox name = { e.name }
                            summary = { e.summary }
                            firstReleaseDate = { e.first_release_date }/>
                </div>
            )
        }
    })

    return(
        <div className="savedgameheader">
            <img src={ coverImgUrlBig } alt=""/>
            <h2>{ props.lists.name }</h2>
            <p> First released on { releaseDate }</p>
            <p> Number of games: { countedGames }</p>
            { mappedGames }
        </div>
    )

}