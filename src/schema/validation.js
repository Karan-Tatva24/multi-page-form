import * as Yup from "yup";

export const validationSchema1 = Yup.object().shape({
  firstname: Yup.string().required("Required!"),
  lastname: Yup.string().required("Required!"),
  gender: Yup.string().required("Required!"),
});

export const validationSchema2 = Yup.object().shape({
  email: Yup.string().email("Invalid Email Formate").required("Required!"),
  phone: Yup.string()
    .required("Required!")
    .matches(/^\d{10}$/, "Invalid phone number"),
});

export const validationSchema3 = Yup.object().shape({
  password: Yup.string().required("Required!"),
  confirmpassword: Yup.string()
    .required("Required!")
    .oneOf([Yup.ref("password"), null], "Password must match!"),
});
