import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/users', { username, password });
      navigate('/sign-in'); // Redirect to sign-in page
    } catch (err) {
      alert('Failed to register: ' + err.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <label>
        Confirm Password:
        <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpPage;
