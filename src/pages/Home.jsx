import { Header} from "./header"
import { HeroSection } from "./HeroSection"
import { MusicFooter } from "./Footer"
import { MdLightMode, MdDarkMode } from "react-icons/md";

import "./Home.css";

import { useState } from "react";


export const Homepage=()=>{

    
    return(
        <>
        <Header/>
        <HeroSection/>
        <MusicFooter/>
        </>
    )
}