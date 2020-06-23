const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const info = document.querySelector('.info');
const deadline = document.querySelector('.deadline');
const timeBlocks = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 6, 6, 9, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

info.textContent = `Service will be available on ${weekday}, ${date} ${
  months[month]
} ${year}, ${hours}:${minutes < 10 ? '0' + minutes : minutes} AM UTC+2`;

const futureTime = futureDate.getTime();

let timeleft = setInterval(function getRemainingTime() {
  const today = new Date().getTime();
  const remaining = futureDate - today;
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const values = [days, hours, minutes, seconds];
  function format(item) {
    return item < 10 ? '0' + item : item;
  }
  timeBlocks.forEach((timeBlock, index) => {
    timeBlock.innerHTML = format(values[index]);
  });
  if (remaining < 0) {
    clearInterval(timeleft);
    timeBlocks.forEach((block) => {
      block.innerHTML = '0';
    });
    info.textContent = `Starting...`;
  }
}, 1000);
