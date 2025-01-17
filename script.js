const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBtns = document.querySelectorAll(".solid");
const addItemContainers = document.querySelectorAll(".add-container");
const addItems = document.querySelectorAll(".add-item");
const itemLists = document.querySelectorAll(".drag-item-list");
const backlogList = document.getElementById("backlog-list");
const progressList = document.getElementById("progress-list");
const completeList = document.getElementById("complete-list");
const onHoldList = document.getElementById("on-hold-list");

let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];

function getSavedColumns() {
  if (localStorage.getItem("backlogItems")) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ["Release the course", "Sit back and relax"];
    progressListArray = ["Work on projects", "Listen to music"];
    completeListArray = ["Being cool", "Getting stuff done"];
    onHoldListArray = ["Being uncool"];
  }
}

function updateSavedColumns() {
  localStorage.setItem("backlogItems", JSON.stringify(backlogListArray));
  localStorage.setItem("progressItems", JSON.stringify(progressListArray));
  localStorage.setItem("completeItems", JSON.stringify(completeListArray));
  localStorage.setItem("onHoldItems", JSON.stringify(onHoldListArray));
}

function createItemEl(columnEl, column, item, index) {
  console.log("columnEl:", columnEl);
  console.log("column:", column);
  console.log("item:", item);
  console.log("index:", index);
  // List Item
  const listEl = document.createElement("li");
  listEl.classList.add("drag-item");
}

function updateDOM() {}
