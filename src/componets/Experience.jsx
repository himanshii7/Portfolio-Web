import React from 'react';
import express from "../../public/express.png";
import MongoDB from "../../public/MongoDB.png";
import react from "../../public/react.png";
import nodejs from "../../public/nodejs.png";
import html from "../../public/HTML.jpg";
import css from "../../public/CSS.png";
import bootstrap from "../../public/Bootstrap.png";
import tailwind from "../../public/Tailwind.png";
import javascript from "../../public/js.webp";
import python from "../../public/python.jpeg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: python,
      name: "Python"
    },
    {
      id: 4,
      logo: react,
      name: "React"
    },
    {
      id: 5,
      logo: express,
      name: "Express"
    },
    {
      id: 6,
      logo: javascript,
      name: "Javascript"
    },
  ];

  return (
    <div className="max-w-screen-2xl container color-white mx-auto px-4 md:px-20 mt-10 text-white">
      <div>
        <h1 className='text-3xl font-bold mb-4 text-yellow-500'>
          Experience
        </h1>
        <p>
          I possess two years of hands-on experience across the following fields, where I have developed a strong skill set and contributed to various projects and initiatives. My experience has allowed me to gain in-depth knowledge and practical expertise in these areas, enhancing my ability to deliver results effectively.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 my-7'>
          {cardItem.map(({ id, logo, name }) => (
            <div
              className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-4 cursor-pointer hover:scale-110 duration-300'
              key={id}
            >
              <img src={logo} className='w-[150px] rounded-full' alt={name} />
              <div className='mt-2'>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
