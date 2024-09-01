import { useState } from 'react';
import axios from 'axios';
import "./login.css"
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://135.181.152.249:8072/Account/login', {
        username,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.token, "/");
        window.location.href = '/';
      } else {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error(error);
      setIsRegistered(true);
    }
  };

  const gotoRegister = (e) => {
    e.preventDefault();
    window.location.href = '/register';
  };

  const gotoMain = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <div>
      <div className='bgimgLogin'>
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegistered && (
            <p>
              You are not registered. Please <a href="/register">register</a>.
            </p>
          )}
          <button type="submit">Login</button>
          <button onClick={gotoRegister}>Go to Registration Page</button>
          <button onClick={gotoMain}>Go to Main</button>
        </form>
      </div>
    </div>
  );
}
