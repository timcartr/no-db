import React from 'react'

import './ListView.css'
import GameList from './GameList/GameList.js'
import ListHeader from './ListHeader/ListHeader.js'
import AddList from './AddList/AddList.js'

export default function ListView(props) {
    if( props.gameListVis === true){
        
        return(
            <div>
                <AddList createListFn = { props.createListFn } 
                        gameList = { props.gameList } 
                        handleSavedListClickFn = { props.handleSavedListClickFn }
                        hideGameListFn = { props.hideGameListFn } 
                        gameListVis = { props.gameListVis } 
                        name = { props.name }
                        searchQueryArr = { props.searchQueryArr }
                        />
                <ListHeader gameList = { props.gameList }
                            name = { props.name } />
                <GameList gameList = { props.gameList }
                          savedList = { props.savedList } />
            </div>
        )
    }

    return (
        <div>
        </div>
    )
}
 