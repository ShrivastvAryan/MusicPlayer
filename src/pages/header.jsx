import { FaSearch } from "react-icons/fa";

export const Header=()=>{
    return(
        <>
        <header>
            <div className="nav-div">
                <input className="search-bar"></input>
                <div><a href="/">Home</a></div>
                <div><a href="/playlist">Playlist</a></div>
                <div><a href="/about">About</a></div>
                <div>Light-Mode</div>
            </div>
        </header>
        </>
    )
}