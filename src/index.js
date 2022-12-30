import "./style.css";

import { compareAsc, format } from "date-fns";

import { toDoArray, projectArray, project, toDo } from "./ToDoFactory.js";

const projectOne = new project("Testproject");

const ToDoZwei = new toDo("bla", "blub", 12, "important");
console.log(projectOne);
console.log(ToDoZwei);
ToDoZwei.addToList();
console.log(toDoArray);
console.log(projectOne);
console.log(projectArray);

format(new Date(2014, 1, 11), "yyyy-MM-dd");
//= > '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10)
];
//= > [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
