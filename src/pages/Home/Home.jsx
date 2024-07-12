import React from "react";
import "./home.css";
import Hero from "./Hero";
import RecentPosts from "./RecentPosts";
import Featured from "./Featured";

function Home() {
  return (
    <section className="home">
      <Hero />
      <RecentPosts />
      <Featured />
    </section>
  );
}

export default Home;
