import React from "react";
import {useSelector} from "react-redux";

const WhoToFollowListItem = () => {
    const whoList = useSelector(state => state.who);
    return (
        <div className="d-sm-none d-md-none d-lg-block">
          <h6 style={{marginTop: 20}}>Who to follow</h6>
            <ul className="list-group foll-list">
            {whoList.map((user,index) => {
                return <li className="list-group-item bg" key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <img src={user.avatarIcon} alt='' style={{width: 36, height: 36, borderRadius: '50%'}} />
                        <div className="info" style={{flex: 1, marginLeft: 12}}>
                            <p style={{margin: 0, padding: 0}}>{user.userName} <i className="rad-fill"></i></p>
                            <p style={{margin: 0, padding: 0}}>@{user.handle}</p>

                        </div>
                        <button className="btn btn-primary btn-sm">Follow</button>
                    </li>
            })
        }
           </ul>
        </div>
    );
}
export default WhoToFollowListItem;