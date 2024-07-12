import React from "react";
import "./work.css";
import Ronaldo from "../../assets/workPics/ronaldo.jpeg";
import malayaham from "../../assets/workPics/malayaham.jpeg";
import dashboard from "../../assets/workPics/dashboard.jpeg";
import Components from "../../assets/workPics/components.jpeg";

const Work = () => {
  return (
    <div className="workPage">
      <div className="workContainer">
        <div className="heading">
          <h1>Work</h1>
        </div>
        <div className="workCard">
          <div className="workCardImage">
            <img className="img" src={dashboard} alt="workImage" />
          </div>
          <div className="TextContainer">
            <div className="workCardTitle">
              <h2>Designing Dashboards</h2>
            </div>
            <div className="middleText">
              <div className="year">2020</div>
              <div className="entity">dashboard</div>
            </div>
            <div className="workCardText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quisquam tempora maiores iusto quasi doloribus? Explicabo
                tenetur eos aliquid magnam!
              </p>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCardImage">
            <img className="img" src={Ronaldo} alt="workImage" />
          </div>
          <div className="TextContainer">
            <div className="workCardTitle">
              <h2>Vibrant Portraits of 2020</h2>
            </div>
            <div className="middleText">
              <div className="year">2018</div>
              <div className="entity">Illustrations</div>
            </div>
            <div className="workCardText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quisquam tempora maiores iusto quasi doloribus? Explicabo
                tenetur eos aliquid magnam!
              </p>
            </div>
          </div>
        </div>

        <div className="workCard">
          <div className="workCardImage">
            <img className="img" src={malayaham} alt="workImage" />
          </div>
          <div className="TextContainer">
            <div className="workCardTitle">
              <h2>36 Days of Malayalam type</h2>
            </div>
            <div className="middleText">
              <div className="year">2018</div>
              <div className="entity">Typography</div>
            </div>
            <div className="workCardText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quisquam tempora maiores iusto quasi doloribus? Explicabo
                tenetur eos aliquid magnam!
              </p>
            </div>
          </div>
        </div>

        <div className="workCard">
          <div className="workCardImage">
            <img className="img" src={Components} alt="workImage" />
          </div>
          <div className="TextContainer">
            <div className="workCardTitle">
              <h2>Components</h2>
            </div>
            <div className="middleText">
              <div className="year">2018</div>
              <div className="entity">Components, Design</div>
            </div>
            <div className="workCardText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quisquam tempora maiores iusto quasi doloribus? Explicabo
                tenetur eos aliquid magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
