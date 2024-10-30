import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='h-full w-full sm:w-[23%] border-r-2 border-zinc-500 pt-6 px-8'>
    <h1 className='text-xl sm:text-2xl font-bold mb-7 flex justify-center sm:justify-start'>
        <i className="text-[#6556CD] mr-2 ri-tv-fill "></i>
        <h2 className='hover:text-[#6556CD]'>Film</h2>
        <h2 className='text-[#6556CD] hover:text-white'>Frenzy</h2>
    </h1>
    
    <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-4 font-semibold text-center sm:text-left'>New Feeds</h2>
    <nav className='flex flex-col items-center sm:items-start'>
        <Link to="/trending" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-fire-fill mr-1"></i>Trending
        </Link>
        <Link to="/popular" className='hover:bg-[#6556CD]  w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link to="/movies" className='hover:bg-[#6556CD]  w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link to="/tvShows" className='hover:bg-[#6556CD]  w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-tv-2-fill mr-2"></i>TV Shows
        </Link>
        <Link to="/people" className='hover:bg-[#6556CD]  w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-group-fill mr-2"></i>People
        </Link>
    </nav>
    
    <hr className='h-[1px] mt-1 border-none bg-zinc-400'/>
    
    <nav className='flex flex-col items-center sm:items-start'>
        <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-3 font-semibold text-center sm:text-left'>Website Information</h2>
        <Link to="/about" className='hover:bg-[#6556CD]  w-full hover:text-white mt-3 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-information-2-fill mr-2"></i>About
        </Link>
        <Link to="/contact" className='hover:bg-[#6556CD]  w-full hover:text-white mt-2 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
            <i className="ri-phone-fill mr-2"></i>Contact Us
        </Link>
    </nav>
</div>

  )
}

export default Sidenav
