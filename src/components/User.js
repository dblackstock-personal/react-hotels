import React from 'react'

export default function User(props) {
    return (
        <div className="user">
            <img className="user_image" src={props.image}/>
            <p class="user_description">{props.user}</p>
        </div>
    )
}
