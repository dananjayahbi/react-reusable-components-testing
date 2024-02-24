import React from "react";
import { Button } from "antd";

const Home = () => {
  return (
    <>
      <div>
        <h1 style={{fontFamily: "sans-serif", textAlign: "center"}}>Content</h1>

        <div>
          <a href="/forms"><Button type="primary" style={{margin: "0 10px"}}>Forms</Button></a>
          <a href="/pageSections"><Button type="primary" style={{margin: "0 10px"}}>Page Sections</Button></a>
        </div>
      </div>
    </>
  )
};

export default Home;
