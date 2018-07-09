import React from 'react'

import './ListHeader.css'

export default function ListHeader(props) {
    
    let mappedYears = []
    props.gameList.map( (e, i) => {
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
    props.gameList.map( (e, i) => {
        return coverImg.push(e.cover)
    })

    let coverImgUrl = coverImg.shift()

    if(props.gameList.length !== 0){
        return (
        <div className="gamelist">
            <img src={ coverImgUrl.url.replace('t_thumb', 't_cover_big') } alt=""/>
            <div className="headerinfo">
                <h2>{ props.name }</h2>
                <p> First released on <span>{ releaseDate }</span></p>
                <p> Number of games: { countedGames } </p>
            </div>
        </div>
        )
    }
    
    return(
        <div>
        </div>
    )

}