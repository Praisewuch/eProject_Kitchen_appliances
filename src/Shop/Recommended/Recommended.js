import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Buffet" title="CookWare" />
          <Button onClickHandler={handleClick} value="fridge" title="Refrigirator/Fridge" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
