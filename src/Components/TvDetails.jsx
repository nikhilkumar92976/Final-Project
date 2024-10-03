import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadtv, removetv } from '../store/actions/TvActions';
import Loader from '../Components/Loader';
import HorizontalCard from '../Components/partials/Horizontilacards';

function TvDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info, error } = useSelector((state) => state.tv);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    }
  }, []);

  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }} className='relative max-w-screen pl-[30vh] pr-[20vh] text-white py-1 overflow-x-hidden overflow-y-auto '>

      {/* part 1 nav bar */}
      <nav className='flex gap-10 mt-10 text-xl'>
        <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] mr-2 ri-arrow-left-line"></i>

        <a href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a>

        <a href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}>
          <i className="ri-color-filter-line"></i>
        </a>

        <a href={`https://www.twitter.com/explor/${info.externalids.twitter_id}`}>
          <i className="ri-twitter-fill"></i>
        </a>
      </nav>

      {/* part 2 poster image and details */}
      <div className='mt-7 flex gap-14'>
        <img className='h-[65vh] w-[44vh] object-cover shadow-2xl mt-4' src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path || info.details.profile_path}`} alt="" />

        <div >
          <h1 className='text-5xl font-bold mb-1'>{info.details.name} <small className='text-xl font-semibold'>({info.details.first_air_date.split("-")[0]})</small></h1>
          <div className='flex gap-2 items-center'>
            <div className=' h-[7vh] w-[7vh] bg-yellow-600 rounded-full flex items-center justify-center text-xl text-white'>{(info.details.vote_average * 10).toFixed()} <sup>%</sup></div>
            <h1 className='text-xl font-bold'>User Score</h1>
            <h1>{info.details.last_air_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.number_of_episodes}min</h1>
          </div>

          <h1 className='text-xl font-semibold italic mt-2'>{info.details.tagline}</h1>
          <h1 className='text-2xl tracking-wider my-2'>Overview</h1>
          <p className='leading-5'>{info.details.overview}</p>

          <h1 className='text-2xl my-2'>Tv Show Translated</h1>
          <p className='text-sm leading-5 mb-6'>{info.translations.join(", ")}</p>

          <Link to={`${pathname}/trailer`} className='bg-[#5627a1e3]  px-4 py-4 rounded-lg text-xl'><i class="ri-play-fill"></i> Play Trailer</Link>
        </div>
      </div>

      {/* part 3 horizintal cards */}
      {info.details.seasons.length > 0 ? (
        <>
          <div className='h-[1px] bg-zinc-500 mt-12'></div>
          <h1 className='text-2xl font-semibold mt-5 mb-7'>Seasons</h1>
          <div className='w-full overflow-x-auto overflow-y-hidden flex gap-5'>
            {info.details.seasons.map((s, i) => (
              <div key={i} className='w-[37vh]'>
                <img
                  className='min-w-[37vh] h-[48vh] shadow-2xl border border-zinc-700 hover:scale-110 duration-100'
                  src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                  alt=""
                />
                <h1 className='text-xl font-semibold mt-1 mb-2'>{s.name}</h1>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>Nothing to Show</h1>
      )}





      {/* part 4 horizintal cards */}
      <div className='h-[1px] bg-zinc-500 mt-12'></div>
      <h1 className='text-2xl font-semibold mt-5 mb-7'>Recommendations & Similar stuff</h1>
      <HorizontalCard data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

      <Outlet />
    </div>
  ) : <Loader />
}

export default TvDetails;