import "../styles/comment.scss";

import React from 'react'

export default function Comment(props) {
    const {
        accoutName,
        comment
    } = props
    return (
        <>
            <div className="commentContainer">
                <div className="accountName">{accoutName}</div>
                <div className="comment">{comment}</div>
            </div>
        </>
    )
}
