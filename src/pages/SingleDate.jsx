import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useNavigate, useParams } from "react-router";
import EventCardContainer from "../components/EventCardContainer/EventCardContainer";
import SingleDateHeader from "../components/SingleDateHeader/SingleDateHeader";
import "./SingleDate.css";

const SingleDate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState({ status: false, data: {} });

  const backBtnClickHandler = () => {
    navigate("/");
  };
  return (
    <div className="single--date--container">
      <IconContext.Provider value={{ className: "single--date--back--icon" }}>
        <FiArrowLeft onClick={backBtnClickHandler} />
      </IconContext.Provider>
      <SingleDateHeader id={id} />
      <EventCardContainer
        id={id}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
      />
    </div>
  );
};

export default SingleDate;
