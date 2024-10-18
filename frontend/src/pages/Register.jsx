import axios from "axios";
import { useRef } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";

const Register = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const address = useRef();

  const regisHandler = async (e) => {
    e.preventDefault();
    const registerData = {
      "name": name.current.value,
      "email": email.current.value,
      "password": password.current.value,
      "address": address.current.value
    };

    try {
      const response = await axios.post("http://localhost:8000/user/register", registerData, {
        timeout: 1000,
      });

      const getAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);

      if (response.ok) {
        alert("Registered successfully");
      }
    } catch (error) {
      if (error.response) {
        console.log(error)
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
          Register
        </Typography>
      </Box>
      <form onSubmit={regisHandler}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          inputRef={name}
          autoComplete="name"
          autoFocus
        />
         <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Address"
          inputRef={address}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          inputRef={email}
          autoComplete="email"
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
          Register
        </Button>
      </form>
    </Container>
    </>
  )
}

export default Register;
