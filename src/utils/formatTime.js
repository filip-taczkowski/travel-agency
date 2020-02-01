export const formatTime = time => {
  if (!time || typeof(time) != 'number' || time < 0) {
    return null;
  } else {
    const seconds = Math.floor((time%60)).toString();
    const minutes = Math.floor(((time/60)%60)).toString();
    const hours = Math.floor(((time/3600)%60)).toString();

    const zeroPad = num => {
      if (num < 10) {
        return num.padStart(2, '0');
      } else {
        return num;
      }
    };

    return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
  }
};
