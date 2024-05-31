import React from "react";
import "./NewsLatter.css";
const NewsLatter = () => {
  return (
    <div className="news-latter">
      <h1>GET EXCUSIVE OFFER ON YOUR <span>EMAIL</span></h1>
      <p>Subscribe to our newslatter and stay updated</p>
      <br/>
      <div>
        <input type="emali" placeholder="You Emai id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLatter;
