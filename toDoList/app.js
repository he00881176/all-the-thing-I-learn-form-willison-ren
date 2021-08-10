let section = document.querySelector("section");
let add = document.querySelector("form button");

function mergeSort(arr) {
  // this two arrays must be sort array
  function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
    if (i < arr1.length) {
      for (let x = i; x < arr1.length; x++) {
        result.push(arr1[x]);
      }
    } else {
      for (let x = j; x < arr2.length; x++) {
        result.push(arr2[x]);
      }
    }
    return result;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = arr.length / 2;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

add.addEventListener("click", (e) => {
  e.preventDefault();

  //get input valves
  let form = e.target.parentElement;
  console.log(form);
  let toDoText = form.children[0].value;
  let toDoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

  if (toDoText === "") {
    alert("please enter text");
    return;
  }
  //create a todo
  let toDo = document.createElement("div");
  toDo.classList.add("toDo");

  let text = document.createElement("p");
  text.classList.add("text");
  text.innerText = toDoText;

  let time = document.createElement("p");
  time.classList.add("time");
  time.innerText = toDoMonth + "/" + todoDate;

  // create checked button
  let checkButton = document.createElement("button");
  checkButton.classList.add("check");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';

  //checkButton checked event
  checkButton.addEventListener("click", (e) => {
    let toDoItem = e.target.parentElement;
    toDoItem.classList.toggle("done");
  });

  // create trash can
  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

  //trashButton remove todoItem
  trashButton.addEventListener("click", (e) => {
    let toDoItem = e.target.parentElement;

    toDoItem.addEventListener("animationend", (e) => {
      // remove from local storage
      let text = toDoItem.children[0].innerText;
      let myListArray = JSON.parse(localStorage.getItem("list"));
      myListArray.forEach((item, index) => {
        if (item.toDoText == text) {
          myListArray.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myListArray));
        }
      });
      toDoItem.remove();
    });
    toDoItem.style.animation = "scaleDown 0.3s forwards";
  });

  //append all the child into toDo and section
  toDo.appendChild(checkButton);
  toDo.appendChild(text);
  toDo.appendChild(time);
  toDo.appendChild(trashButton);

  toDo.style.animation = "scaleUp 0.3s forwards";

  //set data into object
  let myToDo = {
    toDoText: toDoText,
    toDoMonth: toDoMonth,
    todoDate: todoDate,
  };

  //store data into an array of object
  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myToDo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myToDo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }

  console.log(JSON.parse(localStorage.getItem("list")));

  form.children[0].value = ""; // clear the text input
  section.appendChild(toDo);
});

// merge sort
let sort = document.querySelector("div button");
sort.addEventListener("click", () => {
  let unsortItem = document.querySelectorAll("p.time"); // it's an array,  NodeList(4) [p.time, p.time, p.time, p.time]
  let item = [];
  unsortItem.forEach((time) => {
    item.push(time.innerText);
  });
  let result = mergeSort(item);
  let section = document.querySelector("section");

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < unsortItem.length; j++) {
      if (result[i] == unsortItem[j].innerText) {
        let temp = unsortItem[j].parentElement;
        unsortItem[j].parentElement.remove();
        section.appendChild(temp);
      }
    }
  }
});

// load data
let myList = localStorage.getItem("list");
if (myList !== null) {
  let myListArray = JSON.parse(myList);
  myListArray.forEach((item) => {
    // create a todo
    let todo = document.createElement("div");
    todo.classList.add("toDo");
    let text = document.createElement("p"); //text
    text.classList.add("text");
    text.innerText = item.toDoText;
    let time = document.createElement("p"); // time
    time.classList.add("time");
    time.innerText = item.toDoMonth + "/" + item.todoDate;
    // append all children
    todo.appendChild(text);
    todo.appendChild(time);

    // create checked button
    let checkButton = document.createElement("button");
    checkButton.classList.add("check");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';

    //checkButton checked event
    checkButton.addEventListener("click", (e) => {
      let toDoItem = e.target.parentElement;
      toDoItem.classList.toggle("done");
    });

    // create trash can
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    //trashButton remove todoItem
    trashButton.addEventListener("click", (e) => {
      let toDoItem = e.target.parentElement;

      toDoItem.addEventListener("animationend", (e) => {
        // remove from local storage
        let text = toDoItem.children[0].innerText;
        let myListArray = JSON.parse(localStorage.getItem("list"));
        myListArray.forEach((item, index) => {
          if (item.toDoText == text) {
            myListArray.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(myListArray));
          }
        });
        toDoItem.remove();
      });
      toDoItem.style.animation = "scaleDown 0.3s forwards";
    });
    todo.appendChild(checkButton);
    todo.appendChild(trashButton);

    section.appendChild(todo);
  });
}
