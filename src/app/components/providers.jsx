"use client";
import About from "../(pages)/about/page";
import Contact from "../(pages)/contact/page";
import Project from "../(pages)/project/page";
import NavBar from "./navBar/navBar";


export default function Providers({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <About />
            <Project />
            <Contact />
        </div >
    )
}
