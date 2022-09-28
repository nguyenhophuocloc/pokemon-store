import "./Login.scss";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
const Login = () => {
  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required !"),
      password: Yup.string()
        .min(6, "Password must have 6 characters !")
        .required("Required !"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //resetForm()
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
          <button>Sign in</button>
          <p className="login__res text-center">
            Not member yet ?{" "}
            <span className="register">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
