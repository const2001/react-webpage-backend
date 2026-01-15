import React, { useState } from 'react';
import './contactUs.css';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState(''); // Κατάσταση για το πεδίο ονόματος
  const [phone, setPhone] = useState(''); // Κατάσταση για το πεδίο τηλεφώνου
  const [option, setOption] = useState(''); // Κατάσταση για το πεδίο αρμόδιου τμήματος
  const [email, setEmail] = useState(''); // Κατάσταση για το πεδίο email
  const [subject, setSubject] = useState(''); // Κατάσταση για το πεδίο θέματος
  const [message, setMessage] = useState(''); // Κατάσταση για το πεδίο μηνύματος

  const addRequest = async (request) => {
    axios.post('http://localhost:8000/add_request', JSON.stringify(request), {
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
    const username = name;
    const userphone = phone;
    const useroption = option;
    const useremail = email;
    const usersubject = subject;
    const usermessage = message;
    const request = { username, userphone, useroption, useremail, usersubject, usermessage };
    addRequest(request);
  }

  return (
    <div className='contact-us-container'>
      <section id='forma' className='contact-section'>
        <form id='submit' onSubmit={handleSubmit}>
          <label htmlFor="n1">Όνομα</label>
          <input
            type="text"
            id="n1"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="n1">Τηλέφωνο</label>
          <input
            type="text"
            id="n1"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="n1">Αρμόδιο Τμήμα</label>
          <select id="n1" required onChange={(e) => setOption(e.target.value)}>
            <option value="">Επιλέξτε</option>
            <option value="option1">Επιλογή 1</option>
            <option value="option2">Επιλογή 2</option>
            <option value="option3">Επιλογή 3</option>
            <option value="option4">Επιλογή 4</option>
          </select>
          <label htmlFor="n1">Email</label>
          <input
            type="email"
            id="n1"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="n1">Θέμα</label>
          <input
            type="text"
            id="n1"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="n2">Μήνυμα</label>
          <input
            type="text"
            id="n2"
            className='messageinput'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className='koubi' type='submit'>
            Υποβολή
          </button>
        </form>
      </section>

      <section id='stoixeia' className='stoixeia'>
        <h2>Στοιχεία Επικοινωνίας Εταιρίας</h2>

        <h3 className='diefthinsi'>Διεύθυνση: Αχιλέως 8</h3>
        <h3 className='phone'>
          <a href="tel:1234567890">Τηλέφωνο: 1234567890</a>
        </h3>
        <h3 className='email'>
          <a href="mailto:example@example.com">Email: mailto:example@example.com</a>
        </h3>
        <div className="map-container"></div>
      </section>
    </div>
  );
};

export default ContactUs;
