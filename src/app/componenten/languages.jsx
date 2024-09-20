import React from 'react';

const languages = [
  { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png' },
  { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/11518/11518876.png' },
  { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
  { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
  { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' }, 
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' }, 
  { name: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
  { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },

  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
];

export default function Languages() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 justify-center mt-5">
        {languages.map((language, index) => (
          <div key={index} className="m-2 p-2 rounded-lg flex flex-col items-center">
            <div className="flex justify-center items-center h-[50px] w-[50px]">
              <img src={language.icon} alt={language.name} className="h-[50px] w-[50px]" />
            </div>
            <p className="mt-2 font-bold text-center text-customDarkBlue">{language.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}