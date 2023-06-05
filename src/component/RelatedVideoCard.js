import React from 'react'
import { getVideoUploadTime } from '../utility/utility'
import { Link } from 'react-router-dom'

export default function RelatedVideoCard(props) {
  return (
    <Link to={'/watchvideo/'+props?.video?.id?.videoId}>
        <div className='m-4 flex  cursor-pointer'>
                <img src={props?.video?.snippet?.thumbnails?.medium?.url} width={200} className='rounded-[10px]'/>
                <div className='ml-4'>
                    <h1 className='font-bold text-[14px]'>
                    {props?.video?.snippet?.title.toString().slice(0,70)}
                    </h1>
                    <ul className='flex pr-[10px] text-[12px] '>
                               
                               <li className="text-gray-600 ">{props.video.snippet.channelTitle}</li>  

                              <li className='marker:text-gray-700  text-gray-600 list-disc ml-[25px]'>
                                  {getVideoUploadTime(props.video.snippet?.publishTime)}
                              </li>
                              
                          </ul>
                </div>
        </div>
        </Link>
  )
}
