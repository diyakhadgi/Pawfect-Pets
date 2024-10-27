import axios from "axios";
import { useRef } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const getAccessToken = localStorage.getItem("accessToken");

  if (getAccessToken) {
    return <Navigate to="/" />;
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      "email": email.current.value,
      "password": password.current.value
    };

    try {
      const response = await axios.post("http://localhost:8000/user/login", loginData, {
        timeout: 1000,
      });

      const getAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);

      if (response.status === 200) {
        toast.success('Login Succesful');
        setTimeout(()=>{
          navigate('/home');
        },1000)
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        alert("Login failed");
      } else {
        alert("Unknown error occurred. Try again");
      }
    }
  }

  return (
    <>
    <Navbar/>

    <Container component="main" maxWidth="xs">
      <Box mt={5} mb={3}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
      </Box>
      <form onSubmit={loginHandler}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          inputRef={email}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          inputRef={password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
          </Button>
          <Link to="/register">
            <Typography fontSize="15px" variant="h5" align="center" pt="15px">
            Don't have an account? Register now.
          </Typography>
          </Link>
      </form>
      <ToastContainer/>
    </Container>
    </>
  )
}

export default Login;
