import React, { useEffect, useState } from 'react'
import { Filtertags, getVideoUploadTime } from '../utility/utility';
import likeimage from '..//../assets/images/like.png'

export default function CommentBox(props) {

  function filtercomment(){
    let d= document.getElementById('d'+props?.commentInfo?.publishedAt)
    d.innerHTML+=    Filtertags(props?.commentInfo?.textDisplay)

  }
  useEffect(()=>{
    filtercomment()
  },[])
  return (
    <div className='flex p-3 '>

      <img className='rounded-[50%] w-8 h-[38] mr-4' 
      src={props.commentInfo.authorProfileImageUrl}  />
      <div>
            <div className='flex items-center'>
              <h1 className='font-bold'>{props?.commentInfo?.authorDisplayName} </h1>
              <p className='text-[12px] text-slate-700 ml-1'>{getVideoUploadTime(props?.commentInfo?.updatedAt)}</p>
            </div>
            <p id={'d'+props.commentInfo.publishedAt} className='whitespace-pre-wrap'>{}
        </p>
            <div className='mt-4'>
              <p className='flex items-center'>
              <img src= {likeimage} className='w-4'/>
              
              {props.commentInfo.likeCount>0?<span className='text-[15px] ml-1'>{props.commentInfo.likeCount}</span>:null
              }
               <img src= {likeimage} className='w-4 rotate-[-180deg] ml-6'/>

              </p>
            </div>
      </div>
    </div>
  )
}
