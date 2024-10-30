// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import img from "../images/mug.png"
import img2 from "../images/apron.png"
import img3 from "../images/gloves.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules from swiper
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      className="swipe"
      modules={[Autoplay]} // Use the correct module import
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // Set the autoplay delay (in ms)
        disableOnInteraction: false, // Autoplay will continue even if the user interacts
      }}
      loop={true} // Enable looping
    >
      <SwiperSlide className="boxes">
        <Slide
          img={img}
          height={368}
          percent={20}
          text={"Serving Dishes"}
          text2={"& Ceramic Mugs"}
        />
      </SwiperSlide>
      <SwiperSlide className="boxes">
        <Slide
          img={img2}
          height={490}
          percent={10}
          text={"Canvas Cross Back"}
          text2={"Apron Collection"}
        />
      </SwiperSlide>
      <SwiperSlide className="boxes">
        <Slide
          img={img3}
          height={480}
          percent={50}
          text={"Linen Oven Gloves"}
          text2={"In The Kitchen"}
        />
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default SwiperComponent;
