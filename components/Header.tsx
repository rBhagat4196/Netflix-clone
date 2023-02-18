import Link from "next/link"
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
// import {SearchIcon} from '@heroicons/react/solid';
function Header(){
  const [isScrolled,setisScrolled] = useState(false);
  useEffect(() =>{
    const handleScroll=()=>{
      if(window.scrollY > 0){
        setisScrolled(true);
      }
      else{
        setisScrolled(false);
      }
    }
    window.addEventListener("scroll" , handleScroll)
    return()=>{
      window.removeEventListener('scroll' , handleScroll)
    }

  },[])
  const {logout} =useAuth()
    return(
     <header className="`${isScrolled && 'bg-red-500'}` }">
         <div className="flex items-center space-x-2 md:space-x-10">
         <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">My List</li>
            <li className="headerLink">New & Popular</li>
          </ul>
        </div>
        <div className="flex item-center space-x-4 text-sm font-light">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:inline" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
</svg>
<p className="hidden lg:inline">Kids</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
</svg>
{/* <Link href='/'> */}
<img onClick={logout} src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded"/>
{/* </Link> */}

        </div>
     </header>
    )
}
export default Header