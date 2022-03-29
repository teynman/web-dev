import React from "react";

const WhoToFollowListItem = (
    {
        user = {
            avatarIcon: '../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return <li className="list-group-item bg"
               style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <img src={user.avatarIcon} alt='' style={{width: 36, height: 36, borderRadius: '50%'}}/>
        <div className="info" style={{flex: 1, marginLeft: 12}}>
            <p style={{margin: 0, padding: 0}}>{user.userName} <i className="rad-fill"></i></p>
            <p style={{margin: 0, padding: 0}}>@{user.handle}</p>
        </div>
        <button className="btn btn-primary btn-sm">Follow</button>
    </li>
}

export default WhoToFollowListItem;