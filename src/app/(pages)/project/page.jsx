"use client"
import React from 'react'
import './project.css'
import img1 from '../../../../public/image/bistro-boss.png'
import img2 from '../../../../public/image/doctor-house.png'
import img3 from '../../../../public/image/sports car.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Project() {
    return (
        <div className='h-full w-full' id='project'>
            <div className='project-section grid sm:grid-cols-1 md:grid-cols-3 gap-x-4 text-white h-[305vh] md:h-[120vh] ml-2'>
                <div>
                    <div className='single-projection-section'>
                        <Image style={{ marginBottom: '15px' }} className='w-[405px] md:w-full'
                            alt='bistro-boss-restaurant'
                            src={img1}
                        ></Image>
                        <div className='single-project grid grid-cols-3 md:grid-cols-4 text-center gap-2'>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>React Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Jwt</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>DaisyUI</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Firebase</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Node Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Express Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Mongodb</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl w-24'>TailwindCss</p>
                        </div>
                        <div className='live-link flex gap-x-3'>
                            <div className='w-[220px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://bright-wisp-076311.netlify.app/'}>Live Link</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/bistro-boss-restaurent-client'}>Github Client</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/bistro-boss-server'}>Github Server</Link>
                            </div>
                        </div>
                        {/* User Side Features */}
                        <div style={{ padding: "10px" }}>
                            <p className='text-2xl font-semibold'>Bistro-Boss Restaurant</p>
                            <p>Bistro-boss is a full-stack restaurant management platform where users can explore the menu, place orders, and manage items. Admins can control product listings and user roles through a secure dashboard.</p>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <p>Features</p>
                            <p><span>Interactive Menu Page</span> : View all food categories and explore items with images, prices, and details</p>
                            <p><span>Order Management</span> :  Easily add items to your order cart. Orders can be reviewed and deleted before checkout.</p>
                            <p><span>Real-Time Cart Updates</span>: Add/remove items instantly without reloading the page</p>
                            <p><span>State Management</span>: React Context API and TanStack Query</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='single-projection-section'>
                        <Image style={{ marginBottom: '15px' }} className='w-[405px] md:w-full'
                            alt='doctor-house'
                            src={img2}
                        ></Image>
                        <div className='single-project grid grid-cols-3 md:grid-cols-4 text-center gap-2'>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Next Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Jwt</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>DaisyUI</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Firebase</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Node Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Express Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Mongodb</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl w-24'>TailwindCss</p>
                        </div>
                        <div className='live-link flex gap-x-3'>
                            <div className='w-[220px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://bright-wisp-076311.netlify.app/'}>Live Link</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/bistro-boss-restaurent-client'}>Github Client</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/bistro-boss-restaurent-client'}>Github Server</Link>
                            </div>
                        </div>
                        {/* User Side Features */}
                        <div style={{ padding: '10px' }}>
                            <p className='text-2xl font-semibold'>Doctor House</p>
                            <p>Bistro-boss is a full-stack restaurant management platform where users can explore the menu, place orders, and manage items. Admins can control product listings and user roles through a secure dashboard.</p>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <p>Features</p>
                            <p><span>Interactive Menu Page</span> : Interactive Menu Page: View all food categories and explore items with images, prices, and details</p>
                            <p><span>Order Management</span> :  Easily add items to your order cart. Orders can be reviewed and deleted before checkout.</p>
                            <p><span>Real-Time Cart Updates</span>: Add/remove items instantly without reloading the page</p>
                            <p><span>State Management</span>: React Context API and TanStack Query</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='single-projection-section'>
                        <Image style={{ marginBottom: '15px' }} className='w-[405px] md:w-full'
                            alt='sports-car'
                            src={img3}
                        ></Image>
                        <div className='single-project grid grid-cols-3 md:grid-cols-4 text-center gap-2'>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>React Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Jwt</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>DaisyUI</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Firebase</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Node Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Express Js</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl'>Mongodb</p>
                            <p style={{ padding: '5px' }} className='border border-white rounded-2xl w-24'>TailwindCss</p>
                        </div>
                        <div className='live-link flex gap-x-3'>
                            <div className='w-[220px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://silly-clafoutis-b5a8ef.netlify.app/'}>Live Link</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/sports-car-client'}>Github Client</Link>
                            </div>
                            <div className='w-[300px]'>
                                <Link className='live-link-code text-black rounded cursor-pointer' href={'https://github.com/Tohidulislam18377/sports-car-server'}>Github Server</Link>
                            </div>
                        </div>
                        {/* User Side Features */}
                        <div style={{ padding: '10px' }}>
                            <p className='text-2xl font-semibold'>Sports Car</p>
                            <p>Sports Car is a feature-rich car booking web application where users can explore, book, and purchase cars, while admins can manage the entire inventory and user roles through a powerful dashboard.</p>
                        </div>
                        <div style={{ padding: '10px' }}>
                            <p>Features</p>
                            <p>1. Browse All Toys in the AllCar section</p>
                            <p>2. View full car details and add to booking </p>
                            <p>3. Manage bookings from MyToys (delete/pay)</p>
                            <p>4. Secure payment integration for confirmed purhases</p>
                            <p>5. Admin Dashboard: Add, update, delete cars</p>
                            <p>6. View all products and manage inventory</p>
                            <p>7. Create/delete admin users with role-based access</p>
                            <p><span>State Management</span>: React Context API and TanStack Query</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
