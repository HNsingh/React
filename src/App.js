
import React from 'react';
import styled from 'styled-components';
import './App.css';

const WtaterTank = styled.div`
  height: 100px;
  width:500px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
`;
const IcreaseButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
const DecreaseButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const WaterLabel = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
   background-color: blue;
`;


const App = () => {
  
  const [waterLabelSize, setWaterLabelSize] = React.useState(0);

  const IncreaseWater = () => {
    let increaseIntervel;
    let label = 20;
    increaseIntervel = setInterval(() => {
      if (label === 100) {
        clearInterval(increaseIntervel);
      }
      setWaterLabelSize(label)
      label= label + 20;
    }, 2000); 
    
  }

  const DecreaseWater = () => {
    let decreaseIntveral;
    let label = 100;
    decreaseIntveral = setInterval(() => {
      label = label - 20;
      if (label === 0) {
        clearInterval(decreaseIntveral);
      }
      setWaterLabelSize(label)
    }, 2000);
      
  }
  
  return (
    <div className="App">
      <IcreaseButton onClick={IncreaseWater}>Increase water label</IcreaseButton>
      <DecreaseButton onClick={DecreaseWater}>decrease water label</DecreaseButton>
      <WtaterTank>
        <WaterLabel style={{ height: waterLabelSize }}>level: {waterLabelSize}</WaterLabel>
     </WtaterTank>
    </div>
  );
}

export default App;
