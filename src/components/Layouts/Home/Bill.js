import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useSelector} from 'react-redux'

import './home.scss'
const Bill = ({post}) => {

    const fname = useSelector(state => state.auth.fname)
    const lname = useSelector(state => state.auth.lname)
    const municipality = useSelector(state => state.auth.municipality)
    const userType = useSelector(state => state.auth.userType)

    return (
            <div className="bill">
                    <img src={post.imageUrl}/>
                    <div className="bill-details">
                        <div className="name-row">
                            <h3>{fname}</h3>
                            <h3>{lname}</h3>
                        </div>
                        <div className="constituency-row">
                            <p><strong>Constituency</strong></p>
                            <p>{municipality}</p>
                            <p>Municipality</p>
                        </div>
                        <div>
                        <p>{userType}</p>
                        </div>
                        <h2>{post.title}</h2>
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
 