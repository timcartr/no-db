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

    // let coverImgUrlBig = coverImgUrl['url'].replace('t_thumb', 't_cover_big')

    console.log( coverImgUrl )

    // console.log( {coverImgUrlBig} )

    if(props.gameList.length !== 0){
        return (
        <div>
            <img src={ coverImgUrl.url.replace('t_thumb', 't_cover_big') } />
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