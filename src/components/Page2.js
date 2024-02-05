import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateFormField } from "../redux/actions/FormActions";
import { validationSchema2 } from "../schema/validation";
import TextError from "./TextError";

const Page2 = () => {
  const reduxData = useSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(reduxData);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateFormField(values));
    navigate("/page3");
  };

  const handlePrevios = (values) => {
    dispatch(updateFormField(values));
    navigate("/");
  };

  return (
    <Formik
      initialValues={reduxData}
      validationSchema={validationSchema2}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" id="phone" />
              <ErrorMessage name="phone" component={TextError} />
            </div>
            <button
              className="btn"
              type="button"
              onClick={() => handlePrevios(formik.values)}
            >
              Previos Page
            </button>
            <button className="btn" type="submit">
              Next Page
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Page2;
