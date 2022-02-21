import "./Button.css";

const Button = ({ setShowForm }) => {
  const btnClickHandler = () => {
    setShowForm((prev) => true);
  };
  return (
    <button className="create-button" onClick={btnClickHandler}>
      +
    </button>
  );
};

export default Button;
