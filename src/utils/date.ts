export const decreaseTimer = (minutes: number, seconds: number) => {
  if (minutes === 0 && seconds <= 1) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  if (seconds <= 1) {
    return {
      minutes: minutes - 1,
      seconds: 59,
    };
  }

  return {
    minutes,
    seconds: seconds - 1,
  };
};
