import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';


const Profile = () => {
  const tuits = useSelector(
      state => state.tuits);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
                                           firstName: 'Jose',
                                           lastName: 'Annunziato',
                                           handle: 'jannunzi',
                                           profilePicture: 'jose.png',
                                           bannerPicture: 'polyglot.png',
                                           bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
                                           website: 'youtube.com/webdevtv',
                                           location: 'Boston, MA',
                                           dateOfBirth: '7/7/1968',
                                           dateJoined: '4/2009',
                                           followingCount: 312,
                                           followersCount: 180

                                         });

  console.log("tuits", tuits);

  return (
      <div style={{ background: "#222", padding: 10, position: "relative" }}>
        <div style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img alt="" style={{ width: 20, height: 20, objectFit: "contain" }} src="/tuiter/close.png"  onClick={()=>{
              navigate('/tuiter/profile');
            }} />
            <span style={{ color: "#fff", marginLeft: 20, fontWeight: "bold" }}>Edit profile</span>
          </div>
          <button style={{ backgroundColor: "#fff", border: "none", borderRadius: 40, color: "#000", padding: "5px 10px" }} >
            Save
          </button>
        </div>
        <img alt="" style={{ width: "100%", height: 200, objectFit: "cover" }} src="/tuiter/2.jpg" />
        <img alt="" style={{ width: 20, height: 20, position: "absolute", left: "50%", top: 150 }} src="/tuiter/paishe.png" />

        <div style={{ display: "flex", justifyContent: "space-between", position: 'relative' }}>

          <img alt="" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50px", marginTop: "-40px", marginLeft: 20 }} src="/tuiter/1.jpg" />
          <img alt="" style={{ width: 20, height: 20, position: "absolute", left: "60px", top: 5 }} src="/tuiter/paishe.png" />


        </div>
        <div>
          <div style={{ color: "#fff", fontSize: "18px", border: "1px solid #333", borderRadius: 5, margin: "10px 0px", padding: "5px 5px" }}>
            <div style={{ color: "#ddd", fontSize: "15px" }}>Name</div>
            <input style={{ backgroundColor: "transparent",outline:"none",width:"100%", border: "none", color: "#fff" }} value={profile.firstName} onChange={(e) => {
              setProfile({
                           ...profile,
                           firstName: e.target.value
                         })
            }}></input>

          </div>

          <div style={{ color: "#ddd", fontSize: "15px", border: "1px solid #333", borderRadius: 5, margin: "10px 0px", padding: "5px 5px" }}>
            <div style={{ color: "#ddd", fontSize: "15px" }}>Name</div>
            <input style={{ backgroundColor: "transparent",outline:"none",width:"100%", border: "none", color: "#fff" }} value={profile.bio} onChange={(e) => {
              setProfile({
                           ...profile,
                           bio: e.target.value
                         })
            }}></input>
          </div>
          <div style={{ color: "#ddd", fontSize: "15px", border: "1px solid #333", borderRadius: 5, margin: "10px 0px", padding: "5px 5px" }}>
            <div style={{ color: "#ddd", fontSize: "15px" }}>location</div>
            <input style={{ backgroundColor: "transparent",outline:"none",width:"100%", border: "none", color: "#fff" }} value={profile.location} onChange={(e) => {
              setProfile({
                           ...profile,
                           location: e.target.value
                         })
            }}></input>
          </div>
          <div style={{ color: "#ddd", fontSize: "15px", border: "1px solid #333", borderRadius: 5, margin: "10px 0px", padding: "15px 5px" }}>
            <input style={{ backgroundColor: "transparent",outline:"none",width:"100%", border: "none", color: "#ddd" }} value={profile.website} onChange={(e) => {
              setProfile({
                           ...profile,
                           website: e.target.value
                         })
            }}></input>
          </div>

          <div style={{ color: "#ddd", fontSize: "15px", borderRadius: 5, padding: "5px 5px" }}>
            <div style={{ color: "#ddd", fontSize: "15px" }}>
              Birth date.<span style={{color:"#7687ff",marginLeft:10}}>Edit</span>
            </div>
            <div style={{ color: "#ddd", fontSize: "20px" }}>
              {profile.dateOfBirth}
            </div>
          </div>

        </div>
      </div>
  );
}

export default Profile;