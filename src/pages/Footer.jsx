import { FaPlay,  FaBackward , FaForward, FaPause} from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import song from "/music/illahi.mp3?url"
import { useEffect, useRef, useState } from "react";

export const MusicFooter=()=>{
    const[isPlaying,setIsPlaying]=useState(false);
    const[currentTime,setCurrentTime]=useState(0);
    const[isDragging,setIsDragging]=useState(false);
    const audioRef=useRef(new Audio(song)); // useRef keep the song intact at its place

    const toggleFile=()=>{
     const audio = audioRef.current;
        if(isPlaying){
            audio.pause();
            setIsPlaying(false);
        }
        else{
            audio.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;

        const onLoadedMetadata = () => {
            setDuration(audio.duration);
          };

        const handleTimeUpdate = () => {
            if(!isDragging)
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [isDragging]);
    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    

    return(
        <>
        <div className="music--player-div">

       <div className="music--player-img">
       </div>

          <div className="img-details">
         <p>Ye jawani hai deewani</p>
         <p>Artist-Arijit,Pritam</p>
        </div>

       <div className="music--play-div">

        <div className="music-play"> 
        <span className="timer">{formatTime(currentTime)}</span>
        <span><FaBackward /></span>
        <span onClick={toggleFile} >{isPlaying ? <FaPause/> : <FaPlay/>}</span>
        <span><FaForward /></span>
        </div>

       <div className="music-bar">
       <span>
       <div className="bar-circle"></div>
       </span>
       </div>

       </div>

    <div className="sound--bar-main">
        <AiFillSound/>
    <div className="sound-bar">
        <div className="bar-circle"></div>
    </div>
    </div>

    </div>
    </>
    )
}   