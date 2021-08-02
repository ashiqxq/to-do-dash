import React from 'react'
import './Mystyle.css'

function Comment() {
    return (
        <div className="Comment">
                <input className="input" type="test" placeholder='write a comment ' />
            <div className="linkicon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>

            </div>
            <div className="sendicon">
                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="40" height="40"
                viewBox="0 0 172 172"
                ><g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M10.75,69.875l28.60217,34.02733l17.98117,10.76433l10.72133,17.931l34.07033,28.65233l59.125,-150.5z" fill="grey"></path><path d="M68.08333,132.58333l-10.75,-17.91667l-17.91667,-10.75l111.08333,-82.41667z" fill="white"></path></g></g></svg> */}

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="20" height="20"
                viewBox="0 0 172 172"
                ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M148.73633,23.26367l-137.01001,49.82373l5.97339,5.96289l81.21289,81.22339zM130.76367,41.23633l-36.17627,99.50049l-27.86182,-27.86182l39.19971,-39.19971l-7.60058,-7.60058l-39.19971,39.19971l-27.86182,-27.86182z"></path></g></g></svg>
            </div>
           
        </div>
        
    )
}

export default Comment
