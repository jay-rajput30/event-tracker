export const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const DATES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export const TODO = [];

export const TO_SECONDS = (time) => {
  let arr = time.split(":");
  let seconds = arr[0] * 3600 + arr[1] * 60;
  return seconds;
};

export const formatTime = (seconds) => {
  let hrs = Math.floor(seconds / 3600);
  let temp = hrs * 3600;
  let minutes = Math.floor((seconds - temp) / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  // return `${hrs}:${minutes}`;
  return hrs > 12 ? `${hrs - 12}:${minutes} PM` : `${hrs}:${minutes} AM`;
};
