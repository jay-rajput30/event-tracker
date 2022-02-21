import "./Days.css";
import { DAYS } from "../../utils/utils";
const Days = () => {
  // const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return (
    <main className="days--container">
      {DAYS.map((day, idx) => (
        <p key={idx} className="day--item">
          {day}
        </p>
      ))}
    </main>
  );
};

export default Days;
