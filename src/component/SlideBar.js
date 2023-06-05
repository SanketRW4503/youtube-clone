import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utility/store';
import shortsiicon from '..//../assets/images/shortslogo.png'
import Trendingicon from '..//../assets/images/trending.png'
import settingsicon from '..//../assets/images/settings.png'
import homeicon from '..//../assets/images/homeicon.png'
import darkmodeicon from '..//../assets/images/darkmodeicon.png'
import { Link } from 'react-router-dom';
import { darkMode } from '../utility/darkmodeSlice';

SlideBar = () => {



  const toggleStatus = useSelector(store => store.app.toggle);
  const property1= useSelector(store=>store.mode.property)
  const property3= useSelector(store=>store.mode.property3forimage)
  const dispatch = useDispatch(darkMode())
  const [cssStyle, setCSSStyle] = useState()


  function setDarkMode(){

    dispatch(darkMode('on'))

}
  useEffect(() => {
    if (toggleStatus !== true) {
      setCSSStyle({
        display: 'none'
      })
    } else {
      setCSSStyle({
        position: 'fixed',
        left: '0',
        top: '60px',
        height: '100%',
        width: '15%',
        bottom:'1px',
        backgroundColor:property1.backgroundColor
      })
    }

  }, [toggleStatus,property1])
  return (
    // fixed h-[100%] top-[60px] left-0  w-[15%]
    <>
    <div style={cssStyle} >
      <ul className=' p-[10px] flex flex-col 'style={property1}  >
      <Link to='/'>
        <li 
        className='px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex  '  style={property1}>
        <img src={homeicon} className='w-[20px] mr-4 ' style={property3}  />
        Home</li></Link>

        <Link to='/shorts'>
          <li className='px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex  ' style={property1}>
          <img src={shortsiicon} className='w-[20px] mr-4 ' style={property3}/>

            Shorts</li>
        </Link>
        <li className='px-[10px] w-[200px] py-[10px] cursor-pointer hover:bg-slate-100 rounded-[5px] flex ' style={property1}>
        <img src={Trendingicon} className='w-[20px]  mr-4 'style={property3} />

          Trending</li>
        <li className='px-[10px] w-[200px] py-[10px]  cursor-pointer hover:bg-slate-100 rounded-[5px] flex ' style={property1}>
        <img src={homeicon} className='w-[20px] mr-4 ' style={property3}/>

          Shopping</li>
        <li className='px-[10px] w-[200px] py-[10px]  cursor-pointer hover:bg-slate-100 rounded-[5px] flex  ' style={property1}>
        <img src={settingsicon} className='w-[20px]  mr-4' style={property3}/>

          Settings</li>

          <li onClick={()=>{setDarkMode()}} className='px-[10px] w-[200px] py-[10px]  cursor-pointer  rounded-[5px] flex  ' >
          <img src={darkmodeicon} className='w-[20px]  mr-4' style={property3}/>

            Dark mode</li>

      </ul>
      </div>
    </>
  )
}


export default SlideBar;