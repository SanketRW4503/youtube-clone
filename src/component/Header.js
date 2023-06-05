import hamburger from '../../assets/images/hamburger.png'
import youtubelogo from '../../assets/images/youtube-logo.png'
import userimage from '../../assets/images/userimage.png'
import { useDispatch, useSelector } from 'react-redux'
import { hamburgerToggle } from '../utility/appSlice'
import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_SUGGETIONS } from '../utility/constants'
import store from '../utility/store'
import { casheResult } from '../utility/searchSlice'
import { Link } from 'react-router-dom'
import { darkMode } from '../utility/darkmodeSlice'



Header = () => {

  const [searchtext, setSearchText] = useState([])
  const [suggestions, setSuggestion] = useState([])
  const dispatch = useDispatch()



  const searchCashe = useSelector(store => store.search)
  const property1 = useSelector(store => store.mode.property)
  const property2 = useSelector(store => store.mode.property2)

  function setupToggle() {

    dispatch(hamburgerToggle())
  }


  useEffect(() => {


    const myTimeout = setTimeout(() => {
      if (searchCashe[searchtext]) {
        setSuggestion(searchCashe[searchtext])
      } else {
        getSuggestions()

      }

    }, 200);

    return () => {
      clearTimeout(myTimeout)
    }
  }, [searchtext]);


  async function getSuggestions() {

    const res = await fetch(YOUTUBE_SEARCH_SUGGETIONS + searchtext);
    const json = await res.json()

    setSuggestion(json[1])
    dispatch(casheResult({
      [searchtext]: json[1]
    }))
    console.log(suggestions);
  }

  return (
    <nav className='flex justify-between items-center px-[20px] pb-[14] pt-[10px] fixed  top-0 right-0 left-0  bg-white' style={property1}>
      <div className='flex items-center cursor-pointer justify-between' >
        <div className='hover:bg-slate-400 ml-2'
          onClick={() => setupToggle()} width={100}>&#9776;</div>
        <a href='/'> <img width={120} height={100} src={youtubelogo} className='ml-[20px]' /></a>
      </div>
      <div className=' flex overflow-visible' style={property1}>
        <div className='flex relative' style={property1}>
          <input style={property1}
            className='border rounded-l-[20px]  p-[5px] px-[20px] py-[7px] w-[500px] focus:outline-[#9aa7cc] focus:shadow-inner 
             outline-[1px] z-0   '
            placeholder='Search' type='text' value={searchtext} onChange={(e) => setSearchText(e.target.value)} />
          {
            searchtext.length > 0 ? <span onClick={() => setSearchText('')}
              className='text-[24px]   right-[10px] cursor-pointer absolute z-10'>&#215;</span> : null
          }
          {
            suggestions.length > 1 ? <div className='bg-white z-10 w-[500px] fixed py-[15px] rounded-lg shadow-md mt-[56px]  ' style={property1}>
              <ul >
                {suggestions.map((e, index) => {

                  return <Link to={'/search/' + e}><li onClick={() => setSearchText('')}
                    className='py-[10px] px-4 hover:bg-slate-200 ' key={index}>
                    <span className='mr-[5px]'>&#128269; </span>   {e}</li></Link>
                })}
              </ul>
            </div> : null
          }
        </div>
        <Link to={'/search/' + searchtext}> <button onClick={() => setSearchText('')}
          className='bg-[#eeeeee] border rounded-r-[20px] p-[3px]  text-black px-[15px] text-[22px] '
           style={property1}>&#128269;</button>
        </Link>
      </div>
      <div>
        <img width={30} src={userimage} />
      </div>
    </nav>
  )
}

export default Header;
