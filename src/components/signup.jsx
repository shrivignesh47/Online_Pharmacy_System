import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // Necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function Signup() {
  const navigate = useNavigate(); // Hook for navigation
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Form data
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      phoneNumber: event.target.phoneNumber.value,
      city: event.target.city.value,
      pincode: event.target.pincode.value
    };

    try {
      // Send signup request to localhost:9000
      const response = await axios.post('http://localhost:9000/signup', formData);
      console.log('Signup successful:', response.data);
      // Show success message
      window.alert('Signup successful!');
      // Redirect to /home
      navigate('/home');
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure, e.g., display error message
    }
  };

  return (
    <main>
      <ModeToggle />
      <CssBaseline />
      <img src={"https://cdni.iconscout.com/illustration/premium/thumb/online-pharmacy-app-6276491-5217078.png"} alt="Background" style={{ width: '60%', marginLeft: '-8%', marginBottom: '-49%'}} />
      <Sheet
        sx={{
          width: 450,
          height: 560,
          mx: 120, // margin left & right
          my: 9, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'lg',
        }}
        variant="outlined"
      >
        <form onSubmit={handleSubmit}> {/* Add onSubmit event handler to the form */}
          <div>
            <Typography level="h4" component="h1">
              <b>Sign Up</b>
            </Typography>
            <Typography level="body-sm">Create your account.</Typography>
          </div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="John Doe"
              required // added required attribute
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              required // added required attribute
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              required // added required attribute
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              required // added required attribute
            />
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              type="text"
              placeholder="City"
              required // added required attribute
            />
          </FormControl>
          <FormControl>
            <FormLabel>Pincode</FormLabel>
            <Input
              name="pincode"
              type="text"
              placeholder="Pincode"
              required // added required attribute
            />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 }}>Sign Up</Button>
        </form>
        <Typography
          endDecorator={<Link href="/">Log in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default Signup;
