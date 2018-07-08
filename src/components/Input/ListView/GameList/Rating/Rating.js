import React from 'react'

import './Rating.css'
import StarRating from './StarRating/StarRatingComponent.js'

export default function Rating(props) {
    if(props.checked === true){
        return(
            <div>
                <p>How Would You Rate the Game?</p>
                <StarRating />
            </div>
        )
    }

    return(
        <div>
            { Rating }
        </div>
    )
}