import React from "react";

function RecentPosts() {
  return (
    <section className="recent-posts">
      <div className="recent-posts-title">
        <h4>Recent posts</h4>
        <div className="view-all">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="recent-posts-main-container">
        <div className="recent-posts-container">
          <div className="recent-posts-container-title">
            <h2>Making a design system from scratch</h2>
          </div>
          <div className="recent-posts-container-date-and-description">
            <p>12 feb 2020 | design, pattern</p>
          </div>
          <div className="recent-posts-container-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              sapiente nam, consectetur magni eum minus qui animi consequatur.
              Eum, dolorem dicta molestias unde dolore inventore, natus aperiam,
              nostrum cumque deleniti quibusdam. Sunt vel eligendi nemo.
            </p>
          </div>
        </div>

        <div className="recent-posts-container">
          <div className="recent-posts-container-title">
            <h2>Making a design system from scratch</h2>
          </div>
          <div className="recent-posts-container-date-and-description">
            <p>12 feb 2020 | design, pattern</p>
          </div>
          <div className="recent-posts-container-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              sit esse exercitationem quo eligendi architecto at aliquam
              consequuntur. Quasi quae illum eum eius, laboriosam quo vel vero
              consequatur deleniti quibusdam nesciunt, recusandae et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentPosts;
