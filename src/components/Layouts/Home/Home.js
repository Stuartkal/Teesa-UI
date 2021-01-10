import React,{useState, useEffect} from 'react'
import Navbar from '../../Routes/Navbar/Navbar'
import Card from './Card'
import Bill from './Bill'
import PostAddIcon from '@material-ui/icons/PostAdd';
import PostBill from './PostBill'
import Profile from './Profile'
import {connect, useSelector} from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'


import './home.scss'
const Home = (props) => {

    const [modal,setModal] = useState(false)

    useEffect(() => {
        props.getPosts()
    },[])

    const posts = useSelector(state => state.post.posts)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <div>
            <Navbar/>
            {modal ? <PostBill close={closeModal}/>: null}
            <div className="home-main">
            <Profile/>
            <div className="home-container">
                <div className="post-container" onClick={openModal}>
                    <div className="post-bill">
                        <PostAddIcon className="post-icon"/>
                        <h5>Post a Bill</h5>
                    </div>
                </div>
                <div className="bill-container">
                    <h2>Bills</h2>
                    {
                        posts.map(post => (
                            <Bill post={post} key={post._id}/>
                        ))
                    }
                      
                </div>
            </div>
            <div className="side-bar">
                <div className="search">
                    <input type="text" placeholder="Search MPs"/>
                </div>
                    
                    <Card name="Robert Kyagulanyi"/>
                    <Card name="Rebecca Kadaga"/>
                    <Card name="Matia Kasaija"/>
                    <Card name="Judith Nabakooba"/>
                    
            </div>
        </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(actionCreators.get())
})

export default connect(null, mapDispatchToProps) (Home)
