
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <div className="rules">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p> after click on dice if selected number is equal to dice number you
        will get same point as dice{" "}</p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RuleContainer>
  );
};

export default Rules

const RuleContainer = styled.div`
max-width: 700px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .rules {
    margin-top: 24px;
  }
`;
