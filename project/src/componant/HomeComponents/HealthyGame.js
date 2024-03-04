import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const MouthContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f0f0f0;
  position: relative;
  margin: 50px auto;
`;

const Tooth = styled(animated.div)`
  width: 20px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
`;

const ToothbrushSelector = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Toothbrush = styled.div`
  width: 30px;
  height: 80px;
  background-color: ${(props) => (props.selected ? '#4caf50' : '#ddd')};
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.selected ? '#4caf50' : '#45a049')};
  }
`;

const GameInstructions = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const ToothCleaningGame = () => {
  const [selectedToothbrush, setSelectedToothbrush] = useState(null);
  const [toothSprings, setToothSprings] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
  }));

  const handleToothbrushSelect = (toothbrush) => {
    setSelectedToothbrush(toothbrush);
    setToothSprings({ opacity: 1 });
  };

  const handleToothClick = () => {
    if (selectedToothbrush) {
      alert(`تم تنظيف السن باستخدام ${selectedToothbrush}`);
      setToothSprings({ opacity: 0 });
    } else {
      alert('الرجاء اختيار فرشاة الأسنان أولاً');
    }
  };

  return (
    <div>
      <MouthContainer onClick={handleToothClick}>
        {[...Array(32)].map((_, index) => (
          <Tooth
            key={index}
            style={{
              opacity: toothSprings.opacity,
              transform: toothSprings.opacity.interpolate((o) => `scale(${o})`),
            }}
          />
        ))}
      </MouthContainer>
      <ToothbrushSelector>
        <Toothbrush
          selected={selectedToothbrush === 'soft'}
          onClick={() => handleToothbrushSelect('soft')}
        >
          🪥
        </Toothbrush>
        <Toothbrush
          selected={selectedToothbrush === 'medium'}
          onClick={() => handleToothbrushSelect('medium')}
        >
          🦷
        </Toothbrush>
        <Toothbrush
          selected={selectedToothbrush === 'hard'}
          onClick={() => handleToothbrushSelect('hard')}
        >
          🦷🦷
        </Toothbrush>
      </ToothbrushSelector>
      <GameInstructions>اختر فرشاة الأسنان وانقر على السن لتنظيفها.</GameInstructions>
    </div>
  );
};

export default ToothCleaningGame;
