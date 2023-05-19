import React ,{useState}from "react";


export const App=()=>{

 const[dog,setDog]=useState("")


  return(
  <div>
    <header>犬の画像で癒されよう！！</header>
    <div>犬の画像</div>
    <img src="https://images.dog.ceo/breeds/hound-english/n02089973_2551.jpg"></img>
  </div>
)};

export default App;