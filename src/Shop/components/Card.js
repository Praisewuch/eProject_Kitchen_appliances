// import { BsFillBagFill } from "react-icons/bs";

// const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <h3 className="card-title">{title}</h3>
//           <section className="card-reviews">
//             {star} {star} {star} {star}
//             <span className="total-reviews">{reviews}</span>
//           </section>
//           <section className="card-price">
//             <div className="price">
//               <del>{prevPrice}</del> {newPrice}
//             </div>
//             <div className="bag">
//               <BsFillBagFill className="bag-icon" />
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Card;

import { BsFillBagFill, BsHeart, BsArrowRepeat, BsSearch } from "react-icons/bs";
import './card.css'
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <div>

        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
        </div>

        {/* Icons on the right side */}
        
        <div className="side-icons">
          <button className="icon-btn">
            <BsHeart className="side-icon love-icon" />
          </button>
          <button className="icon-btn">
            <BsArrowRepeat className="side-icon refresh-icon" />
          </button>
          <button className="icon-btn">
            <BsSearch className="side-icon search-icon" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;

