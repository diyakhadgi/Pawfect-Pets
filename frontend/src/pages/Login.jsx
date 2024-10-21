import { useRef } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email.current.value,
      password: password.current.value
    };

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success('Registration successful');
      
        const getAccessToken = data.accessToken;
        localStorage.setItem("accessToken", getAccessToken);

        toast.success('Login Successful', {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        toast.error(`Login failed: ${data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log("Fetch error: ", error);
      toast.error("Unknown error occurred. Try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Navbar />
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
        <ToastContainer />
      </Container>
    </>
  );
};

export default Login;
