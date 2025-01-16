import { FaPlay,  FaBackward , FaForward} from "react-icons/fa";

export const MusicFooter=()=>{
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
        <span><FaBackward /></span>
        <span><FaPlay /></span>
        <span><FaForward /></span>
        </div>

       <div className="music-bar">
       <span></span>
       <div className="bar-circle"></div>
       </div>

       </div>

    <div className="sound-bar">
        <div className="bar-circle"></div>
    </div>

    </div>
    </>
    )
}