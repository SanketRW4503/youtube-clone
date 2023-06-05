import React, { useEffect, useState } from 'react'
import {getCount,getVideoUploadTime} from '../utility/utility'
import imagenotavailable from '../../assets/images/!image-available.jpg'
import { Link } from 'react-router-dom';


export default function VideoCard(props) {

    const [viewcount,setViewCount]=useState('')
    const [uploadtime,setUploadTime]=useState('');
    useEffect(()=>{
       let d= getCount(props.videoInfo?.statistics?.viewCount)
       let u= getVideoUploadTime(props.videoInfo?.snippet?.publishedAt)
       setUploadTime(u)
       setViewCount(d)
    },[])


   
  return (

    <Link to={'/watchvideo/'+props.videoInfo.id}>
    <div className='m-[10px] px-[5px] w-[296px]  cursor-pointer'>
        
       <img alt='thumbail' id='t'className='rounded-xl' 
        src={props.videoInfo?.snippet?.thumbnails?.medium?.url?props.videoInfo?.snippet?.thumbnails?.medium?.url:imagenotavailable}/>
       
    
       <div>
            <div>
                <img width={35}/>
                
            </div>
            <div className='flex flex-col'>
                <h3 className='font-bold inline-block '>{props.videoInfo?.snippet?.title.slice(0,60)}</h3>
                <div className='text-gray-600 '>
                <small>{props.videoInfo?.snippet?.channelTitle}</small>
                <ul className='flex pr-[10px] text-[12px] '>
                    <li>
                    {viewcount}
                    </li>
                    <li className='marker:text-gray-700 list-disc ml-[25px]'>
                        {uploadtime}
                    </li>
                </ul>
                </div>
            </div>
     </div>
    </div>
    </Link>
  )
}
