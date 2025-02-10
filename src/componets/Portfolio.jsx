import React from 'react';
import express from "../../public/express.png";
import MongoDB from "../../public/MongoDB.png";
import react from "../../public/React.svg";
import nodejs from "../../public/nodejs.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: MongoDB,
      name: "MongoDB"
    },
    {
      id: 2,
      logo: express,
      name: "Express"
    },
    {
      id: 3,
      logo: react,
      name: "React"
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs"
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-white">
      <div>
        <h1 className='text-3xl font-bold mb-4 text-yellow-500'>
          Portfolio
        </h1>
        <span className='underline font-semibold'> Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
          {
            cardItem.map(({ id, logo, name }) => (
              <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg shadow-white p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt={name} />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 '>MongoDB is a document-oriented database.</p>
                </div>
                <div className='px-6 py-4 space-x-3 justify-around'>
                  <button className='bg-yellow-500 hover:bg-orange-500 font-bold px-4 py-2 rounded'>Video</button>
                  <button className='bg-yellow-500 hover:bg-orange-500 font-bold px-4 py-2 rounded'>Source code</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
   
  );
}

export default Portfolio;
