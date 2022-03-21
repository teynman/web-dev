import './ExploreScreen/explore.css';
import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import ExploreScreen from "./ExploreScreen";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
    return(
        <div className="row mt-2">
            <NavigationSidebar active="home"/>
            <ExploreScreen/>
            <WhoToFollowList/>
        </div>
    )
};
export default Tuiter;

