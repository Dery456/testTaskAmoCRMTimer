const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const convertorSeconds = (seconds) => {
  const sec = Math.trunc(seconds % 60);
  const min = Math.trunc((seconds / 60) % 60);
  const hour = Math.trunc((seconds / 60 / 60) % 60);

  const hourDoubleZero = hour < 10 ? "0" + hour : hour;
  const minDoubleZero = min < 10 ? "0" + min : min;
  const secDoubleZero = sec < 10 ? "0" + sec : sec;

  return `${hourDoubleZero}:${minDoubleZero}:${secDoubleZero}`;
};

function timer(seconds) {
  interval = setInterval(() => {
    if (seconds !== -1) {
      timerEl.innerText = convertorSeconds(seconds);
    } else {
      clearInterval(interval);
    }
    seconds--;
  }, 1000);
}

const createTimerAnimator = () => {
  return (seconds) => {
    seconds--;
    timer(seconds);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = parseInt(e.target.value);

  if (e.target.value === "NaN") {
    e.target.value = 0;
  }
  clearInterval(interval);

  timerEl.innerText = convertorSeconds(e.target.value);
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = "";
});
