import React, { useState } from "react";
import { useSelector } from "react-redux";


const Profile = () => {
  const tuits = useSelector(
    state => state.tuits);

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
    <div style={{ background: "#222", padding: 10 }}>
      <img alt="" style={{ width: "100%", height: 200, objectFit: "cover" }} src="/tuiter/2.jpg" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img alt="" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50px", marginTop: "-40px", marginLeft: 20 }} src="/tuiter/1.jpg" />
        <button style={{ backgroundColor: "#2a9fd6", border: "none", borderRadius: 40, color: "#fff", padding: "5px 10px", marginTop: 20 }} >
          Set up profile
        </button>
      </div>
      <div>
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
          {profile.firstName}
        </div>
        <div style={{ color: "#fff", fontSize: "15px" }}>
          @{profile.handle}
        </div>
        <div style={{ color: "#ddd", fontSize: "15px", marginTop: 10  }}>
          {profile.bio}
        </div>
        <div style={{ color: "#fff", fontSize: "15px", display: "flex", alignItems: "center", marginTop: 10 }}>
          <img alt="" style={{ width: "20px", height: "20px", objectFit: "cover", marginRight: 10 }} src="/tuiter/date.png" />joined {profile.dateJoined} {profile.location} {profile.dateOfBirth}
        </div>
        <div style={{ color: "#fff", fontSize: "15px" , marginTop: 10 }}>
          <span  style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>{profile.followingCount}</span> Following <span  style={{ color: "#fff", fontWeight: "bold", fontSize: "16px",marginLeft:20 }}>{profile.followingCount}</span> Followers
        </div>
      </div>
    </div>
  );
}

export default Profile;