import React from 'react'

import './ListPortal.css'

export default function ListPortal(props) {
    if(props.savedList.length === 0){
            return(
                <div>
                <img src={''} alt={''}/>
                <h3>Add New List!</h3>
                <button>Make a List</button>
                </div>
            )
    } else {
        let mappedList = props.savedList.map( (e, i) => {
        return(
            <div key={i}>
                <img src={''} alt={''}/>
                <h3>{e.name}</h3>
                <button>Go To List</button>
            </div>
        )
    })
    
    return (
        <div>
            { mappedList }
        </div>
    )
    } 
}