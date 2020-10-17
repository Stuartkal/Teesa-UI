import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import './home.scss'
const Bill = () => {
    return (
            <div className="bill">
                    <img src="https://picsum.photos/200"/>
                    <div className="bill-details">
                        <h3>John Doe</h3>
                        <p>MP Kampala</p>
                        <h2>Mini Skirt Bill</h2>
                        <div className="review">
                            <div className="comments">
                                <p>comments</p>
                                <ChatBubbleIcon style={{color:'rgba(0,0,0,0.3)', fontSize:'20px'}}/>
                            </div>
                            <div className="likes">
                                <p>Likes</p>
                                <ThumbUpIcon style={{color:'rgba(0,0,0,0.3)',fontSize:'20px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Bill
