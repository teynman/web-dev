import React from "react";

const WhoToFollowListItem = () => {
      
const whoList = [{
    avatarIcon: 'https://img.mp.itc.cn/upload/20170605/3ed0fec234ca49e08c43f24ded0823a8_th.jpg',
    userName: 'Java',
    handle: 'Java',
},
{
    avatarIcon: './images/relativity.jpg',
    userName: 'Relativity Space',
    handle: 'relativityspace',
},
{
    avatarIcon: './images/virgin.jpg',
    userName: 'Virgin Galactic',
    handle: 'virgingalactic',
},
{
    avatarIcon: './images/nasa.jpg',
    userName: 'NASA',
    handle: 'NASA',
},
{
    avatarIcon: './images/tesla.jpg',
    userName: 'Tesla',
    handle: 'Tesla',
},
];

    return (
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
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