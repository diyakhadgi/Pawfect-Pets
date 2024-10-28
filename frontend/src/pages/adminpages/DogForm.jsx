import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FileInput = styled('input')({
  display: 'none',
});

const DogForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      breed: '',
      age: '',
      healthStatus: '',
      description: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      breed: Yup.string().required('Breed is required'),
      age: Yup.number().required('Age is required').positive().integer(),
      healthStatus: Yup.string(),
      description: Yup.string(),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('breed', values.breed);
      formData.append('age', values.age);
      formData.append('healthStatus', values.healthStatus);
      formData.append('description', values.description);
      formData.append('image', values.image);

      try {
        const response = await fetch('http://localhost:8000/dog/insertinfo', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (response.ok) {
          alert('Dog info added successfully');
        } else {
          alert(result.message || 'Failed to add dog info');
          console.log(result.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error adding dog info');
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add Dog Info
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="breed"
              name="breed"
              label="Breed"
              value={formik.values.breed}
              onChange={formik.handleChange}
              error={formik.touched.breed && Boolean(formik.errors.breed)}
              helperText={formik.touched.breed && formik.errors.breed}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="age"
              name="age"
              label="Age"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="healthStatus"
              name="healthStatus"
              label="Health Status"
              value={formik.values.healthStatus}
              onChange={formik.handleChange}
              error={formik.touched.healthStatus && Boolean(formik.errors.healthStatus)}
              helperText={formik.touched.healthStatus && formik.errors.healthStatus}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="image">
              <FileInput
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <Button
                variant="contained"
                component="span"
                color="primary"
              >
                Upload Image
              </Button>
            </label>
            {formik.touched.image && formik.errors.image && (
              <Typography color="error" variant="body2">
                {formik.errors.image}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default DogForm;
