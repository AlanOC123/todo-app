import timeManager from "../../../shared/utils/timeManager";
import { format, parseISO, isBefore } from "date-fns";
import taskCardValues from "./taskValues";

export default class TaskClass {
  constructor(
    title = 'Click Button Above to Edit',
    createdAt = new Date().toISOString(),
    dueDate = timeManager.formatTimeStamp(createdAt),
    priority = taskCardValues.priority.textHeadings[0],
    category = taskCardValues.category.textHeadings[0],
    status = taskCardValues.status.textHeadings[0],
    description = 'Click Button Above to Edit',
  ) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.status = this.isOverdue() ? "Overdue" : status;
    this.id = this.generateTaskID();
  }

  generateTaskID = () => {
    let number = "";
    for (let i = 0; i < 9; i++) {
      number += Math.floor(Math.random() * 9);
    }

    const sanitisedTitle = this.title.replace(/\s+/g, "_");
    return `${this.createdAt.split(" ").join("_")}_${sanitisedTitle}_${number}`;
  };

  updateTitle = (newTitle) => {
    if (!newTitle) {
      return;
    }
    this.title = newTitle;
    this.id = this.generateTaskID();
  };

  updateStatus = (newStatus) => {
    if (this.isOverdue()) {
      this.status = "Overdue";
    }

    if (this.status === "Overdue" && newStatus !== "Complete") {
      return;
    }

    this.status = newStatus;
  };

  parseDate = (dateValue) => {
    return format(dateValue, "dd-MM-yyyy");
  };

  isOverdue = () => {
    return isBefore(
      this.dueDate,
      format(new Date().toISOString(), "dd-MM-yyyy")
    );
  };

  updateDueDate = (newDueDate) => {
    if (!newDueDate) {
      return;
    }
    this.dueDate = this.parseDate(newDueDate);
    this.updateStatus();
  };

  updatePriority = (newPriority) => {
    if (!newPriority) {
      return;
    }
    this.priority = newPriority;
  };

  updateCategory = (newCatergory) => {
    if (!newCatergory) {
      return;
    }
    this.category = newCatergory;
  };

  updateDescription = (newDescription) => {
    if (!newDescription) {
      return;
    }
    this.description = newDescription;
  };
}
