import React from 'react';

const languages = [
  { name: 'B2B Back-End', description: 'De backend voor een business-to-business platform, geschreven in javascript + Node.js, er word gebruik gemaakt van het REST principe en JWT tokens voor authenticatie en beveiliging', github: 'https://github.com/luciluc19/B2B-BACKEND' },
  { name: 'B2B Front-End', description: 'De frontent voor een business-to-business platform, een gebruiker kan bestellingen plaatsen, raadplegen ..., geschreven in react + vite, login en authenticatie met JWT token' },
  { name: 'B2B Front-End', description: 'De frontent voor een business-to-business platform, een gebruiker kan bestellingen plaatsen, raadplegen ..., geschreven in react + vite, login en authenticatie met JWT token' },

];

export default function Projecten() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Projecten</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-5">
        {languages.map((language, index) => (
          <a 
            key={index} 
            href={language.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <h3 className="text-xl font-bold text-customDarkBlue">{language.name}</h3>
            <p className="mt-2 text-gray-700">{language.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}