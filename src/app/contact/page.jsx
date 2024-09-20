import React from 'react';
import ContactFormulier from '../componenten/contactForm';
import Navbar from '../componenten/navbar';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div style={{ paddingTop: '100px' }}> {/* Voeg hier witruimte toe */}
      <ContactFormulier />
    </div>
    </div>
  );
};

export default Contact;