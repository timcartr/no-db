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

    // let mappedCover = []
    // props.GameList.map( (e, i) => {
    //     mappedCover.push(e.cover)
    // })

    // let mappedCoverURL = []
    // mappedCover.map( (e, i) => {
    //     mappedCoverURL.push(e.url)
    // })

    // let coverImg = mappedCoverURL.pop()
    // t_thumb to t_cover_big

    // console.log(`cover is ${mappedCover.pop()}`)
        
    if(props.gameList.length !== 0){
        return (
        <div>
            <h2>{ props.name }</h2>
            <p> First released on { releaseDate } </p>
            <p> Number of games: { countedGames } </p>
        </div>
        )
    }
    
    return(
        <div>
        </div>
    )

}