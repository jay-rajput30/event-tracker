import "./EventCard.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { formatTime } from "../../../utils/utils";
import { useEvent } from "../../../contexts/EventProvider";

const EventCard = ({ item, showEditForm, setShowEditForm }) => {
  const { color, description, location, time, title } = item;
  const { eventDispatch } = useEvent();

  const editEventHandler = (item) => {
    // console.log({ item });
    setShowEditForm((prev) => ({ ...prev, status: true, data: item }));
  };
  const cancelEventHandler = (item) => {
    // console.log("inside delete event handler");
    eventDispatch({ type: "REMOVE", payload: item });
  };
  return (
    <div className="event--card" style={{ backgroundColor: `${color}` }}>
      <div className="time--container">
        <EventTime time={time} />
        <div className="icon--container">
          <IconContext.Provider value={{ className: "event--edit" }}>
            <FiEdit2 onClick={() => editEventHandler(item)} />
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "event--delete" }}>
            <FiTrash2 onClick={() => cancelEventHandler(item)} />
          </IconContext.Provider>
        </div>
      </div>

      <EventTitle title={title} />
      <EventDescription description={description} />
      <EventLocation location={location} />
    </div>
  );
};

export default EventCard;

export const EventTime = ({ time }) => {
  return <h1 className="event--time">{formatTime(time)}</h1>;
};

export const EventTitle = ({ title }) => {
  return <h3 className="event--title">{title}</h3>;
};

export const EventDescription = ({ description }) => {
  return <p className="event--description">{description}</p>;
};

export const EventLocation = ({ location }) => {
  return <h5 className="event--location">{location}</h5>;
};
