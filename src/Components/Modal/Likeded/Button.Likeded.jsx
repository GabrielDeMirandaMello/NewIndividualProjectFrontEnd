import React, { useState } from 'react';
import './index.css';
import { BsFillHeartFill } from "react-icons/bs";

export default function Likeded({ ActionLikeded, storyCount }) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        ActionLikeded();
        setLiked(!liked);
    };

    return (
        <>
            <div className="comment-like" onClick={handleLikeClick}>
                <span>{storyCount}</span>
                <span className="quantity-like">Cutidas</span>
                <BsFillHeartFill style={{ color: liked ? 'red' : 'white' }}/>
            </div>
        </>
    )
}