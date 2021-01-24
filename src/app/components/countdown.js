// Countdown
export const getTimeRemaining = endTime => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

export const initializeClock = (id, endTime) => {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.c-countdown__days');
  const hoursSpan = clock.querySelector('.c-countdown__hours');
  const minutesSpan = clock.querySelector('.c-countdown__minutes');
  const secondsSpan = clock.querySelector('.c-countdown__seconds');

  const updateClock = () => {
    const timeRemaining = getTimeRemaining(endTime);

    daysSpan.innerHTML = timeRemaining.days;
    hoursSpan.innerHTML = ('0' + timeRemaining.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + timeRemaining.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + timeRemaining.seconds).slice(-2);

    if (timeRemaining.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
}

