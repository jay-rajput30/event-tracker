import { useEvent } from "../../contexts/EventProvider";
import EditForm from "./EditForm/EditForm";
import EventCard from "./EventCard/EventCard";
import "./EventCardContainer.css";

const EventCardContainer = ({ id, showEditForm, setShowEditForm }) => {
  const { allEvents } = useEvent();

  const filteredEvents = allEvents?.filter(
    (item) => item.date === parseInt(id)
  );
  //  {...item, TO_SECONDS(item.time)}

  // const TO_SECONDS = (time) => {
  //   let arr = time.split(":");
  //   let toSeconds = arr[0] * 60 * 60 + arr[1] * 60;
  //   return toSeconds;
  // };
  const newFilteredEvent = filteredEvents
    .map((item) => item)
    .sort((a, b) => a.time - b.time);

  console.log({ allEvents, filteredEvents });
  return (
    <section className="event--card--container">
      {filteredEvents.length > 0 ? (
        newFilteredEvent.map((item) => {
          return (
            <EventCard
              key={item.id}
              item={item}
              showEditForm={showEditForm}
              setShowEditForm={setShowEditForm}
            />
          );
        })
      ) : (
        <h1 className="no--events">No events found</h1>
      )}
      {showEditForm.status && (
        <EditForm
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
        />
      )}
    </section>
  );
};

export default EventCardContainer;
