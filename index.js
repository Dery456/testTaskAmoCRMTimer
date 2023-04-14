const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      const sec = Math.trunc(seconds % 60);
      const min = Math.trunc((seconds / 60) % 60);
      const hour = Math.trunc((seconds / 60 / 60) % 60);

      let hourDoubleZero = hour < 10 ? "0" + hour : hour;
      let minDoubleZero = min < 10 ? "0" + min : min;
      let secDoubleZero = sec < 10 ? "0" + sec : sec;

      if (sec === -1) {
        clearInterval(interval);
      } else {
        timerEl.innerText = `${hourDoubleZero} ${minDoubleZero} ${secDoubleZero}`;
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = parseInt(e.target.value);
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
