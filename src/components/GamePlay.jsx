import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState} from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("")
  const [showRules, setShowRules] = useState(false);

  const generataRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const roleDice = () =>{
    if(!selectedNumber){
      setError("!You have not selected any number..");
      return;
    };

    const randomNumber = generataRandomNumber(1,6)
    setCurrentDice((prev)=> randomNumber);


      if(selectedNumber === randomNumber){
        setScore((prev)=> prev+randomNumber);
      }
      else{
        setScore((prev) => prev-2);
      }
      setSelectedNumber(undefined);
  };

  const resetScore = () =>{
     setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
          onClick={() => setShowRules((prev) => !prev)}
        >
          {showRules ? "Hide" : "Show"} Show Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-wrap: wrap; // added for mobile view
  }
  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap; // added for mobile view
  }

  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      align-items: center;
    }
    .btns {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  @media (max-width: 480px) {
    .top_section {
      flex-direction: column;
      align-items: center;
    }
    .btns {
      flex-direction: column;
      align-items: center;
    }
  }
`;
