import React, { useEffect, useState } from 'react'
import SlideBar from './SlideBar'
import { GOOGLE_API, YOUTUBE_API, YOUTUBE_SEARCH_API } from '../utility/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import store from '../utility/store';
export default function Body() {


    const [video,setVideo]= useState();
   
    const [precssbtnID,setPreCssBtnID]= useState()
    const [cssStyle,setCSSStyle]= useState()
    const toggleStatus = useSelector(store => store.app.toggle);
    const property1= useSelector(store=>store.mode.property)
    const property2= useSelector(store=>store.mode.property2)
    const [scrollcss,setScrollcss] = useState()

    const category=['all','game','music','mixes','live','gaming','wickets','lofi','Bollywood','react','java','instagram','engineering','gaming','wickets','lofi','Bollywood','react',]
    useEffect(()=>{
        getVideo();
    },[])


    async function getVideo(){

        const res= await fetch(YOUTUBE_API);
        const json = await res.json();
        setVideo(json)
        console.log(json);

    }
    


    function scrollthecategoryBACKWORD(){
        
        setScrollcss({
            
            translate:'0px',



        })

        const backwordbtn=document.getElementById('backword-btn')
        backwordbtn.style.display='none' 
        
        const forwordbtn=document.getElementById('forword-btn')
        forwordbtn.style.display='block'
    }

    async function setThisCategory(category,id){
       
        if(precssbtnID!==undefined){
            const pre= document.getElementById(precssbtnID);
            pre.style.backgroundColor='rgb(241 245 249 / var(--tw-bg-opacity))'
            pre.style.color='black'

        }
        const current= document.getElementById(id)
        current.style.backgroundColor='black'
        current.style.color='white'

        setPreCssBtnID(id)
        
        if(category=='all'){
            getVideo();
        }else{
        const res= await fetch(YOUTUBE_SEARCH_API+category+GOOGLE_API);
        const json= await  res.json()
        console.log(json);
        setVideo(json)
        }
    }


    function scrollthecategoryForword(){
        
        setScrollcss({
            
            translate:'-600px',

        })

        const forwordbtn=document.getElementById('forword-btn')
        forwordbtn.style.display='none'
        const backwordbtn=document.getElementById('backword-btn')
        backwordbtn.style.display='block' 
    }

    useEffect(()=>{
      if(toggleStatus==true){
        setCSSStyle({
            marginLeft:'15%'
        })
      }else{
        setCSSStyle({
            marginLeft:'0%'
          
        })
      }
  
    },[toggleStatus])

   

    if (!video) return null;
  return (
   

    <div className='overflow-x-hidden mt-[65px]  transition-[margin-left]  duration-4000  z-3 ' style={cssStyle}>
    <div  className='flex  h-[50px]  justify-between items-center' style={property1}>
            
            <button className='rounded-[50%] w-[50px] p-[10px] z-4 leading-5 hidden text-xl text-slate-00' id='backword-btn'style={property2}
            onClick={()=>scrollthecategoryBACKWORD()}
            >	&#10094;</button>
            
            <div className='flex overflow-hidden flex-nowrap'>
                    {
                        category.map((c,index)=>{
                            return<button key={index}  className='bg-slate-100 rounded-xl px-[20px] h-10 py-1 mx-1  transition-transition duration-1000'
                             style={{...scrollcss,...property2}} onClick={()=>setThisCategory(c,'cat-btn'+index)} id={'cat-btn'+index} >{c}</button>
                        })
                    }
            </div>
      
            <button className='rounded-[50%] w-[50px] p-[10px] leading-5  text-xl text-slate-400' style={property2} id='forword-btn'
                onClick={()=>scrollthecategoryForword()}
            > &#10093;</button>
            

    </div>


        {/* video section: */}
             <div className='flex flex-wrap justify-center items-center'style={property1}>
  

                         {
                            video.items.map((v)=>{
                          
                                return <VideoCard videoInfo={v}/>
                            })
                        }
            </div>
                     
            </div>
       

    
  )
}
