import React, { Component } from 'react'
import axios from "axios";

import './Input.css'
import ListView from './ListView/ListView.js'
import SavedLists from './SavedLists/SavedLists.js'

export default class Input extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            gameList:[],
            searchQuery: '',
            searchQueryArr:[],
            savedList:[],
            gameListVis: true
        }
        this.hideGameList = this.hideGameList.bind( this )
        this.handleSavedListClick = this.handleSavedListClick.bind(this)
    }
    
    createList( listInfo, listName ) {
    axios.post('/api/savedLists', {games:listInfo,listName:listName} )
    }

    // deletePost( id ) {
    //     axios.delete(baseUrl + `/lists?id=${ id }`).then( results => {
    //       this.setState({
    //         posts: results.data
    //       })
    //     })
    //   }

    handleChange(val) {
        this.setState({
            userInput: val,
        })
    }

    handleClick() {
        this.showGameList()
        axios.get( `/search/${this.state.userInput}` , {userInput: this.state.userInput}).then( results => {
            this.setState ({
                gameList: results.data,
                searchQuery: this.state.userInput,
                userInput: ''
            })
        })
        this.assignQueryArr()
    }

    assignQueryArr(){
        let arr = []
        arr.push(this.state.userInput)

        this.setState({
            searchQueryArr: arr
        })
    }

    handleSavedListClick() {
        axios.get('/api/savedLists').then( results => {
            this.setState({
                savedList: results.data
            })
        })
    }

    hideGameList() {
        this.setState({
            gameListVis: false
        })
    }

    showGameList() {
        this.setState({
            gameListVis: true
        })
    }

    render() {  
        return(
            <div className='Input'>
                <ListView gameList = { this.state.gameList }
                            name = { this.state.searchQuery }
                            savedList = { this.state.savedList } 
                            createListFn = { this.createList } 
                            handleSavedListClickFn = { this.handleSavedListClick }
                            hideGameListFn = { this.hideGameList }
                            gameListVis = {this.state.gameListVis }
                            searchQueryArr = { this.state.searchQueryArr }
                            />
                <div id='inputBoxDiv'>
                    <h1 >What's your favorite game?</h1>
                    <div>
                        <input onChange={ (e) => this.handleChange( e.target.value)}
                            value={this.state.userInput}/>
                        <button onClick={ () => {this.handleClick()} }>Search</button>
                </div>
                    <br />
                    {/* <ListPortal savedList = { this.state.savedList }/> */}
                    { this.state.savedList.map( list => (
                        <SavedLists lists = { list } key="list" />
                    )) }
                </div>
            </div>
        )
    }
}