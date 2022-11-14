document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParrent = document.querySelector(".tabheader__items");

  function hideTabeContent() {
    tabsContent.forEach((tabs) => {
      tabs.style.display = "none";
    });
    tabs.forEach((tabItem) => {
      tabItem.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabeContent();
  showTabContent();

  tabsParrent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((itemTab, i) => {
        if (target == itemTab) {
          hideTabeContent();
          showTabContent(i);
        }
      });
    }
  });
});
