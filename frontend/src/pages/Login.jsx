import axios from "axios";
import { useRef } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";

const Login = () => {
  const email = useRef();
  const password = useRef();

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
        alert("Login successful");
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
      </form>
    </Container>
    </>
  )
}

export default Login;
