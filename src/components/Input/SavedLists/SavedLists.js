import React from 'react'
import Checkbox from '../ListView/GameList/Checkbox/Checkbox.js'

import './SavedLists.css'

export default function Nav() {
    let mappedGames = this.props.savedList.map( (e, i) => {
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