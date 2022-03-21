import React from "react";

const PostSummaryList = () => {
    const exploreItems = [
        { topic: 'Web Development', userName: 'ReactJS', time: '2h', title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs', image: 'images/java.jpg' },
        { topic: '222', userName: 'JavaScript', time: '1 day', title: 'JavaScript is programming language that can run on browsers as well as desktops', image: 'images/js.png', tweets: '123K' },
        { topic: 'Web Development', userName: '', title: 'jQuery', time: 'last week', image: 'images/jquery.png', tweets: '122K' },
        { topic: 'Web Development', userName: 'NodeJS', title: '', time: 'last month', image: 'images/nodejs.jpg', tweets: '120K', },
    ];

    return (
        <ul className="list-group summary">
          {exploreItems.map((item,index) => 
              <li className="list-group-item bg"  key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div className="txt-info">
                      <p className="topic">{item.topic}</p>
                      <p className="userName">
                          <span>{item.userName}</span>
                          <i className="rad-fill"></i>
                          <span className="time">- {item.time}</span>
                      </p>
                      <p className="title">{item.title}</p>
                  </div>
                  <img style={{width: 100, height: 100, borderRadius: '6px'}}  src={item.image} alt='' />
              </li>
              )
          }
      </ul>
    );
}
export default PostSummaryList;
