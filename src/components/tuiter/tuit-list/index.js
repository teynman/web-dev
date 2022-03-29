import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./tuit-list-item";
// import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

        console.log("tuits",tuits);

    return (
        <ul className="ttr-tuits list-group" style={{background:"#222",padding:10}}>
            {
                tuits.map && tuits.map(tuit =>
                                           <TuitListItem key={tuit._id}
                                                         tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;