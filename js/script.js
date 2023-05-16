/*Глобальный обработчик событий*/
window.addEventListener("DOMContentLoaded", () => {
  /*Далее пишем код*/

  /*Работаем с табами на странице*/
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
  function showTabsPage(i) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabsPage();
  showTabsPage(0);
});
