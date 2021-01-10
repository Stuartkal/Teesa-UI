import React from 'react'

const Profile = () => {
    return (
        <div className="profile-div">
            <div className="profile-bg"/>
                <div className="profile-content">
                    <img src="https://picsum.photos/200" className="avatar"/>
                    <div className="profile-details">
                    <h4>John Doe</h4>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
         </div>
    )
}

export default Profile
