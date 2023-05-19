import React ,{useState}from "react";


export const App=()=>{
 
 const[dog,setDog]=useState("https://images.dog.ceo/breeds/hound-english/n02089973_2551.jpg")
 
 const dograndom =async()=>{
  const res =await fetch('https://dog.ceo/api/breeds/image/random')
  const data =await res.json();
  setDog(data.message);
 };

  return(
  <div>
    <header>犬の画像で癒されよう！！</header>
    <div>犬の画像</div>
    <img src={dog} alt="犬の画像"></img>

    <br></br><button onClick ={dograndom}>他の犬を探す！</button>

  </div>

)};

export default App;