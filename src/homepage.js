import React from 'react';
import './homepage.css'
import Form from './components/form';

const HomePage = () => {
  const newLocal = "https://imgbb.comattachments/352541673189801986/1107971815856427108/Aerio_Oikiako_Extra_min-380x380.png";
  return (
       <div className="container">
    <section id="who-we-are">
          <div className="grid-column_sec1">
            <div className="grid-item">
              <img
                src="https://imgbb.comattachments/352541673189801986/1107658194295197807/Gas_Fisiko_Aerio_Reuters-scaled.webp"
                alt="Responsive Image"
              />
            </div>
            <div className="grid-item">
              <h2>Ποιοι Είμαστε;</h2>
              <p>
                Η Ανάπτυξη Διαδικτυακής Εφαρμογής για Εταιρία Διαχείρισης
                Φυσικού Αερίου είναι μία εξειδικευμένη εταιρία που ασχολείται με
                την ανάπτυξη προηγμένων λύσεων διαδικτυακών εφαρμογών για τη
                διαχείριση φυσικού αερίου.
              </p>
              <p>
                Με μια ισχυρή επαγγελματική ομάδα που αποτελείται από έμπειρους
                προγραμματιστές και εμπειρογνώμονες στον τομέα της διαχείρισης
                ενέργειας, δημιουργούμε εξατομικευμένες εφαρμογές που προσφέρουν
                αποτελεσματική διαχείριση, αυξημένη ασφάλεια και ευελιξία για
                εταιρίες διαχείρισης φυσικού αερίου.
              </p>
            </div>
          </div>
        
      </section>

    <section id="programs">
    <h2>Τα Προγραμματα Μας</h2>
      <div className="grid-column"> 
        
        <div className="program">
          <img src={newLocal} alt="Program 1"/>
          <h3>Οικιακό Πρόγραμμα</h3>  
        </div>
        <div className="program">
          <img src="https://imgbb.com/attachments/352541673189801986/1107959216410468404/box--.webp" alt="Program 2"/>
          <h3>Επαγγελματικό Πρόγραμμα</h3>
        </div>
        <div className="program">
          <img src="https://imgbb.com/attachments/352541673189801986/1107970978593656872/Untitled_design_-_2023-05-16T130100.433.png" alt="Program 3"/>
          <h3>Φοιτητικό Πρόγραμμα</h3>
        </div>
        <div className="program">
          <img src="https://imgbb.com/attachments/352541673189801986/1107973332294434847/db1ead87227b1f5d.png" alt="Program 4"/>
          <h3>Πρόγραμμα για Αγρότες</h3>
        </div>
       

        
        
        </div>
        <br></br>
        <a href="./AboutUs.js" target="_blank" class="cta-button">Learn More</a> 
    </section>
    

    <section id="image-gallery">
    <br></br>
    <br></br>
    <h2>Φωτογραφιες Εγκαταστασεων</h2>

      <div className="gallery">
        <img src="https://imgbb.comattachments/attachments/352541673189801986/1107971815856427108/Aerio_Oikiako_Extra_min-380x380.png" alt="Image 1"/>
        <img src="https://imgbb.comattachments/attachments/352541673189801986/1107971815856427108/Aerio_Oikiako_Extra_min-380x380.png" alt="Image 2"/>
        <img src="https://imgbb.comattachments/attachments/352541673189801986/1107971815856427108/Aerio_Oikiako_Extra_min-380x380.png" alt="Image 3"/>
        <img src="https://imgbb.comattachments/attachments/352541673189801986/1107971815856427108/Aerio_Oikiako_Extra_min-380x380.png" alt="Image 4"/>
      </div>
    </section>

    <section id="savings-tips">
      <h2>Συμβουλες Εξοικονομησης</h2>
      <p>
Αν θέλετε να εξοικονομήσετε φυσικό αέριο, εδώ είναι μερικές συμβουλές για εσάς: 

<p>Μόνωση: Σιγουρευτείτε ότι το σπίτι σας είναι καλά μονωμένο. Οι διαρροές αέρα από κενά στα παράθυρα, τις πόρτες ή τις στέγες μπορούν να οδηγήσουν σε απώλεια θερμότητας και απόδοσης συστήματος θέρμανσης.</p>

<p>Θερμοκρασία: Μειώστε τη θερμοκρασία στον θερμοστάτη σας. Ακόμη και ένας βαθμός μειωμένης θέρμανσης μπορεί να σας βοηθήσει να εξοικονομήσετε φυσικό αέριο.</p>

<p>Συντήρηση συστήματος θέρμανσης: Ελέγξτε τακτικά το σύστημα θέρμανσής σας για πιθανά προβλήματα. Ένα καλά συντηρημένο σύστημα θα λειτουργεί πιο αποδοτικά και θα εξοικονομεί ενέργεια.</p>

<p></p>Χρήση θερμαντικών συσκευών: Χρησιμοποιήστε θερμαντικές συσκευές μόνο στους χώρους που τις χρειάζεστε και απενεργοποιήστε τις όταν δεν τις χρησιμοποιείτε.</p>
      <div className="video-container">
        <iframe src="https://www.youtube.com/embed/your-video-id" allowfullscreen></iframe>
      </div>
    </section>
    <Form/>
    </div>

  );
};

export default HomePage;