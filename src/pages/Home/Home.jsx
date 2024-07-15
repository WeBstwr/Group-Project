import React from "react";
import "./home.css";
import Hero from "./Hero";
import RecentPosts from "./RecentPosts";
import Work from "../Work/Work";

function Home() {
  return (
    <section className="home">
      <Hero />
      <RecentPosts />
      <Work />
    </section>
  );
}

export default Home;
