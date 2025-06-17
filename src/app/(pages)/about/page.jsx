"use client"
import { FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoVercel } from "react-icons/io5";
import './about.css';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiJavascript } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiAxios, SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiMui, SiNextdotjs } from 'react-icons/si';
import jwt from '../../../../public/image/jwt-flower.webp'
import Image from 'next/image';



export default function About() {
    return (
        <div className="h-full w-full flex flex-col md:flex-row" id='about'>
            <div className="leftAbout w-[100%] md:w-[50%] h-[100vh] md:h-[100vh]  flex justify-center items-center gap-5">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                <div className="aboutDetails flex flex-col gap-y-10">
                    <div className="personalInfo text-white">
                        <h1 className='title-info'>Personal Info</h1>
                        <ul>
                            <li><span className='name-and-other-section'>NAME</span> : TOHIDUL ISLAM</li>
                            <li><span className='name-and-other-section'>Nationality
                            </span> : BANGLADESHI</li>
                            <li><span className='name-and-other-section'>AGE
                            </span> : 24 YEAR</li>
                            <li><span className='name-and-other-section'>GENDER</span> : MALE</li>
                            <li><span className='name-and-other-section'>LANGUAGE KNOWN</span> : BANGLA, HINDI, ENGLISH</li>
                        </ul>
                    </div>
                    <div className="education text-white">
                        <h1 className='title-info'>Education</h1>
                        <ul>
                            <li><span className='name-and-other-section'>UNIVERSITY</span> : NATIONAL UNIVERSITY</li>
                            <li><span className='name-and-other-section'>BSS</span> : HONOURS</li>
                            <li><span className='name-and-other-section'>SUBJECT</span> : SOCIOLOGY </li>


                        </ul>
                    </div>
                    <div className="skill text-white ">
                        <h1 className='title-info'>Skill</h1>
                        <ul>
                            <li><span>FRONTED DEVELOPER</span></li>
                            <li><span>MOBILE RESPONSIVE DESIGN</span></li>
                            <li><span className='name-and-other-section'>FRONTEND</span> : HTML, CSS, JAVASCRIPT, <br /> REACT JS, NEXT JS, FIREBASE</li>
                            <li><span className='name-and-other-section'>BACKEND</span> : NODE JS , EXPRESS JS , MONGODB, </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightAbout w-[100%] md:w-[50%] h-[100vh] md:h-[100vh] flex flex-col items-center justify-center gap-y-5 text-white">
                <div>
                    <h1 className='title-info text-center'>Frontend Skill</h1>
                    <div style={{ marginRight: '10px', paddingTop: '17px', paddingBottom: '17px', paddingLeft: '10px', paddingRight: '10px' }} className="frontend-section flex flex-wrap justify-center gap-3 rounded">
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border  border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><FaHtml5 className="w-10 h-10 text-[#E34F26]" /></span>
                            <p className="text-white text-sm">HTML</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><IoLogoCss3 className="w-10 h-10 text-[#1572B6]" /></span>
                            <p className="text-white text-sm">CSS</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><RiTailwindCssFill className='w-10 h-10 text-[#06B6D4]' /></span>
                            <p className="text-white text-sm">Tailwind CSS
                            </p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><BsFillBootstrapFill className='w-10 h-10 text-[#7952B3]' /></span>
                            <p className="text-white text-sm">Bootstrap</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><DiJavascript className='w-10 h-10 text-[#F7DF1E]' /></span>
                            <p className="text-white text-sm">Javascript</p>
                        </div>

                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><FaReact className='w-10 h-10 text-[#61DAFB]' /></span>
                            <p className="text-white text-sm">React</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiNextdotjs className='w-10 h-10 text-[rgb(61,169,219)]' /></span>
                            <p className="text-white text-sm">Next</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiMui className='w-10 h-10 text-[#007FFF]' /></span>
                            <p className="text-white text-sm">Material UI
                            </p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiDaisyui className='w-10 h-10 text-[#A21CAF]' /></span>
                            <p className="text-white text-sm">Daisy UI</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiFirebase className='w-10 h-10 text-[#FFCA28]' /></span>
                            <p className="text-white text-sm">Firebase</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><FaGitAlt className='w-10 h-10 text-[#F05032]' /></span>
                            <p className="text-white text-sm">Git</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[15%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><FaGithub className='w-10 h-10 text-[#fff7f7]' /></span>
                            <p className="text-white text-sm">Github</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='title-info text-center'>Backend Skill</h1>
                    <div style={{ marginRight: '10px', paddingTop: '17px', paddingBottom: '17px' }} className="frontend-section flex flex-wrap justify-center gap-3 rounded">
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><FaNodeJs className='h-10 w-10 text-[#339933]' /></span>
                            <p className="text-white text-sm">Node.js</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiExpress className='w-10 h-10' /></span>
                            <p className="text-white text-sm">Express.js</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiMongodb className='w-10 h-10 text-[#47A248]' /></span>
                            <p className="text-white text-sm">Mongodb</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><SiAxios className='w-10 h-10 text-[#5A29E4]' /></span>
                            <p className="text-white text-sm">Axios</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-[20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><Image
                                alt='image'
                                src={jwt}
                                height={40}
                                width={40}
                            ></Image></span>
                            <p className="text-white text-sm">Jwt</p>
                        </div>
                        <div style={{ padding: '5px' }} className="flex flex-col items-center w-[18%] sm:w-[18%] md:w-20%] border border-white bg-[#0c1d22] rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            <span><IoLogoVercel className='w-10 h-10' /></span>
                            <p className="text-white text-sm">Vercel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
