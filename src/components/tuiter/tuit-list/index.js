import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {updateTuit, createTuit, deleteTuit, findAllTuits}
    from "../../actions/tuits-actions";
import TuitListItem
    from "./tuit-list-item";
// import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), [dispatch]);
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    return (
        <div>
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
                      onChange={(e) =>
                          setNewTuit({
                                         ...newTuit,
                                         tuit: e.target.value
                                     })}/>
            <ul className="ttr-tuits list-group" style={{background: "#222", padding: 10}}>
                {
                    tuits.map && tuits.map((tuit,i) =>
                                               <div key={i}>
                                                   <TuitListItem key={tuit._id}
                                                                 tuit={tuit}/>
                                                   <i className="fas fa-remove float-end"
                                                      onClick={() => deleteTuit(
                                                          dispatch, tuit)}/>
                                                   <div>
                                                       Likes: {tuit.likes}
                                                       <i onClick={() => updateTuit(dispatch, {
                                                           ...tuit,
                                                           likes: tuit.likes + 1
                                                       })} className="far fa-thumbs-up ms-2"/>
                                                   </div>
                                               </div>)
                }

            </ul>
        </div>

    );
}

export default TuitList;