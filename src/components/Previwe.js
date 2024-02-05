import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../redux/actions/FormActions";
import { useNavigate } from "react-router-dom";

const Previwe = () => {
  const submitedData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstname, lastname, email, phone } = submitedData;

  const handleSubmit = () => {
    dispatch(submitForm());
    navigate("/");
  };

  const handlePreview = () => {
    navigate("/page3");
  };

  return (
    <div>
      <ul>
        <li>First Name : {firstname}</li>
        <li>Last Name : {lastname}</li>
        <li>Email : {email}</li>
        <li>Phone Number : {phone}</li>
      </ul>
      <button className="btn" type="button" onClick={() => handlePreview()}>
        Change Values
      </button>
      <button className="btn" type="button" onClick={() => handleSubmit()}>
        Confirm Submit
      </button>
    </div>
  );
};

export default Previwe;
