import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'explore'
                           }
) => {
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>

                <Link to="/tuiter/home" className={`list-group-item
        ${active === 'home' ? 'active' : ''}`} href="/"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</Link>

                <Link to="/tuiter/explore" className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`} href="/"><i className="fa fa-hashtag"></i>&nbsp;&nbsp;Explore</Link>

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
