const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                    <a class="list-group-item bg"><i class="fa fa-home"></i>&nbsp;&nbsp;Home</a>
                    <a class="list-group-item bg"><i class="fa fa-hashtag"></i>&nbsp;&nbsp;Explore</a>
                    <a class="list-group-item bg"><i class="fa fa-bell"></i>&nbsp;&nbsp;Notifications</a>
                    <a class="list-group-item bg"><i class="fa fa-envelope"></i>&nbsp;&nbsp;Messages</a>
                    <a class="list-group-item bg"><i class="fa fa-bookmark"></i>&nbsp;&nbsp;Bookmarks</a>
                    <a class="list-group-item bg"><i class="fa fa-list-ul"></i>&nbsp;&nbsp;Lists</a>
                    <a class="list-group-item bg"><i class="fa fa-user"></i>&nbsp;&nbsp;Profile</a>
                    <a class="list-group-item bg"><i class="fa fa-circle"></i>&nbsp;&nbsp;More</a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
