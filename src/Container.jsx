import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX, INSTAGRAM_MAX } from "./constants";

export default function Container() {
  const [text,setText]=useState("");
    
    const stats={
      numberOfWords:text.split(/\s/).filter((word)=>word!=="").length,
      numberOfCharacters:text.length,
      instagramCharactersLeft:INSTAGRAM_MAX-text.length,
      facebookCharactersLeft:FACEBOOK_MAX-text.length,
    }; 
    return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats stats={stats}/>
      </main>
  )
}
