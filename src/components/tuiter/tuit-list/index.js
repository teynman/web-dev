import React, { useEffect, useState } from "react";
import { useDispatch, useSelector }
  from "react-redux";
import { updateTuit, createTuit, deleteTuit, findAllTuits }
  from "../../actions/tuits-actions";
import TuitListItem
  from "./tuit-list-item";
// import './tuits.css';

const TuitList = () => {
  const tuits = useSelector(
    state => state.tuits);



  const dispatch = useDispatch();

  // let [whatsHappening, setWhatsHappening]
  //   = useState('');

  useEffect(() => findAllTuits(dispatch), [dispatch]);
  const [newTuit, setNewTuit] =
    useState({ tuit: 'New tuit' });

  return (
    <div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <img alt="" src="../images/1.jpg" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "25px" }} />
        <textarea style={{ width: "100%", color: "#fff", backgroundColor: "transparent", outline: "none", border: "none", padding: 10, borderBottom: "1px solid #666" }} placeholder="What's happing?" value={newTuit.tuit}
          onChange={(event) =>
            setNewTuit({
              tuit: event.target.value
            })}>
        </textarea>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, marginTop: 10 }}>
        <div style={{ display: "flex", marginLeft: 60, alignItems: "center" }}>
          <img alt="" src="../images/image.png" style={{ width: 20, height: 20, objectFit: "contain", marginRight: 10 }} />
          <img alt="" src="../images/zhexian.png" style={{ width: 20, height: 20, objectFit: "contain", marginRight: 10 }} />
          <img alt="" src="../images/xiaonian.png" style={{ width: 20, height: 20, objectFit: "contain", marginRight: 10 }} />
          <img alt="" src="../images/riji.png" style={{ width: 16, height: 16, objectFit: "contain", marginRight: 10 }} />
        </div>
        <button style={{ backgroundColor: "#2a9fd6", border: "none", borderRadius: 40, color: "#fff", padding: "5px 10px" }} onClick={() => {
          createTuit(dispatch, newTuit);
        }}>
          Tweet
        </button>
      </div>
      {/* <button onClick={() =>
        createTuit(dispatch, newTuit)}
        className="btn btn-primary float-end">
        Tuit
      </button>
      <textarea className="form-control w-75"
        onChange={(e) =>
          setNewTuit({
            ...newTuit,
            tuit: e.target.value
          })} /> */}
      <ul className="ttr-tuits list-group" style={{ background: "#222", padding: 10 }}>
        {
          tuits.map && tuits.map((tuit, i) =>
            <div key={i}>
              <TuitListItem key={tuit._id}
                tuit={tuit} />
              <i className="fas fa-remove float-end"
                onClick={() => deleteTuit(
                  dispatch, tuit)} />
              {/* <div>
                Likes: {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                  ...tuit,
                  likes: tuit.likes + 1
                })} className="far fa-thumbs-up ms-2" />
              </div> */}
            </div>)
        }

      </ul>
    </div>

  );
}

export default TuitList;