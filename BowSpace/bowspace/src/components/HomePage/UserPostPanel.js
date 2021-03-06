import React from 'react';

const UserPostPanel = ({ postId, time, message, recipientName, senderName}) => {

    return(
        <div className="user-post-panel">
            <div className="card mb-4">
                <div className="card-header" id="card-header">
                  <p> Post Id: {postId}</p>               
                </div>

                <div className="card-body">

                    <h5 className="card-title">
                        From:  <span className="userDisplay">{senderName}</span>
                        <p></p> 
                        To:  <span className="userDisplay">{recipientName}</span>
                    </h5>

                    <p className="card-text">
                        {message}
                    </p>
                    <p style = {{"paddingLeft" : "65%"}}> Time: {time} </p>
                </div>
            </div>
        </div>
    );
}

export default UserPostPanel;