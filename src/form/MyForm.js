import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import formSchema from "./validation/formSchema";

export default function MyForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
  };
  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    console.log(values);
  }
  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={formSchema}
      >
        <Form>
          <div>
            <label>
              Name <br />
              <Field name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <div>
            <label>
              Email <br />
              <Field name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <div>
            <label>
              Phone <br />
              <Field name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
