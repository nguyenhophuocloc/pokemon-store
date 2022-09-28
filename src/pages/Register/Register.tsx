import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: true,
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(6, "Please input your fullname")
        .required("Required !"),
      email: Yup.string().email("Invalid email format").required("Required !"),
      password: Yup.string()
        .min(6, "Password must have 6 characters !")
        .required("Required !"),
      confirmPassword: Yup.string()
        .min(6, "Password must have 6 characters !")
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required !"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      navigate("/");
    },
  });
  return (
    <div className="login">
      <div className="login__content">
        <form className="login__form" onSubmit={formik.handleSubmit}>
          <div className="text-center login__icon">
            <span className="">
              <i className="fa-solid fa-user"></i>
            </span>
          </div>

          <label className="form__label">Fullname</label>
          <input
            style={{ marginBottom: "1rem" }}
            className="form__input"
            type="text"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
          />
          {formik.errors.fullname && formik.touched.fullname && (
            <p className="form__feedback">{formik.errors.fullname}</p>
          )}

          <label className="form__label">Email</label>
          <input
            style={{ marginBottom: "1rem" }}
            className="form__input"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="form__feedback">{formik.errors.email}</p>
          )}

          <label className="form__label">Password</label>
          <input
            style={{ marginBottom: "1rem" }}
            className="form__input"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="form__feedback">{formik.errors.password}</p>
          )}

          <label className="form__label">Confirm Password</label>
          <input
            style={{ marginBottom: "1rem" }}
            className="form__input"
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="form__feedback">{formik.errors.confirmPassword}</p>
          )}
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
