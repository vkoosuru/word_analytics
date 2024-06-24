import { useState } from "react"
import Warning from "./Warning";

export default function Textarea({text,setText}) {
  
  const[warningText,setWarningText]=useState("");
  
  const handleChange= (e)=>{
    let newText=e.target.value;
    
    if(newText.includes("<script>")){
      setWarningText("No script tag allowed!!")
      newText=newText.replace("<script>","");
    }
    else if(newText.includes("@")){
      setWarningText("No @ symbol allowed!!")
      newText=newText.replace("@","");
    }
    else{
      setWarningText("");
    }
    setText(newText);
    // console.log("chnage event .....");
    // console.log(e.target.value);
    // console.log(e.target.value.length);
  }
  return (
    <div  className="textarea">
      <textarea 
    value={text}
    onChange={handleChange}
      placeholder="Enter your text:"
      spellCheck="false">
    </textarea>
    {
      <Warning warningText={warningText} />
    }
    
    </div>
    
  )
}
