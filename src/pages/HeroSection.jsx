import { FaCopyright } from "react-icons/fa";

export const HeroSection=()=>{

    return(
        <>
        <div className="main-div">
            <div className="hero-section1">
                <p>Your Music</p>
                <div className="your--music-list">
                    <span>
                        <p className="your-title">Audio No.5464545</p>
                        <p className="your-artist"></p>
                    </span>
                    <span></span>
                    <span></span>
                </div>
                <div className="info">
                    <p>
                        <p><FaCopyright/></p>All copyrights reserved</p>
                    <p>Designed and Developed By Aryan Shrivastava</p>
                </div>
            </div>

            <div className="hero-section2">
                <p className="wel-p">
                    Hey There!
                </p>
                <div className="music-list1">
                    <p>Daily Music</p>
                    <div className="music--list1-div">
                    <span>
                        <div className="music-img"></div>
                        <p>Yeh Jawani Hai Deewani</p>
                        <p className="music-artist">Pritam</p>
                    </span>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}
