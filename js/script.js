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

  /* Таймер (счётчик)*/

  const dedLain = "2023-05-17"; /*отправная точка таймера*/

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  /* Функция установки часов на страницу */
  
});
