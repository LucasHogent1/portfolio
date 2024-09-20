import React from 'react';
import Languages from './componenten/languages';
export default function Home() {
  return (
    <div className="mt-10">
      <div className="flex justify-center min-w-screen">
        <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <div className="flex-1 m-2 text-center md:text-left">
              <h1 className="text-5xl font-bold">Lucas Katamadze</h1>
              <p className="mt-2">
                  Student Bachelor Toegepaste informatica
              </p>
              <a 
                href="/CV_Lucas_Katamadze.pdf" 
                download 
                className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Download CV
              </a>
            </div>
            <div className="flex-1 m-2">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <Languages />
    </div>
  );
}