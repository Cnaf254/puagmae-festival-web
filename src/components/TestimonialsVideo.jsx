import React, { useState, useRef,forwardRef } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import videSrc from '../assets/testimonials/Puagume_Festival_Intro(1080p).mp4';
import videSrc2 from '../assets/testimonials/video_2024-08-20_00-16-25.mp4';
import videSrc3 from '../assets/testimonials/video_2024-08-20_00-18-48.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faVolumeLow } from '@fortawesome/free-solid-svg-icons';


export default function VideoCarouselBasicExample(){

    const [isPlaying,setPlaying]=useState(false);
    const [controls,setControls]=useState(false);
    const [paused,setPause]=useState(false);
    const firstVideo=useRef(null);
    const secondVideo=useRef(null);
    const thirdVideo=useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentPlaying,setCurrentPlaying]=useState("");
    

    // Update currentSlide based on manual actions or effect
     
    function unmute(){
       firstVideo.current.muted=false;
       setCurrentPlaying("first");
       setPause(true);
    }
    function mute(){
        firstVideo.current.muted=true;
        setPause(false);
     }
     function handleSlideChange(){
        firstVideo.current.muted=true;
        secondVideo.current.muted=true;
        thirdVideo.current.muted=true;
        setPause(false);
     }
     
      
  return (
       
      <TECarousel showControls showIndicators crossfade ride="carousel"
       
      onSlide={handleSlideChange} 
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] bg-gradient-to-r from-gray-900 to-gray-800 xl:px-20 md:px-10 p-5 mt-5"  >
        <TECarouselItem
  itemID={1}
  className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
  
>
  <div className="relative flex items-center justify-center"
   onMouseEnter={()=>{
    setTimeout(()=>{
        setControls(true);
    },1000);
    
   }}
  >
    <div class="w-4/5 bg-white flex items-center justify-center  rounded-xl shadow-xl overflow-hidden xl:px-40 xl:pt-10 xl:pb-20 md:px-20 p-5">
    <div className="relative flex items-center justify-center w-full">
    <video 
    ref={firstVideo}
    className="w-full max-h-full" autoPlay loop muted>
      <source src={videSrc} type="video/mp4" />
    </video>
    <div className={`
       ${controls ? "absolute xl:top-5 xl:right-5 top-1 right-1 z-10":"hidden"}
    `}>
    {controls && !paused ? (
        <button
        onClick={()=>{
            firstVideo.current.muted=false;
       setPause(true);
        }}
        className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
            hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
        >

       
            <FontAwesomeIcon icon={faVolumeXmark} 
            
             className="transition-colors duration-300 
             text-2xl md:text-5xl "
            
            />
             </button>
          ) : (
            null
          )}
          {
            controls && paused ?(
                <button
                onClick={()=>{
                    firstVideo.current.muted=true;
                    setPause(false);
                }}
                className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
                    hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
                >
                <FontAwesomeIcon icon={faVolumeLow} size="3x"
               className="transition-colors duration-300 
             text-2xl md:text-5xl"
              />
              </button>
            ):(
                null
            )
          }
</div>
</div>
</div>
  </div>
  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 className="text-xl"></h5>
    <p></p>
  </div>
</TECarouselItem>
<TECarouselItem
  itemID={2}
  className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
>
<div className="relative flex items-center justify-center"
   onMouseEnter={()=>{
    setTimeout(()=>{
        setControls(true);
    },1000);
    
   }}
  >
    <div class="w-4/5 bg-white flex items-center justify-center  rounded-xl shadow-xl overflow-hidden xl:px-40 xl:pt-10 xl:pb-20 md:px-20 p-5">
    <div className="relative flex items-center justify-center w-full">
    <video 
    ref={secondVideo}
    className="w-full max-h-full" autoPlay loop muted>
      <source src={videSrc2} type="video/mp4" />
    </video>
    <div className={`
       ${controls ? "absolute xl:top-5 xl:right-5 top-1 right-1 z-10":"hidden"}
    `}>
    {controls && !paused ? (
        <button
        onClick={()=>{
            secondVideo.current.muted=false;
       setPause(true);
        }}
        className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
            hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
        >

       
            <FontAwesomeIcon icon={faVolumeXmark} 
            
             className="transition-colors duration-300 
             text-2xl md:text-5xl "
            
            />
             </button>
          ) : (
            null
          )}
          {
            controls && paused ?(
                <button
                onClick={()=>{
                    secondVideo.current.muted=true;
                    setPause(false);
                }}
                className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
                    hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
                >
                <FontAwesomeIcon icon={faVolumeLow} size="3x"
               className="transition-colors duration-300 
             text-2xl md:text-5xl"
              />
              </button>
            ):(
                null
            )
          }
</div>
</div>
</div>
  </div>
  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 className="text-xl"></h5>
    <p></p>
  </div>
</TECarouselItem>
<TECarouselItem
  itemID={3}
  className="relative float-left -mr-[100%] hidden w-full opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
>
<div className="relative flex items-center justify-center"
   onMouseEnter={()=>{
    setTimeout(()=>{
        setControls(true);
    },1000);
    
   }}
  >
     <div class="w-4/5 bg-white flex items-center justify-center  rounded-xl shadow-xl overflow-hidden xl:px-40 xl:pt-10 xl:pb-20 md:px-20 p-5">
    <div className="relative flex items-center justify-center w-full">
    <video 
    ref={thirdVideo}
    className="w-full max-h-full" autoPlay loop muted>
      <source src={videSrc3} type="video/mp4" />
    </video>
    <div className={`
       ${controls ? "absolute xl:top-5 xl:right-5 top-1 right-1 z-10":"hidden"}
    `}>
    {controls && !paused ? (
        <button
        onClick={()=>{
            thirdVideo.current.muted=false;
       setPause(true);
        }}
        className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
            hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
        >

       
            <FontAwesomeIcon icon={faVolumeXmark} 
            
             className="transition-colors duration-300 
             text-2xl md:text-5xl "
            
            />
             </button>
          ) : (
            null
          )}
          {
            controls && paused ?(
                <button
                onClick={()=>{
                    thirdVideo.current.muted=true;
                    setPause(false);
                }}
                className={`md:mt-4 transition-transform duration-300 ease-in-out text-yellow-300 focus:outline-none focus:ring focus:ring-blue-400
                    hover:scale-110 hover:text-blue-500 z-11 md:p-4 cursor-pointer active:scale-90`}
                >
                <FontAwesomeIcon icon={faVolumeLow} size="3x"
               className="transition-colors duration-300 
             text-2xl md:text-5xl"
              />
              </button>
            ):(
                null
            )
          }
</div>
</div>
</div>
  </div>
  <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    <h5 className="text-xl"></h5>
    <p></p>
  </div>
</TECarouselItem>
        </div>
      </TECarousel>
    
    
  );
}