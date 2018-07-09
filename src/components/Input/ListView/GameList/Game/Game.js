import React from 'react'

export default function Game(props) {
    let img = props.img.url.replace('t_thumb', 't_cover_big')
    return(
        <div className="gamelistcard">
            <div className="cardimg">
                <img src={ img } alt="" />
            </div>
            <h3>{ props.name }</h3>
            <p>First released on { props.convertToHumanFn(props.release) }</p>
            <p>{ props.summary }</p>
        </div>
    )

}