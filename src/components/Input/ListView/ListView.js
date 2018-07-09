import React from 'react'

import './ListView.css'
import GameList from './GameList/GameList.js'
import ListHeader from './ListHeader/ListHeader.js'
import AddList from './AddList/AddList.js'

export default function ListView(props) {
    if( props.gameListVis === true){
        
        return(
            <div className="listview">
                <ListHeader gameList = { props.gameList }
                            name = { props.name } />
                <AddList createListFn = { props.createListFn } 
                        gameList = { props.gameList } 
                        handleSavedListClickFn = { props.handleSavedListClickFn }
                        hideGameListFn = { props.hideGameListFn } 
                        gameListVis = { props.gameListVis } 
                        name = { props.name }
                        searchQueryArr = { props.searchQueryArr }
                        />
                <div className="gamelistflex">
                    <GameList gameList = { props.gameList }
                          savedList = { props.savedList } />
                </div>
            </div>
        )
    }
    return(
        <div>
            </div>
    )
}
 