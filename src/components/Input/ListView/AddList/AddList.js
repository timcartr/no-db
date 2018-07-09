import React, { Component } from 'react'

import './AddList.css'

export default class AddList extends Component {
    constructor() {
        super() 

        this.state = {
            savedList: []
        }
    }

    handleClick() {
        const { gameList } = this.props
        this.props.createListFn(gameList, this.props.searchQueryArr)
        this.props.handleSavedListClickFn()
        this.props.hideGameListFn()     
    }

    handleClear() {
        this.props.hideGameListFn()
    }

    render() {
        if( this.props.gameList.length !== 0){
            return(
                <div className="gamelist">
                    <button onClick={ () => { this.handleClick() } } >Save It!</button>
                    <button onClick={ () => { this.handleClear() } } >Clear</button>
                </div>
            )
        }
        return(
            <div>
            { this.updateState }
            </div>
        )
    }
}