import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import WhoToFollowList from "../WhoToFollowList";
const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <NavigationSidebar/>
            <PostList/>
            <WhoToFollowList/>
        </div>
    );
};
export default HomeScreen;