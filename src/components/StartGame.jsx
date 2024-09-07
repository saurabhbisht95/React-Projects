import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dices.png" alt="Dice Game" />
      </ImageContainer>
      <ContentContainer>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </ContentContainer>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    flex-direction: row; /*Ensure column layout by default */
    justify-content: center; /*Center items vertically */
    align-items: center; /* Center items horizontally */
    margin: 0 auto;
    padding: 0 20px; 

  @media (max-width: 992px) {
    text-align: center;
    flex-direction: column;
    height: auto;
    padding: 50px;
  }
  @media (max-width: 768px) {
    text-align: center;
    height: auto;
    padding: 40px;
  }

  @media (max-width: 480px) {
    text-align: center;
    height: auto;
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 100%; /* Make sure the image scales responsively */
    height: auto; /* Maintain aspect ratio */
  }
`;

const ContentContainer = styled.div`

  h1 {
    font-size: 80px;
    margin-bottom: 20px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 45px;
    }
  }
`;