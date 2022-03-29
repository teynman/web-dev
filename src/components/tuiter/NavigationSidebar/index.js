import React from "react";

const NavigationSidebar = ({
                               active = 'explore'
                           }
) => {
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>

                <a className={`list-group-item
        ${active === 'home' ? 'active' : ''}`} href="/tuiter"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</a>

                <a className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`} href="/tuiter/explore"><i className="fa fa-hashtag"></i>&nbsp;&nbsp;Explore</a>

                <a className={`list-group-item
        ${active === 'notifications' ? 'active' : ''}`} href="/"><i
                    className="fa fa-bell"></i>&nbsp;&nbsp;Notifications</a>

                <a className={`list-group-item
        ${active === 'messages' ? 'active' : ''}`} href="/"><i
                    className="fa fa-envelope"></i>&nbsp;&nbsp;Messages</a>

                <a className={`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`} href="/"><i
                    className="fa fa-bookmark"></i>&nbsp;&nbsp;Bookmarks</a>

                <a className={`list-group-item
        ${active === 'lists' ? 'active' : ''}`} href="/"><i
                    className="fa fa-list-ul"></i>&nbsp;&nbsp;Lists</a>

                <a className={`list-group-item
        ${active === 'profile' ? 'active' : ''}`} href="/"><i className="fa fa-user"></i>&nbsp;&nbsp;Profile</a>

                <a className={`list-group-item
        ${active === 'more' ? 'active' : ''}`} href="/"><i className="fa fa-circle"></i>&nbsp;&nbsp;More</a>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
