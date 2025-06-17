"use client";
import './page.css';
import Image from 'next/image';
import imgMan from '../../public/image/photo.png';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-0 w-full h-full ">
      {/* left home */}
      <div className="left-home h-[50vh] w-[100%] md:w-[50%] md:h-[100vh] flex justify-center items-center text-white">
        <div className="homeDetails">
          <div className='line1'>HELLO  I'M</div>
          <div className='line2'>TOHIDUL ISLAM</div>
          <div className='line3'>
            <Typewriter
              words={['Fronted Web Developer', 'MERN Stack Developer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button className='text-black rounded-2xl cursor-pointer'>Download CV</button>
          <div className='social-media flex gap-5'>
            <div style={{ padding: '15px' }} className='bg-[#0c1d22] cursor-pointer hover:scale-112 transition-all duration-300 ease-in-out'><Link href={'https://www.facebook.com/'}><SiFacebook /></Link></div>
            <div style={{ padding: '15px' }} className='bg-[#0c1d22] cursor-pointer hover:scale-112 transition-all duration-300 ease-in-out'><Link href={'https://www.instagram.com/'}><RiInstagramFill /></Link></div>
            <div style={{ padding: '15px' }} className='bg-[#0c1d22] cursor-pointer hover:scale-112 transition-all duration-300 ease-in-out'><Link href={'https://www.linkedin.com/feed/'}><FaLinkedin /></Link></div>
            <div style={{ padding: '15px' }} className='bg-[#0c1d22] cursor-pointer hover:scale-112 transition-all duration-300 ease-in-out'><Link href={'https://github.com/'}><FaGithub /></Link></div>
          </div>
        </div>
      </div>
      {/* right home */}
      <div className="right-home h-[50vh] w-[100%] md:w-[50%] md:h-[100vh] flex items-end md:justify-center md:items-center">
        <Image className='img'
          alt='man image'
          src={imgMan}
        ></Image>
      </div>
    </div >
  );
}
