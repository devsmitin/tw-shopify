class TWTheme {
  constructor() {
    this.theme_name = "Tailwind Theme";
    this.initEvents();
  }

  initEvents() {
    this.clickHandler();
  }

  clickHandler = () => {
    let that = this;
    let clickTargets = document.querySelectorAll("[data-toggle]");
    clickTargets.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        if (toggle.dataset.toggle.includes("class:")) {
          let className = this.dataset.toggle.replace("class:", "");
          let target = this.dataset.target;
          document.querySelector(target).classList.toggle(className);
        }
        if (toggle.dataset.toggle.includes("quantity:")) {
          let action = this.dataset.toggle.replace("quantity:", "");
          let input = this.parentElement.querySelector("input");
          if (action === "plus") {
            input.value =
              parseInt(input.value) + 1 > 0 ? parseInt(input.value) + 1 : 1;
          } else if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
          }
        }
      });
    });
  };
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("document is ready. Events will work now.");
  new TWTheme();
});
