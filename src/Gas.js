import React, { useState } from 'react';
import './Gas.css'

const Gas = () => {
  // Μεταβλητές κατάστασης
  const [kw, setKW] = useState('');
  const [days, setDays] = useState('');
  const [length, setLength] = useState('');
  const [results, setResults] = useState('');

  // Χειριστής υποβολής φόρμας
  const handleSubmit = (e) => {
    e.preventDefault();

    const userInputKW = kw;  
    const userInputDays = days;
    const userInputLength = length; 

    let kd;
    let ykw;
    let synolo;
    let teliko;
    
    if(userInputKW < 0 || userInputDays <0 || userInputLength < 0){
      console.log("Μη έγκυροι αριθμοί")
    }
    
    // kd
    if(userInputLength <= 50){
      kd = userInputLength * 0.12 * userInputDays/365
    }
    else if(userInputLength <= 90){
      kd = userInputLength * 0.20 * userInputDays/365
    }
    else{
      kd = userInputLength * 0.31 * userInputDays/365
    }
    
    // ykw
    if(userInputKW <= 1600){
      ykw = userInputKW * 0.01315 * userInputDays/365
    }
    else if(userInputKW <= 2000){
      ykw = userInputKW * 0.01480 * userInputDays/365
    }
    else{
      ykw = userInputKW * 0.01625 * userInputDays/365
    }
    
    // synolo
    if(userInputKW <= 1600){
      synolo = userInputKW * 0.00623
    }
    else if(userInputKW <= 2000){
      synolo = userInputKW * 0.00768
    }
    else{
      synolo = userInputKW * 0.00915
    }

    teliko = kd + ykw + synolo;
    teliko = teliko.toFixed(2);
    setResults(p => teliko); 
  };

  return (
    <form id="wageForm" onSubmit={handleSubmit}>
      <label htmlFor="kw">Πλήθος Κιλοβατώρων </label>
      <input
        type="number"
        id="kw"
        value={kw}
        onChange={(e) => setKW(e.target.value)}
        required
      />

      <label htmlFor="days">Πλήθος Ημερών </label>
      <input
        type="number"
        id="days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        required
      />

      <label htmlFor="length">Μέγεθος </label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
      />

      <button className='button' type="submit">Υπολογισμός</button>

      <label htmlFor="length">Τελικό κόστος :</label>
      <span htmlFor="length">{results}</span>
    </form>
  );
};

export default Gas;
