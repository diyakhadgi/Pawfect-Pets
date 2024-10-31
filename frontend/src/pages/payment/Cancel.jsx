import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import { Button, Container, Divider, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

function Cancel() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: "hidden", // Prevents scrolling
          padding: 0, // Removes any default padding that could cause overflow
          boxSizing: "border-box"
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          maxWidth="400px"
          p={4}
          textAlign="center"
          border="1px solid grey"
          borderRadius="8px"
          boxShadow={3}
        >
          <Typography variant="h4" gutterBottom>
            Oops Something went wrong
          </Typography>
          <Divider style={{ width: '80%', margin: '' }} />
          <CancelIcon sx={{ color: 'red', fontSize: 60, mt: 2, mb: 2 }} />
          <Button variant="contained" component={Link} to="/cart">
            Go back to cart
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Cancel
