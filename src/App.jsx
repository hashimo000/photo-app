import React from "react";
import Header from "./Header"
import Dogbutton from "./Dogbutton";


export const App=()=>{
 
  const mystyle = {
    textAlign: "center",
  };
  

  return(
  <div style={mystyle}>
   
    <Header />
   
    <Dogbutton />
   
  </div>

)};

export default App;