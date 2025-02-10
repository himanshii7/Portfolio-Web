import React, { useState } from 'react';
import logo from '../assets/logo.png';  
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems=[
        {
          id:1,
          text:"Home"  
        },
         {
            id:2,
            text:"About"  
          },
           {
            id:3,
            text:"Portfolio"  
          },
           {
            id:4,
            text:"Experience"  
          },
          {
            id:5,
            text:"Contact"  
          }
    ]

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md" style={{ boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.6) fixed top-0 left-0 right-0 z-50 bg-black "  }}>
                <div className="flex justify-between items-center h-16 text-white">
                    <div className="flex space-x-2">
                        <img src={logo} className="h-16 w-16 rounded-full" alt="logo" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Himansh<span className="text-green-500 text-2xl">i </span>
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>

                    <div>
                        <ul className="hidden md:flex space-x-8 text-white">
                            {navItems.map(({id,text}) => (
                                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>

                            ))
                          }
                        </ul>

                        <div className="md:hidden" onClick={() => setMenu(!menu)}>
                            {menu ? (
                                <IoIosClose style={{ color: 'white', fontSize: '45px' }} />
                            ) : (
                                <AiOutlineMenu style={{ color: 'white', fontSize: '24px' }} />
                            )}
                        </div>
                    </div>
                </div>
{/* {mobile navbar} */}
                {menu && (
                    <div className="md:hidden text-white">
                        <ul className='flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                        {navItems.map(({id,text}) => (
                                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>

                            ))
                          }
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
