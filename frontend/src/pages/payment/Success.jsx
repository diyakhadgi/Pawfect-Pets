import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import { Button, Container, Divider, Typography } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Link } from 'react-router-dom';

function Success() {
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
            Payment Successful
          </Typography>
          <Divider style={{ width: '80%', margin: '1rem 0' }} />
          <DoneOutlineIcon sx={{ color: 'green', fontSize: 60, mt: 2, mb: 2 }} />
          <Button variant="contained" component={Link} to="/shop">
            Go back to shop
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Success;
