import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="CookWare"
          title="CookWare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Refrigirator/Fridge"
          title="Refrigirator/Fridge"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Applicance"
          title="Applicance"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
