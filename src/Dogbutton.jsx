import React ,{useState} from "react";
import Dogphoto from "./Dogphoto";


export const Dogbutton=()=>{
  const[dog,setDog]=useState("https://images.dog.ceo/breeds/hound-english/n02089973_2551.jpg")
 
  const dograndom =async()=>{
   const res =await fetch('https://dog.ceo/api/breeds/image/random')
   const data =await res.json();
   setDog(data.message);
 };



    return(
        <div>
            <Dogphoto dog={dog}/>
            <br></br><button onClick ={dograndom}>他の犬を探す！</button>

        </div>
    );
};

export default Dogbutton;