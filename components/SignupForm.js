// components/SignupForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signupUser } from "../store/actions";
import * as Yup from "yup";

const countryCodes = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+33", label: "France (+33)" },
];

const SignupForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(signupUser(values));
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        countryCode: "+1", // Default country code
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div style={{ display: "flex" }}>
              <Field component="select" id="countryCode" name="countryCode">
                {countryCodes.map((countryCode) => (
                  <option key={countryCode.value} value={countryCode.value}>
                    {countryCode.label}
                  </option>
                ))}
              </Field>
              <Field type="tel" id="phoneNumber" name="phoneNumber" />
            </div>
            <ErrorMessage name="phoneNumber" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
