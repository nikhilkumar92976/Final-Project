import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

  return (
    <div className='h-screen w-screen bg-black px-[20%] py-[6%] text-white flex'>
    <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] text-white text-3xl mr-2 ri-arrow-left-line"></i>
    <div className='w-full'>
      <h1 className='text-4xl font-bold ml-3'><i class="ri-phone-fill text-[#6556CD] "></i>  Contact US </h1>
      <div className='h-[1px] bg-zinc-500 my-4'></div>
    
      <div className=' flex gap-4  my-6 text-xl ml-[35%]'>
        <a href="https://www.youtube.com/channel/UCF0EyUsA6HOzV5rOrtUSvBQ"><i class="ri-youtube-fill"></i></a>
        <a href="https://www.facebook.com/themoviedb/"><i class="ri-facebook-fill"></i></a>
        <a href="https://www.instagram.com/tbbd/"><i class="ri-instagram-line"></i></a>
        <a href="https://x.com/tbd"><i class="ri-twitter-x-fill"></i></a>
        <a href="https://www.themoviedb.org/tv/253384-dancing-for-the-devil-the-7m-tiktok-cult"><i class="ri-tiktok-fill"></i></a>
        <a href="https://es.linkedin.com/company/themoviedb.org"><i class="ri-linkedin-box-fill"></i></a>
        </div>
        
      <h1 className='text-3xl font-bold mt-3'>Terms and Conditions : </h1>
      <div className='h-[1px] bg-zinc-500 my-4'></div>
      <p  className='mt-4  text-zinc-300'>By using FilmFrenzy®️, you agree to comply with these terms. Content provided on this app is for personal use only and may not be redistributed. We are not liable for any inaccuracies or interruptions in the service. Users must respect copyright laws and refrain from any unlawful activities. We reserve the right to modify or terminate the app and its services at any time without notice. By creating an account, you agree to receive communications from us.</p>
      <i class="ri-team-fill text-9xl text-[#6556CD] ml-[40%]"></i>
    </div>
  </div>
  )
}

export default Contact
