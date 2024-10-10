'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Media from 'react-responsive'

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  let menuTimeout;

  const handleMouseEnter = () => {
    clearTimeout(menuTimeout);
    setMenuVisible(true);
  }

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setMenuVisible(false);
    }, 200); // Delay of 200ms to prevent flickering
  }

  return (
    <main className="nav-container flex items-center">
      <Media query='(min-width: 1276px)'>
        <section className='m-auto max-w-screen-2xl min-h-min w-[100%] flex items-center justify-between'>
          <section className="flex gap-2.5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-b5d90b4e-1 gmonpS"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg>
          </section>
          <section className="flex items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <Link href="/home" >Home</Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/about-us" >About Us</Link>
            </div>
            <div className="flex items-center justify-center">
              <p className='cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Products
                {isMenuVisible && (
                  <div className='mega-container'>
                    <div className={`mega-menu ${isMenuVisible ? 'fade-in' : 'fade-out'}`}>
                      <div className='m-auto max-w-screen-lg flex items-start justify-center'>
                        <div className='flex items-center w-[100%]'>
                          <div className='flex flex-col gap-5 py-[3rem]'>
                            <div className='flex'>
                              <p>TOOLS</p>
                            </div>
                            <Link href="/product" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Product overview</p>
                                <label className='text-mini text-gray-500'>What is Typeform?</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Form builder</p>
                                <label className='text-mini text-gray-500'>Signups and orders</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Survey maker</p>
                                <label className='text-mini text-gray-500'>Research and feedback</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Quiz maker</p>
                                <label className='text-mini text-gray-500'>Trivia and product match</label>
                              </div>
                            </Link>
                          </div>
                          <div className='custom-divider ml-[7rem]'></div>
                        </div>
                        <div className='flex items-center w-[100%]'>
                          <div className='flex flex-col gap-5 py-[3rem]'>
                            <div className='flex'>
                              <p>NEW</p>
                            </div>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Typeform for Growth</p>
                                <label className='text-mini text-gray-500'>For B2B marketers</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Product updates</p>
                                <label className='text-mini text-gray-500'>Latest feature releases</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>HubSpot for Typeform</p>
                                <label className='text-mini text-gray-500'>Our new partner</label>
                              </div>
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p>Sales & marketing misalignment</p>
                                <label className='text-mini text-gray-500'>Check out our latest ebook</label>
                              </div>
                            </Link>
                          </div>
                          <div className='custom-divider ml-[7rem]'></div>
                        </div>
                        <div className='flex items-center w-[100%] pl-[3rem]'>
                          <div className='flex flex-col gap-5 py-[3rem]'>
                            <div className='flex'>
                              <p>TEMPLATES</p>
                            </div>
                            <Link href="" className='pic-anm'>
                              <Image src={'https://images.ctfassets.net/co0pvta7hzrh/7s4w7jgt3r5jaSwwhvqsJV/4b7f819eb707b4ead8652c803203224d/templates-image.webp'} width={256} height={166} />
                            </Link>
                            <Link href="" className='text-anm'>
                              <div className='flex flex-col'>
                                <p className='text-mini'>Free form, survey, and quiz templates</p>
                                <label className='underline text-black'>Choose one</label>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </p>
              <svg className={`arrow ${isMenuVisible ? 'arrow-up' : ''}`} xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.75 5.33 8.854 9.226a.5.5 0 0 1-.708 0L4.25 5.33"/>
              </svg>
          </div>
            <div className="flex items-center gap-2">
              <Link href="/home" >Teams</Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/home" >Services</Link>
            </div>
          </section>
          <section className="flex items-center gap-4 px-3">
            <Link href=''>Log in</Link>
            <Link href='' className="btn-black">Sign up</Link>
          </section>
        </section>
      </Media>
      <Media query='(min-width: 768px) and (max-width: 1276px)'>
        <section className='m-auto max-w-screen-2xl min-h-min w-[100%] flex items-center justify-between'>
          <section className="flex gap-2.5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-b5d90b4e-1 gmonpS"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg>
          </section>
          
          <section className="flex items-center gap-4 px-3">
            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn-sidebar">
                  <Image src={'data:image/svg+xml,%3Csvg%20id%3D%22open-menu-svg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20class%3D%22sc-e24d66a6-3%20VLDjt%22%3E%3Cpath%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M4%207h16M4%2012.5h16M4%2018h16%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'} width={24} height={24}/>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li><Link href="/home">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/product">Product</Link></li>
                  <li><Link href="/teams">Teams</Link></li>
                  <li><Link href="/services">Services</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </Media>
      <Media query='(max-width: 768px)'>
        <section className='m-auto max-w-screen-2xl min-h-min w-[100%] flex items-center justify-between'>
          <section className="flex gap-2.5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-b5d90b4e-1 gmonpS"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg>
          </section>
          
          <section className="flex items-center gap-4 px-3">
            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn-sidebar">
                  <Image src={'data:image/svg+xml,%3Csvg%20id%3D%22open-menu-svg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20class%3D%22sc-e24d66a6-3%20VLDjt%22%3E%3Cpath%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M4%207h16M4%2012.5h16M4%2018h16%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'} width={24} height={24}/>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li><Link href="/home">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/product">Product</Link></li>
                  <li><Link href="/teams">Teams</Link></li>
                  <li><Link href="/services">Services</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </Media>
    </main>
  )
}

export default Navbar;