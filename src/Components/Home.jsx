import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/Axios'
import Horizontilacards from './partials/Horizontilacards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'

function Home() {
    document.title ="FilmFrenzy | HomePage"

    const [wallpaper,setwallpaper] = useState(null);
    const [trending,settrending] = useState([]);
    const [categories, setcategories] = useState("all");

    const getheaderwallpaper = async()=>{
      try{
        const {data} = await axios.get('/trending/all/day');
        let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata);
        
      }catch(err){
        console.log(err);
      }
    }
// console.log(wallpaper);
// console.log(trending);
// console.log(categories);
    const getheadertrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${categories.toLowerCase()}/day`);
        settrending(data.results);
      } catch (err) {
        console.log(err);
      }
    };    
    

    useEffect(()=>{
      getheadertrending();
      !wallpaper && getheaderwallpaper();
    },[categories])
   
    

  return wallpaper && trending ?(
      <div className='w-screen h-screen bg-[#1F1E24] text-white flex overflow-hidden '>
          <Sidenav/>
        <div className='h-full w-[77%]  overflow-y-auto overflow-x-hidden '>
          <Topnav/>
          <Header data={wallpaper}/>

          <div className='flex justfiy-btween my-4 mx-5 '>
                <div  ><h1 className='text-3xl text-zinc-400 font-bold'>Trending</h1></div>
               <div className='ml-[57%]'> <Dropdown title="Filter" options={["TV","Movie","ALL"]} func={(e)=>setcategories(e.target.value)} /></div>
            </div>
          <Horizontilacards data={trending} fnc={setcategories}/>
        </div>
      </div>
  ):<Loader/>
}

export default Home
