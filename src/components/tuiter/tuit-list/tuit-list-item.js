import React from "react";
const TuitListItem = (props) => {
  const { tuit } = props;
  return (
    <div style={{display:"flex",borderBottom:"1px solid #000",padding:"10px 0px"}}>
      <img alt="" style={{width:40,height:40,borderRadius:40,objectFit:"cover",backgroundColor:"#fff"}} src={tuit['logo-image']}></img>
      <div style={{marginLeft:10}}>
        <div style={{display:"flex"}}>
          <div style={{color:"#fff",fontWeight:"bold"}}>{tuit.topic}</div>
          <div style={{color:"#888"}}>@{tuit.handle}</div>
        </div>
        <div style={{color:"#fff"}}>{tuit.title}</div>
        <img alt="" style={{width:"100%",marginTop:10,borderRadius:10}} src={tuit['avatar-image']}></img>
        <div style={{display:"flex",marginTop:10}}>
          <div style={{display:"flex",alignItems:"center",marginRight:60}}>
            <img alt="" style={{width:20,height:20}} src={require("../images/comment.png")}></img>
            <div style={{color:"#fff",marginLeft:5}}>{tuit.stats.retuits}</div>
            <div style={{color:"#fff"}}>{tuit.stats.comments}</div>
          </div>
          <div style={{display:"flex",alignItems:"center",marginRight:60}}>
            <img alt="" style={{width:20,height:20}} src={require("../images/retweet.png")}></img>
            <div style={{color:"#fff",marginLeft:5}}>{tuit.stats.retuits}</div>
          </div>
          <div style={{display:"flex",alignItems:"center",marginRight:60}}>
            <img alt="" style={{width:20,height:20}} src={require("../images/like.png")}></img>
            <div style={{color:"#fff",marginLeft:5}}>{tuit.stats.likes}</div>
          </div>
         
          <div style={{display:"flex",alignItems:"center",marginRight:60}}>
            <img alt="" style={{width:20,height:20}} src={require("../images/share.png")}></img>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TuitListItem;