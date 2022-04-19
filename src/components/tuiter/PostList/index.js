import React from "react";

const PostList = () => {
  const Postitem = [{
    avatarIcon: "https://image.cnbcfm.com/api/v1/image/106820840-16100466222021-01-07t183104z_1584998285_rc263l9bivig_rtrmadp_0_usa-stocks-tesla-facebook.jpeg?v=1610046717&w=929&h=523&ffmt=webp",
    username: "Elon Musk",
    handle: "@elonmusk",
    time: "23h",
    description: "Amazing show about @lnspiration4x mission!",
    image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/30/thumbs_b_c_a4a6996640e91d4ff86a71f5d9d9f84b.jpg?v=225920",
    comment: "4.2k",
    retweet: "3.5k",
    likes: "37.5k"
  },
  {
    avatarIcon: "https://image.cnbcfm.com/api/v1/image/106820840-16100466222021-01-07t183104z_1584998285_rc263l9bivig_rtrmadp_0_usa-stocks-tesla-facebook.jpeg?v=1610046717&w=929&h=523&ffmt=webp",
    username: "Elon Musk",
    handle: "@elonmusk",
    time: "23h",
    description: "Amazing show about @lnspiration4x mission!Amazing show about @lnspiration4x mission!",
    image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/30/thumbs_b_c_a4a6996640e91d4ff86a71f5d9d9f84b.jpg?v=225920",
    comment: "14.2k",
    retweet: "5.5k",
    likes: "32.5k"
  }
  ];

  return (
    <div style={{ width: "50%" }}>{
      Postitem.map((tuit) => (
        <div style={{ display: "flex", borderBottom: "1px solid #000", padding: "10px 0px" }}>
          <img alt="" style={{ width: 40, height: 40, borderRadius: 40, objectFit: "cover", backgroundColor: "#fff" }} src={tuit.avatarIcon}></img>
          <div style={{ marginLeft: 10, flex: 1 }}>
            <div style={{ display: "flex" }}>
              <div style={{ color: "#fff", fontWeight: "bold" }}>{tuit.username}</div>
              <div style={{ color: "#888", flex: 1 }}>{tuit.handle}</div>
            </div>
            <div style={{ color: "#fff" }}>{tuit.description}</div>
            <img alt="" style={{ width: "100%", marginTop: 10, borderRadius: 10 }} src={tuit.image}></img>
            <div style={{ display: "flex", marginTop: 10 }}>
              <div style={{ display: "flex", alignItems: "center", marginRight: 60 }}>
                <img alt="" style={{ width: 20, height: 20 }} src={require("../images/comment.png")}></img>
                <div style={{ color: "#fff", marginLeft: 5 }}>{tuit.comment}</div>
                <div style={{ color: "#fff" }}>{tuit.comments}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginRight: 60 }}>
                <img alt="" style={{ width: 20, height: 20 }} src={require("../images/retweet.png")}></img>
                <div style={{ color: "#fff", marginLeft: 5 }}>{tuit.retweet}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginRight: 60 }} >
                <img alt="" style={{ width: 20, height: 20 }} src={require("../images/like.png")}></img>
                <div style={{ color: "#fff", marginLeft: 5 }}>{tuit.likes}</div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginRight: 60 }}>
                <img alt="" style={{ width: 20, height: 20 }} src={require("../images/share.png")}></img>
              </div>
            </div>
          </div>

        </div>
      ))
    }
    </div>
  )
}

export default PostList;
