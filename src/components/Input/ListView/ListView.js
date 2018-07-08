import React from 'react'

import './ListView.css'
import GameList from './GameList/GameList.js'
import ListHeader from './ListHeader/ListHeader.js'
import AddList from './AddList/AddList.js'

export default function ListView(props) {
    return (
        <div>
            <AddList createListFn = { props.createListFn } 
                     gameList = { props.gameList } />
            <ListHeader gameList = { props.gameList }
                        name = { props.searchQuery } />
            <GameList gameList = { props.gameList } />
        </div>
    )
 } 
 