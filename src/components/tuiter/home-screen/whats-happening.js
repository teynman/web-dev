import React, { useState } from "react";
import { useDispatch }
  from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
    = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening,
      "logo-image":"/tuiter/1.jpg"
    });
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <img alt="" src="/tuiter/1.jpg" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "25px" }} />
        <textarea style={{ width: "100%",color:"#fff", backgroundColor: "transparent",outline:"none", border: "none", padding: 10,borderBottom:"1px solid #666" }} placeholder="What's happing?" value={whatsHappening}
          onChange={(event) =>
            setWhatsHappening(event.target.value)}>
        </textarea>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20,marginTop:10 }}>
        <div style={{ display: "flex", marginLeft: 60,alignItems:"center" }}>
          <img alt="" src="/tuiter/image.png" style={{ width: 20, height: 20, objectFit: "contain",marginRight:10 }} />
          <img alt="" src="/tuiter/zhexian.png" style={{ width: 20, height: 20, objectFit: "contain",marginRight:10 }} />
          <img alt="" src="/tuiter/xiaonian.png" style={{ width: 20, height: 20, objectFit: "contain",marginRight:10 }} />
          <img alt="" src="/tuiter/riji.png" style={{ width: 16, height: 16, objectFit: "contain",marginRight:10 }} />
        </div>
        <button style={{ backgroundColor: "#2a9fd6", border: "none", borderRadius: 40, color: "#fff", padding: "5px 10px" }} onClick={tuitClickHandler}>
          Tweet
        </button>
      </div>

    </>
  );
}
export default WhatsHappening;