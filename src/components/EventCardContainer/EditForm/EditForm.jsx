import { useState } from "react";
import { useEvent } from "../../../contexts/EventProvider";
import { TO_SECONDS } from "../../../utils/utils";
import "./EditForm.css";
import { DATES } from "e:/react/my-events/src/utils/constants";

const EditForm = ({ showEditForm, setShowEditForm }) => {
  const { allEvents, eventDispatch } = useEvent();
  const { id, time, title, date, description, location } = showEditForm.data;
  console.log({ id, time, title, date, description, location });
  const [data, setData] = useState({
    title: "",
    location: "",
    date: null,
    time: null,
    description: "",
    color: null,
  });

  const cancelClickHandler = () => {
    setShowEditForm((prev) => ({ ...prev, status: false }));
  };

  const createClickHandler = () => {
    console.log({ data });
    setShowEditForm((prev) => ({ ...prev, status: false, data }));
    eventDispatch({ type: "EDIT", payload: data });
  };

  const daySelect = (
    <select
      className="edit--form--select--date"
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

  return (
    <form className="edit--event--form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="edit--form--input--title"
        placeholder="add title"
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
        value={title}
      />
      <input
        type="text"
        className="edit--form--input--location"
        placeholder="add location"
        onChange={(e) =>
          setData((prev) => ({ ...prev, location: e.target.value }))
        }
        value={location}
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
        value={time}
      />
      <textarea
        rows="4"
        className="edit--form--input--description"
        placeholder="add description"
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
        value={description}
      />
      <div className="edit--form--color--group--container">
        <div
          className="edit--form--color--item color--item--rose"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fda4af" }))}
        ></div>
        <div
          className="edit--form--color--item color--item--blue"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#60a5fa" }))}
        ></div>
        <div
          className="edit--form--color--item color--item--yellow"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fcd34d" }))}
        ></div>
        <div
          className="edit--form--color--item color--item--teal"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#5eead4" }))}
        ></div>
      </div>
      <div className="edit--form--btn--group">
        <button
          className="edit--form--btn--create"
          onClick={createClickHandler}
        >
          create
        </button>
        <button
          className="edit--form--btn--cancel"
          onClick={cancelClickHandler}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
