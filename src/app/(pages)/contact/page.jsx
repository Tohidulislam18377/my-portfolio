"use client";
import React from 'react'
import './contact.css';
import contactImage from '../../../../public/image/contact-image.png'
import Image from 'next/image';

export default function Contact() {
    return (
        <div className='h-full w-full flex flex-col md:flex-row ' id='contact'>
            <div className="left-side flex justify-center items-center h-[50vh] md:h-[90vh] w-full md:w-[50%]">
                <Image className='contact-img w-full'
                    alt='contact-image'
                    src={contactImage}
                ></Image>
            </div>
            <div className="right-side flex justify-center items-center h-[50vh] md:h-[90vh] w-full md:w-[50%]">
                {/* only 50 send per month */}
                {/* <form action="https://formspree.io/f/mjkrdbjz" method='POST'> */}
                {/* only 100 send per month */}
                <form action="https://formcarry.com/s/57kUkDzCnqo" method='POST'>
                    <input type="text" name="name" id="" placeholder='Name' required />
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <textarea name="message" id="" placeholder='Message' required></textarea>
                    <input className='submit cursor-pointer' type="submit" value="Submit" />
                </form>
            </div >
        </div >
    )
}
