export let projectArray = [];

let defaultProject = []

export class project {
    constructor(name, toDoArray) {
        this.setName(name);
        this.setToDoArray(toDoArray)
        this.addToProjectList(this);
    }

    setName(value) {
        this.name = value;
    }

    getName() {
        return this.name
    }

    setToDoArray(value) {
        this.toDoArray = [value];
    }

    getToDoList() {
        return this.toDoArray;
    }

    addToProjectList() {
        projectArray.push(this);
    }
}

export let toDoArray = [];

export class toDo {
    constructor(name, description, dueDate, priority, project) {
        this.setName(name);
        this.setDescription(description);
        this.setDueDate(dueDate);
        this.setPriority(priority);
        this.setStatus("notDone");
        this.setProject(project);
        this.addToList();
    }

    setName(value) {
        this.name = value;
    }

    setDescription(value) {
        this.description = value;
    }

    setDueDate(value) {
        this.dueDate = value;
    }

    setPriority(value) {
        this.priority = value;
    }

    setStatus(value) {
        this.status = value;
    }

    setProject(value = defaultProject) {
        this.project = value;
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getPriority() {
        return this.Priority
    }

    getStatus() {
        return this.Priority
    }

    addToList() {
        toDoArray.push(this);
    }

    removeFromList() {
        delete toDoArray[toDoArray.indexOf(this)];
    }

    addToProject() {
        defaultProject.push(this);
    }
}