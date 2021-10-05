import React from 'react'
import './Mystyle.css'
import RightBottomIcons from './RightBottomIcons'
function Document() {
    return (
        <div className="row5">
            <div className="documenticon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="25" height="25"
                viewBox="0 0 172 172"
                ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="grey"></path><g><path d="M126.3125,139.75h-80.625v-107.5h80.625z" fill="grey"></path><path d="M112.875,67.1875l-21.5,-21.5h-32.25v80.625h53.75z" fill="#ffffff"></path><path d="M91.375,51.0625v16.125h16.125z" fill="#c5cae9"></path></g></g></svg>

            </div>
            <div className="taskcomplete">
                <h5>Document.docx</h5>
            </div>
            <div>
                <RightBottomIcons/>
            </div>
            
        </div>
    )
}

export default Document
