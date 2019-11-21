import React from 'react'
import Rating from './Rating.js'
import Comment from './Comment.js'
import User from './User.js'

export default function Hotel(props) {
    return (
        <div className="hotel">
            <img className="hotelImage" src={props.image}/>
            <Rating rating={props.rating}/>
            <Comment comment={props.comment}/>
            <User user={props.user} image={props.userImage}/>
        </div>
    )
}
