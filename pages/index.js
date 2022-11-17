import React from "react";
import Feed from "../Components/Feed/Feed.jsx";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "../styles/Home.module.css";

export default function index({ data }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <Navbar />
        <div className="feed">
          <Feed data={data} />
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
