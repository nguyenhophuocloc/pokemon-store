import "./Contact.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: true,
    initialValues: {
      full_name: "",
      email: "",
      message: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Please enter your full name")
        .required("Required !"),
      email: Yup.string().email("Invalid email format").required("Required !"),
      message: Yup.string().required("Required !"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //resetForm()
      toast.success("We take it !", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/");
    },
  });
  return (
    <>
      <div className="contact__bg">
        <div className="contact__message">
          <h2 className="text-center">Get In Touch</h2>
          <form className="contact__form" onSubmit={formik.handleSubmit}>
            <label className="form__label">Your full name</label>
            <input
              className="form__input"
              type="text"
              name="full_name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
            />
            {formik.errors.full_name && formik.touched.full_name && (
              <p className="form__feedback">{formik.errors.full_name}</p>
            )}

            <label className="form__label">Your email</label>
            <input
              className="form__input"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="form__feedback">{formik.errors.email}</p>
            )}

            <label className="form__label">Message</label>
            <textarea
              className="form__input"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message && (
              <p className="form__feedback">{formik.errors.message}</p>
            )}

            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
