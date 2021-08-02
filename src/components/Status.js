import React from 'react'
import './Mystyle.css'

function Status() {
    return (
        <div className="row4">
            <div className="circlecheck">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="20" height="20"
                    viewBox="0 0 172 172"

                ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g><circle cx="24" cy="24" transform="scale(3.58333,3.58333)" r="20" fill="#9b59b6"></circle><path d="M80.59275,109.9725c-2.064,0 -4.128,-0.78833 -5.70108,-2.36142l-21.79742,-21.801c-3.14975,-3.14617 -3.14975,-8.25242 0,-11.40217c3.14617,-3.14975 8.256,-3.14975 11.40217,0l21.79742,21.801c3.14975,3.14617 3.14975,8.25242 0,11.40217c-1.57308,1.57308 -3.63708,2.36142 -5.70108,2.36142z" fill="#ffffff"></path><path d="M80.59275,109.9725c-2.064,0 -4.128,-0.78833 -5.70108,-2.36142c-3.14975,-3.14617 -3.14975,-8.25242 0,-11.40217l34.18142,-34.18142c3.14617,-3.14975 8.256,-3.14975 11.40217,0c3.14975,3.14617 3.14975,8.25242 0,11.40217l-34.18142,34.18142c-1.57308,1.57308 -3.63708,2.36142 -5.70108,2.36142z" fill="#ffffff"></path></g></g></svg>
           
            </div>
            <div className="message">
                <h5>new task was completed</h5>

            </div>
        </div>
    )
}

export default Status
