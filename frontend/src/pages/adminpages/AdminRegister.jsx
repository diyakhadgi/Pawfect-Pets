import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import profile from "../../assets/logo.png";

const AdminRegister = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      username: Yup.string().required("Username is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "http://localhost:8000/admin/adminRegister",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        if (response.ok) {
          toast.success("Register Succesful");
          setTimeout(() => {
            navigate("/adminLogin"); // Redirect to admin login page
          }, [1000]);
        } else {
          alert(data.error || "Registration failed. Please try again.");
        }
      } catch (error) {
        toast.error("Error registering:", error);
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <>
      <Link to="/"><Typography class="relative top-28 right-1 text-center font-semibold hover:text-sky-600 ">View Website</Typography></Link>
      <Link to="/adminLogin"><Typography class="relative top-28 right-1 text-center font-semibold hover:text-sky-600  ">Already have an account? Sign in</Typography></Link>
      <div class="flex border-2 border-sky-950 absolute top-40 right-96 p-10">
        <div class="image">
          <img src={profile} alt="" />
        </div>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center">
          REGISTER AS ADMIN
        </Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Register
          </Button>
        </form>
      </Paper>
      <ToastContainer/>
        </Container>
      </div>
      </>
  );
};

export default AdminRegister;
