const displayProjects = function () {
  let displayDiv = document.createElement("div");
  document.getElementById("body").appendChild(displayDiv);
  for (let i = 0; i < projectArray.length; i++) {
    let projectDiv = document.createElement("div");
    projectDiv.textContent = projectArray[i].getName;
    displayDiv.appendChild(projectDiv);
  }
};

export const displayToDos = function () {
  let displayDiv = document.createElement("div");
  document.getElementById("body").appendChild(displayDiv);
  for (let i = 0; i < toDoArray.length; i++) {
    let toDoDiv = document.createElement("div");
    for (let property in toDoArray[i]) {
      let propertyDiv = document.createElement("div");
      propertyDiv.textContent = toDoArray[i][property];
      toDoDiv.appendChild(propertyDiv);
    }
    displayDiv.appendChild(toDoDiv);
  }
};
