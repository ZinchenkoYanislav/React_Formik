import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is a required")
    .min(2)
    .matches(/^[A-Z|А-Я]/g, "First leter should be big"),
  email: yup
    .string()
    .required("Email is a required")
    .email("example@gmail.com"),
  phone: yup
    .string()
    .required("phone is a required")
    .matches(/^\d{12}/g, "Phone should be with 12 numbers")
    .max(12, "maximum 12 numbers"),
});
