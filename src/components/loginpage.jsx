import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'; // Import CssVarsProvider and useColorScheme from Material-UI

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

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

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:9000/', {
        email,
        password,
      });

      if (res.data === 'exist') {
        history('/home', { state: { id: email } });
      } else if (res.data === 'notexist') {
        alert('User has not signed up');
      }
    } catch (e) {
      alert('Wrong details');
      console.log(e);
    }
  }

  return (
    <CssVarsProvider> {/* Wrap your component tree with CssVarsProvider */}
      <main>
        <ModeToggle />
        <CssBaseline />
        <img src={"https://cdni.iconscout.com/illustration/premium/thumb/online-pharmacy-app-6276491-5217078.png"} alt="Background" style={{ width: '60%', marginLeft: '-8%', marginBottom: '-49%'}} />
        <Sheet
          sx={{
            width: 450,
            height: 370,
            mx: 120,
            my: 20,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'lg',
          }}
          variant="outlined"
        >
          <form onSubmit={submit}>
            <div>
              <Typography level="h4" component="h1">
                <b>Log In</b>
              </Typography>
              <Typography level="body-sm">Enter your credentials.</Typography>
            </div>
            <br />
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </FormControl>
            <center>
              <Button type="submit" sx={{ mt: 1 }}>
                Log In
              </Button>
            </center>
          </form>
          <Typography
            endDecorator={<Link href="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don't have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider> 
  );
}

export default Login;