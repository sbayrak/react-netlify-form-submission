import React, { useState } from 'react';
import './App.css';
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => alert(error));
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='App'>
      <form
        onSubmit={handleSubmit}
        data-netlify='true'
        name='contact'
        method='post'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input type='hidden' name='form-name' value='contact' />

        <label htmlFor='name'>Your Name: </label>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Your Name'
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='email'>Your Email: </label>
        <input
          type='email'
          name='email'
          value={email}
          placeholder='you@youremail.com'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='message'>Message: </label>
        <textarea
          name='message'
          value={message}
          placeholder='What do you want to say?'
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}

export default App;
