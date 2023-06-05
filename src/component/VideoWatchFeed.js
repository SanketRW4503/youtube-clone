import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchVideoInfo_BYID, GOOGLE_API, YOUTUBE_COMMENT_API, YOUTUBE_REALATED_VIDEO_API } from '../utility/constants';
import userimage from '../../assets/images/userimage.png'
import { useDispatch, useSelector } from 'react-redux';
import { hamburgerToggle } from '../utility/appSlice';
import { getCount } from '../utility/utility';
import { getVideoUploadTime } from '../utility/utility';
import verifiedBadge from '../../assets/images/verified_badge.png'
import CommentBox from './CommentBox';
import RelatedVideoCard from './RelatedVideoCard';
import likeicon from '../../assets/images/like.png'
import store from '../utility/store';

export default function VideoWatchFeed() {

    const [videoInfo, setVideoInfo]= useState()
    const [cssStyle,setCSSStyle]= useState()
    const [showmore,setShowmore]= useState(200)
    const [comments,setComments]= useState()
    const [relatedvideo,setRelatedVideo]= useState()
    const params= useParams();

    const toggleStatus = useSelector(store => store.app.toggle);
    const property1= useSelector(store=>store.mode.property)
    const property2= useSelector(store=>store.mode.property2)
    
    const dispatch= useDispatch()



    useEffect(()=>{
        getVideoInfo()
        getComments()
    },[])

    async function getComments(){
      const res = await fetch(YOUTUBE_COMMENT_API+params.id+GOOGLE_API)
      const json = await res.json()
      console.log(json);
      setComments(json)
    }
    async function getVideoInfo(){

        const res = await fetch(FetchVideoInfo_BYID+params.id+GOOGLE_API)
        const json = await res.json()
        console.log(json.items[0]);
        setVideoInfo(json.items[0])
    }

    async function getRelatedVideos(){
        const res= await fetch(YOUTUBE_REALATED_VIDEO_API+params.id+GOOGLE_API)
        const json= await res.json()
        console.log(json);
        setRelatedVideo(json)
        console.log(relatedvideo);
    } 
    useEffect(()=>{
        if(toggleStatus==true){
          dispatch(hamburgerToggle())
        }
    
      },[]);

      useEffect(()=>{
        getRelatedVideos()
      },[])

  return (
    <div className='flex' style={property1}>
    <div className='px-[80px]  w-[66%] mt-[80px]' style={cssStyle}>
        <iframe width="950" height="550" src={"https://www.youtube.com/embed/"+params.id} 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share"
      allowFullScreen ></iframe>
         <div className='pt-[30px] w-[950px]'>
            <h1 className='font-bold text-xl'>{videoInfo?.snippet?.title}</h1>
            <div className='flex justify-between items-center '>
            <div className='flex p-[10px]'>
                <img src={userimage} width='35px' className='mr-[10px]'/>
                <ul>
                    <li className='font-bold text-[15px] flex items-center'>{videoInfo?.snippet?.channelTitle}
                    {videoInfo?.contentDetails?.licensedContent==true?<img className='ml-1' src={verifiedBadge}width='12px' height='16px' /> :null}</li>
                    <li className='text-[10px] text-slate-600'>10k Subscribers</li>
                </ul>
                <button className='bg-black text-white font-bold rounded-[20px] px-[15px] ml-[25px] text-[15px]'>View Channel</button>
            </div>
            <div className='flex justify-between'  style={cssStyle}>
                <p className='bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2'style={{...cssStyle,...property2}} >
                  <img src={likeicon}  className='w-4'/>
                  <p className='mx-[10px]'>{getCount( videoInfo?.statistics?.likeCount)}</p>
                  <img src={likeicon}  className=' rotate-[-180deg] w-4 '/>
                </p>
                <button className='bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2' style={property2}>Share</button>
                <button className='bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2' style={property2}>Download</button>
                <button className='bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2'style={property2}>&#9988;Clip</button>
                <button className='bg-slate-200 flex rounded-lg px-[10px] py-[10px] mx-2'style={property2}>...</button>

            </div>
            </div>
         </div>
        <div
        className='bg-slate-100 p-3 rounded-lg text-[12px] font-normal w-[950] mb-10 ' style={property2} >
        <p className='font-bold' 
        >{getCount( videoInfo?.statistics?.viewCount)} Views  {getVideoUploadTime( videoInfo?.snippet?.publishedAt)}</p>
       

         <pre className='whitespace-pre-wrap'>
                    {videoInfo?.snippet?.description.toString().slice(0,showmore)}
         </pre>
         {
        showmore==200?<p className='font-bold cursor-pointer'
          onClick={()=>{setShowmore(2000)}}>Show More...</p>:<p className='font-bold cursor-pointer'
          onClick={()=>{setShowmore(200)}}>Show Less...</p>
        }
         </div>


         {/* comment sections */}
         <div>
          <h1>{videoInfo?.statistics?.commentCount} Comments</h1>
          <div>
                  {
                    comments?.items.map((c,index)=>{
                      return <CommentBox  key={index} commentInfo={c?.snippet?.topLevelComment.snippet} /> 
                    })
                  }
          </div>
         
         </div>

         </div>
      <div className='mt-[60px]'>
      {
            relatedvideo?.items.length>0?relatedvideo?.items.map((r)=>{
                return <RelatedVideoCard video={r}/>
            })  :null
          }
      </div>

    </div>
  )
}
