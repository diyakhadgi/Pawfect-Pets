import axios from "axios";
import { useRef } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


      if (response.status === 200) {
        toast.success('Registration successful');
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
          <Link to="/login">
            <Typography fontSize="15px" variant="h5" align="center" pt="15px">
            Already have an account? Login now
          </Typography>
          </Link>
      </form>
      <ToastContainer />
    </Container>
    </>
  )
}

export default Register;
