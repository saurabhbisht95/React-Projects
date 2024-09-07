import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";
import styled from "styled-components";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay =() =>{
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
    {isGameStarted 
     ? // if isGameStarted value true the it will render the Gameplay page
     <GamePlay/> 
     : // if isGameStarted value iis false it will render StartGame page
     <StartGame toggle={toggleGamePlay}/>
    }
    <Footer><p>Developed by Saurabh</p></Footer>
    </>
  )
}

export default App

const Footer = styled.div`

p{
  margin-top: 4rem;
  text-align: center;
  background-color: black;
  color: white;
  padding: 4px;
}

`;
