import "./Date.css";
import { DATES } from "../../utils/utils";
import { useNavigate } from "react-router";

const Date = () => {
  const navigate = useNavigate();
  const dateClickHandler = (id) => {
    navigate(`/singleDate/${id}`);
  };
  return (
    <section className="date--container">
      {DATES.map((date, idx) => {
        return (
          <div
            key={idx}
            className="date--item--container"
            onClick={() => dateClickHandler(date)}
          >
            <p className="date--item">{date}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Date;
