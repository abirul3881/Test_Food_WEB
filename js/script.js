/*Глобальный обработчик событий*/
window.addEventListener("DOMContentLoaded", () => {
  /*Далее пишем код*/

  /*Работа с табами на странице*/
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");
  /*Функция скрытия табов*/
  function hideTabsPage() {
    tabsContent.forEach((elem) => {
      elem.style.display = "none";
    });

    tabs.forEach((elem) => {
      elem.classList.remove("tabheader__item_active");
    });
  }
  /*Функция которая показывает табы*/
  function showTabsPage(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabsPage();
  showTabsPage();

  /*Смена табов и обработчик событий*/
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((elem, num) => {
        if (target == elem) {
          hideTabsPage();
          showTabsPage(num);
        }
      });
    }
  });

  /* =============================================================================== */

  /* Таймер (счётчик)*/

  const dedLain = "2025-05-17"; /*отправная точка таймера*/

  function getTimeRemaining(endtime) {
    let days;
    let hours;
    let minutes;
    let seconds;

    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  /* Функция добавления ноля в часы, минуты, секунды */

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  /* Функция установки часов на страницу */

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    /* Функция обновления таймера */

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      /* Остановка таймера */
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", dedLain);
});
