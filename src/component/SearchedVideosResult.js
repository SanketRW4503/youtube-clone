import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"
import { GOOGLE_API, YOUTUBE_SEARCH_API } from "../utility/constants";
import {getCount,getVideoUploadTime} from '../utility/utility'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function SearchedVideosResult() {
  
  const [searchresult,setSearchResult]= useState([])

    const params= useParams()
    console.log(params);
    const dm= useSelector(store=>store.mode.property)

  
    useEffect(()=>{

        getSearchedData();
       

    },[params.query])


 

    async function getSearchedData(){
        const res= await fetch(YOUTUBE_SEARCH_API+params.query+GOOGLE_API);
        const json = await res.json()
        setSearchResult(json)
        console.log(json);
    }


    return (
       searchresult?.items!==undefined?
       <div className="overflow-x-hidden mt-[65px] ml-[15%]" style={dm}>
        {
         searchresult.items.map((i)=>{
            return(
                i.id.channelId?<><div key={i.id.channelId} className="flex justify-between items-center m-[10px] p-[10px]">
                        <div className="flex items-center">
                        <img width={150} src={i.snippet.thumbnails.medium.url} className="rounded-[50%]"/>
                        <div className="ml-[100px]">
                            <h1 className="font-bold">{i.snippet.channelTitle}</h1>
                            <span>{i.snippet.description}</span>
                        </div>
                        </div>
                        <button className="px-[10px] py-[6px] bg-slate-100 rounded-xl">Visit Channel</button>
                    </div></>:<Link to={'/watchvideo/'+i.id.videoId}><div key={i.id.channelId}  className="flex m-[10px] p-[10px] cursor-pointer ">
                     <img src={i.snippet.thumbnails.medium.url} width={450}
                      className="rounded-[10px]" />
                    <div className="px-[10px] flex flex-col flex-wrap">
                            <h1 className="font-semibold">{i.snippet.title}</h1>
                            <ul className='flex pr-[10px] text-[12px] '>
                               
                                 <li className="text-gray-600 ">{i.snippet.channelTitle}</li>  

                                <li className='marker:text-gray-700  text-gray-600 list-disc ml-[25px]'>
                                    {getVideoUploadTime(i?.snippet?.publishTime)}
                                </li>
                                
                            </ul>
                            <span className="mt-[35px] text-gray-600 text-[15px]">{i.snippet.description}</span>
                    </div>
                </div></Link>
            )
         })
      }
      </div>:'null'
    //  
  )
}
