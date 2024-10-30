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
      <div className="gridbox">
        <div className="row1">
          <div className="box2 image1">
            <h2 style={{ marginBottom: -2, marginLeft: -410, marginTop: 45 }}>
              Cutlery
            </h2>
            <p style={{ marginLeft: -420 }} className="underline">
              Shop now
            </p>
          </div>
          <div className="box3 image2">
            <h2>Apron</h2>
            <p className="underline">Shop now</p>
          </div>
          <div className="box3 image3">
            <h2>Napkins</h2>
            <p className="underline">Shop now</p>
          </div>
        </div>

        <div className="row2">
          <div className="box3 image4">
            <h2>Pitchers</h2>
            <p className="underline">Shop now</p>
          </div>
          <div className="box2 image5">
            <h2 style={{ marginBottom: -2, marginLeft: -370, marginTop: 45 }}>
              Dinnerware
            </h2>
            <p style={{ marginLeft: -420 }} className="underline">
              Shop now
            </p>
          </div>
          <div className="box3 image6">
            <h2 style={{ marginLeft: -100 }}>Accessories</h2>
            <p className="underline">Shop now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
