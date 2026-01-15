import React, { useState } from 'react';
import './form.css';
import axios from 'axios';

const Form = () => {
  const [usernamee, setUsername] = useState(''); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  const add_subscriber = async (request) => {
    axios.post('http://localhost:8000/add_subscriber', JSON.stringify(request), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Σφάλμα κατά την αποθήκευση του αιτήματος:', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernamee;
    const userdname = name;
    const useremail = email;
    const request = { username, userdname, useremail };
    add_subscriber(request);
    console.log('hi');
  }

  return (
    <form id="newsletter-form" onSubmit={handleSubmit}>
      <input type="text" id="username" placeholder="Όνομα χρήστη" required onChange={(e) => setUsername(e.target.value)} />
      <input type="text" id="name" placeholder="Όνομα" required onChange={(e) => setName(e.target.value)} />
      <input type="email" id="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Εγγραφή</button>
    </form>
  );
};

export default Form;
