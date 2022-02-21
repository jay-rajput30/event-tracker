import Button from "../components/Button/Button";
import Date from "../components/Date/Date";
import Days from "../components/Days/Days";
import Event from "../components/Event/Event";
import Header from "../components/Header/Header";
import "./HomeContainer.css";

const HomeContainer = ({ showForm, setShowForm, setPage }) => {
  return (
    <div className="home--container">
      <Header />
      <Days />
      <Date />
      <Button setShowForm={setShowForm} />
      {showForm && <Event setShowForm={setShowForm} />}
    </div>
  );
};

export default HomeContainer;
