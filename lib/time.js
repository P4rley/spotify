export function millisToMinuteAndSeconds(millis) {
  const minute = Math.floor(millis / 60000);
  const second = ((millis % 60000) / 1000).toFixed(0);
  return second == 60
    ? minute + 1 + ":00"
    : minute + ":" + (second < 10 ? "00" : "" + second);
}
