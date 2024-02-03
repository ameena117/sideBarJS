const showBtn = document.querySelector(".showBtn");
const hideBtn = document.querySelector(".hideBtn");
const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
showBtn.onclick = function () {
    sidebar.classList.remove("hideSide");
    sidebar.classList.add("showSide");
    container.classList.add("hideContainer");
};
hideBtn.onclick = function () {
    container.classList.remove("hideContainer");
    sidebar.classList.remove("showSide");
    sidebar.classList.add("hideSide");
};