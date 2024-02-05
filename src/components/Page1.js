import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormField } from "../redux/actions/FormActions";
import TextError from "./TextError";
import { validationSchema1 } from "../schema/validation";

const Page1 = () => {
  const reduxData = useSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(reduxData);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateFormField(values));
    navigate("/page2");
  };

  return (
    <Formik
      initialValues={reduxData}
      validationSchema={validationSchema1}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="firstname">First Name</label>
              <Field type="text" name="firstname" id="firstname" />
              <ErrorMessage name="firstname" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="lastname">Last Name</label>
              <Field type="text" name="lastname" id="lastname" />
              <ErrorMessage name="lastname" component={TextError} />
            </div>
            <div className="form-control">
              <label>Gender</label>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <ErrorMessage name="gender" component={TextError} />
            </div>
            <button
              className="btn"
              type="submit"
              // onClick={() => handleNext(formik.values)}
            >
              Next Page
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Page1;
