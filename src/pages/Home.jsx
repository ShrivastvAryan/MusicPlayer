import "./Home.css"

export const Homepage=()=>{
    return(
        <>
        <header>
            <div className="nav-div">
                <div>Home</div>
                <div>Playlist</div>
                <div>About</div>
                <div>Light-Mode</div>
            </div>
        </header>

        <div className="main-div">
            <div className="hero-section1">
                <p>Your Music</p>
                <div className="your--music-list">
                    <span>
                        <p className="your-title">Audio No.5464545</p>
                        <p className="your-artist">Artist-unknown</p>
                    </span>
                    <span></span>
                    <span></span>
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
                        <p className="music-artist">Artist- Pritam</p>
                        </span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
            </div>


        </div>

        <div className="music--player-div">
            <span className="">

            </span>
        </div>
        </>
    )
}