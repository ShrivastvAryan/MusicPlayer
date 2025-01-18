import { Header} from "./header"
import { HeroSection } from "./HeroSection"
import { MusicFooter } from "./Footer"

import "./lightmode.css";
import"./Home.css";


export const Homepage=()=>{
    return(
        <>
        <Header/>
        <HeroSection/>
        <MusicFooter/>
        </>
    )
}