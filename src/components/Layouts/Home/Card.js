import React from 'react'

import './home.scss'
const Card = (props) => {
    return (
        <div className="card=">
            <div className="card">
                <img src="https://picsum.photos/200"/>
                <div className="card-details">
                    <h3>(Hon) {props.name}</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <button>follow</button>
            </div>
        </div>
    )
}

export default Card
