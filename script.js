const content = document.querySelector(".content");
document.querySelector(".btn").addEventListener("click", () => {
  content.innerHTML = "Jai shree ram..";
});

document.querySelector(".btn").addEventListener("mouseover", () => {
  content.innerHTML = "Jai shree ram..";
});

document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.keyCode);
  content.innerHTML = "Jai shree ram..";
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("I am child..");
});

document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("I am childContainer..");
});

document.querySelector(".container").addEventListener("click", (e) => {
  alert("I am only Container..");
});
