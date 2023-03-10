import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from '../hooks/useMediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'
import {GrClose }from "react-icons/gr"


const Link = ({ page, isTopOfPage ,  selectedPage, setSelectedPage }) => {
    console.log(selectedPage)
    const currentPage = page.toLowerCase();
    console.log("cur => " , currentPage) 
//    const onselectbtn = selectedPage === currentPage  ?  isTopOfPage ? "border-2 border-rose-600 bg-rose-600  rounded-full  px-6 " : "border-2  bg-white text-gray-900    rounded-full  px-6"  : isTopOfPage ?   "hover:text-rose-600 transition  duration-500 hover:scale-x-150 " : "hover:text-gray-900 transition  duration-500 hover:scale-x-150 "  ; 
const onselectbtn = selectedPage === currentPage  ?  "border-2 border-rose-600   rounded-full  px-6 " : "";
    return (
        <AnchorLink className={`${ onselectbtn }  px-4 py-2   `}
            href={`#${currentPage}`}
            onClick={() => setSelectedPage(currentPage)}  >
            {page}
        </AnchorLink>
    )
         
    
}   


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 920px)");
    const navbarBackground = isTopOfPage ? "" : "bg-white";
  
    return (
        <nav className={`${navbarBackground} z-40  w-full fixed top-0 py-4 `}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className={`  font-playfair text-3xl font-bold   `}>portfolio</h4>
                {/* for Destop screemn  */}
                {isAboveSmallScreen ? (
                    <div className='flex gap-8 text-sm font-semibold '>
                        <Link page="Home" isTopOfPage ={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="About" isTopOfPage ={isTopOfPage}   selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skill" isTopOfPage ={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" isTopOfPage ={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Blogs" isTopOfPage ={isTopOfPage}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact"  isTopOfPage ={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                    </div>
                ) : (
                    <button className=' rounded-full  p-2 ' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <AiOutlineMenu size={25} />
                    </button>
                )}




            </div>
            {/* for Moblie device */}
            {!isAboveSmallScreen && isMenuToggled && (<div className='flex flex-col absolute right-0 top-0 w-[50%]  gap-6 p-[5%]    items-end bg-white  rounded-lg shadow-2xl  '>
                <button className=' rounded-full  p-2 ' onClick={() => setIsMenuToggled(!isMenuToggled)}><GrClose size={25}/></button>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Skill" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Blogs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />


            </div>)}



        </nav>
    )
}

export default Navbar