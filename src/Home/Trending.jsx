import React from "react";
import Card from "./Card.jsx";
import img from "../images/card-image-1.jpg";
import img2 from "../images/card-image-2.jpg"
import img3 from "../images/card-image3.jpg"
import img4 from "../images/card-image4.jpg"
const Trending = () => {
  return (
    <div className="Trending">
      <h1>New Trending Products</h1>
      <p>
        Accumans vitae pede lacus ut ullamcorper sollictudin qulsque libero est.
      </p>
      <div className="box-slider">
        <Card
          img={img}
          type={"Console"}
          text1={"Laudantium enim fringilla dingnissim"}
          text2={"available"}
          stars={2}
          price={"86.00"}
        />
        <Card
          img={img2}
          type={"Game"}
          text1={"Auctor gravida enim pellantesque"}
          text2={"essentially unchanged"}
          stars={0}
          price={"85.00"}
        />
        <Card
          img={img3}
          type={"Toys"}
          text1={"Kaoreet lobortis sagittis laoreet"}
          text2={"embarrassing"}
          stars={1}
          price={"95.00"}
        />
        <Card
          img={img4}
          type={"Console"}
          text1={"Laudantium enim fringilla dingnissim"}
          text2={"available"}
          stars={0}
          price={"89.00"}
        />
      </div>
      <div className="gridboxes">
        <div className="rowe1">
          <div className="boxe2 images1 disp">
            <h2>
              Cutlery
            </h2>
            <a href="/shops" className="underline">
              Shop now
            </a>
          </div>
          <div className="boxe3 images2">
            <h2>Apron</h2>
            <p><a href="/shops" className="underline">Shop now</a></p>
          </div>
          <div className="boxe3 images3">
            <h2>Napkins</h2>
            <p><a href="/shops" className="underline">Shop now</a></p>
          </div>
        </div>

        <div className="rowe2">
          <div className="boxe3 images4">
            <h2>Pitchers</h2>
            <p><a href="/shops" className="underline">Shop now</a></p>
          </div>
          <div className="boxe2 images5 disp">
            <h2>
              Dinnerware
            </h2>
            <a href="/shops" className="underline">
              Shop now
            </a>
          </div>
          <div className="boxe3 images6">
            <h2 style={{marginLeft: -90}}>Accessories</h2>
            <p><a href="/shops" className="underline">Shop now</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
