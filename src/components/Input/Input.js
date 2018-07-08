import React, { Component } from 'react'
import axios from "axios";

import './Input.css'
import ListView from './ListView/ListView.js'
// import ListPortal from './ListPortal/ListPortal.js'
import SavedLists from './SavedLists/SavedLists.js'

const baseUrl = 'http://localhost:3005'
export default class Input extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            gameList:[],
            searchQuery: '',
            savedList:[]
        }

        // this.updatePost = this.updatePost.bind( this );
        // this.deletePost = this.deletePost.bind( this );
        // this.createList = this.createList.bind( this );
    }
    
    createList( listInfo ) {
    axios.post('/api/savedLists', {games:listInfo} )
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
        axios.get( `/search/${this.state.userInput}` , {userInput: this.state.userInput}).then( results => {
            this.setState ({
                gameList: results.data,
                searchQuery: this.state.userInput,
                userInput: ""
            })
        })
    }

    handleSavedListClick() {
        axios.get('/api/savedLists').then( results => {
            this.setState({
              savedList: results.data
            })
        })
    }

    render() {            
        return(
            <div className='Input'>
                <h1>What's your favorite game?</h1>
                <div>
                    <input onChange={ (e) => this.handleChange( e.target.value)}/>
                    <button onClick={ () => {this.handleClick()} }>Search</button>
                    <br />
                    {/* <ListPortal savedList = { this.state.savedList }/> */}
                    <ListView gameList = { this.state.gameList }
                              name = { this.state.searchQuery }
                              savedList = { this.state.savedList } 
                              createListFn = { this.createList } 
                                />
                    { this.state.savedList.map( list => (
                        <SavedLists games = { list } />
                    )) }
                </div>
            </div>
        )
    }
}