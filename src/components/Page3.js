import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateFormField } from "../redux/actions/FormActions";
import { validationSchema3 } from "../schema/validation";
import TextError from "./TextError";

const Page3 = () => {
  const reduxData = useSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(reduxData);

  const handlePrevios = (values) => {
    dispatch(updateFormField(values));
    navigate("/page2");
  };

  const onSubmit = (values) => {
    dispatch(updateFormField(values));
    navigate("/preview");
  };

  return (
    <Formik
      initialValues={reduxData}
      validationSchema={validationSchema3}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmpassword"
                id="confirmpassword"
              />
              <ErrorMessage name="confirmpassword" component={TextError} />
            </div>
            <button
              className="btn"
              type="button"
              onClick={() => handlePrevios(formik.values)}
            >
              Previos Page
            </button>
            <button className="btn" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Page3;
