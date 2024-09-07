import styled from "styled-components"

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, idx) => (
          <Box
            isSelected={value === selectedNumber}
            key={idx}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 10px; 

  .error {
    font-size: 18px;
    color: #f26060;
    margin-bottom: 10px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
    justify-content: center; 
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    .error {
      font-size: 16px;
    }

    .flex {
      gap: 12px; 
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .error {
      font-size: 14px;
    }

    .flex {
      gap: 8px; 
    }

    p {
      font-size: 16px;
    }
  }
`;

const Box = styled.div`
  height: 60px; 
  width: 60px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px; 
  font-weight: 700;
  border-radius: 5px;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  /* Adjust size and font for smaller screens */
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    font-size: 16px;
  }
`;
