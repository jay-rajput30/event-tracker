import { useState } from "react";
import { DATES, TO_SECONDS } from "../../utils/utils";
import "./Event.css";
import { useEvent } from "../../contexts/EventProvider";
import { useId } from "react-id-generator";
const Event = ({ setShowForm }) => {
  const { allEvents, eventDispatch } = useEvent();
  const [data, setData] = useState({
    title: "",
    location: "",
    date: null,
    time: null,
    description: "",
    color: null,
  });

  const [id] = useId();
  const cancelClickHandler = () => {
    setShowForm((prev) => false);
  };

  const createClickHandler = () => {
    const newData = { ...data, id };
    console.log({ newData });
    eventDispatch({ type: "ADD", payload: newData });

    setShowForm((prev) => false);
  };

  const daySelect = (
    <select
      className="select--date"
      onChange={(e) =>
        setData((prev) => ({ ...prev, date: parseInt(e.target.value) }))
      }
    >
      {DATES.map((item, idx) => {
        return (
          <option key={idx} value={`${item}`}>
            {item}
          </option>
        );
      })}
    </select>
  );

  console.log("all events value");
  console.log({ allEvents });
  return (
    // <div className="event--form--container">

    <form className="event--form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form--input--title"
        placeholder="add title"
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="text"
        className="form--input--location"
        placeholder="add location"
        onChange={(e) =>
          setData((prev) => ({ ...prev, location: e.target.value }))
        }
      />
      {daySelect}
      <input
        type="time"
        min="00:00"
        max="24:00"
        id="event--time"
        onChange={(e) =>
          setData((prev) => ({ ...prev, time: TO_SECONDS(e.target.value) }))
        }
      />
      <textarea
        rows="4"
        className="form--input--description"
        placeholder="add description"
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <div className="color--group--container">
        <div
          className="color--item color--item--rose"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fda4af" }))}
        ></div>
        <div
          className="color--item color--item--blue"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#60a5fa" }))}
        ></div>
        <div
          className="color--item color--item--yellow"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fcd34d" }))}
        ></div>
        <div
          className="color--item color--item--teal"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#5eead4" }))}
        ></div>
      </div>
      <div className="btn--group">
        <button className="btn--create" onClick={createClickHandler}>
          create
        </button>
        <button className="btn--cancel" onClick={cancelClickHandler}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default Event;
