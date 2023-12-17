import random from 'just-random-integer';

export const randVelY = () => {
  return -(random(5, 10) * 60);
};

export const randVelX = () => {
  const posNeg = random() === 0 ? '-' : '';

  return Number(`${posNeg}${random(5, 10) * 60}`);
};
