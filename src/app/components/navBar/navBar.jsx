"use client";
import { Link } from 'react-scroll';
import './navBar.css'
import { useRef } from 'react';
export default function NavBar() {
    let menu = useRef();
    let mobile = useRef();
    return (
        <nav>
            <h1>Tohidul Dev</h1>
            <ul className='desktopMenu flex items-center justify-center gap-5 text-white text-[20px]'>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} offset={-80} delay={50} duration={500} activeClass='active' to='home'>Home</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='about'>About Me</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='project'>Project</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='contact'>Contact</Link>
            </ul>
            {/* hamburger main */}
            <div className="hamburger flex justify-center items-center gap-[8px] flex-col hidden cursor-pointer" ref={menu} onClick={() => {
                mobile.current.classList.toggle('activeMobile')
                menu.current.classList.toggle('activeHam')
            }}>
                <div className="ham transition-all duration-[0.5s]"></div>
                <div className="ham transition-all duration-[0.5s]"></div>
                <div className="ham transition-all duration-[0.5s]"></div>
            </div>
            <ul className='mobileMenu flex items-center justify-center gap-5 text-white text-[20px]' ref={mobile}>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} offset={-80} delay={50} duration={500} activeClass='active' to='home'>Home</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='about'>About</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='project'>Project</Link>
                <Link className='hover:border-b-2 hover:border-white cursor-pointer hover:text-[#92fe9d]' spy={true} smooth={true} easing={"Quart"} activeClass='active' offset={-80} duration={500} delay={50} to='contact'>Contact</Link>
            </ul>
        </nav >
    )
}
