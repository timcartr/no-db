import React from 'react'

export default function Nav() {
    
    return(
        <div className="header">
            <a className="logo">Game<span>Check</span></a>
            <nav>
                <a href={''}>My Lists</a>
                <a href={''}>About</a>
                <a href={''}>Contact</a>
            </nav>
            <div className="membership">
                <a href={''}><span className="signup">Sign Up</span></a>
                <a href={''}><span className="login">Login</span></a>
            </div>
        </div>
    )

}