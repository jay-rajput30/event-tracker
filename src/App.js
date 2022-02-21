import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Date from "./components/Date/Date";
import Days from "./components/Days/Days";
import Event from "./components/Event/Event";
import Header from "./components/Header/Header";
import { useEvent } from "./contexts/EventProvider";
import HomeContainer from "./pages/HomeContainer";
import SingleDate from "./pages/SingleDate";
import { Routes, Route } from "react-router-dom";
function App() {
  const [showForm, setShowForm] = useState(false);
  // const [page, setPage] = useState({ text: "home", date: null });
  const { eventDispatch } = useEvent();
  useEffect(() => {
    const getData = () => {
      const data = JSON.parse(localStorage.getItem("events"));
      if (data != null) {
        eventDispatch({ type: "GET", payload: data });
      }
    };
    getData();
  }, []);
  return (
    <div className="calendar--container">
      <Routes>
        <Route
          path="/"
          element={
            <HomeContainer showForm={showForm} setShowForm={setShowForm} />
          }
        />
        <Route
          path="/singleDate/:id"
          element={<SingleDate showForm={showForm} setShowForm={setShowForm} />}
        />
      </Routes>
      {/* {allEvents ? (
        <>
          {page.text === "home" ? (
            <HomeContainer
              showForm={showForm}
              setShowForm={setShowForm}
              setPage={setPage}
            />
          ) : null}
          {page.text === "singleDate" ? <SingleDate date={page.date} /> : null}
        </>
      ) : (
        <h3>loading</h3>
      )} */}
    </div>
  );
}

export default App;
