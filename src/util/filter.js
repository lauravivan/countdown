/* eslint-disable no-case-declarations */
import { getEvents } from "@/data/event.js";

function filterEvents(differenceInMonths, operator = "==") {
  const date = new Date();
  const currentMonth = date.getMonth();
  const filtered = [];
  const events = getEvents();

  events.filter((event) => {
    const eventDate = new Date(event.date);
    const difference = eventDate.getMonth() - currentMonth;

    switch (operator) {
      case "==":
        if (difference == differenceInMonths) {
          filtered.push(event);
        }
        break;
      case ">":
        if (difference > differenceInMonths) {
          filtered.push(event);
        }
        break;
      default:
        break;
    }
  });

  return filtered;
}

export function getFilteredEvents(filter) {
  const f = filter.toLowerCase().split(" ");
  const events = getEvents();

  if (f.includes("this", "month")) {
    return filterEvents(0);
  } else if (f.includes("next", "month")) {
    return filterEvents(1);
  } else if (f.includes("2", "months")) {
    return filterEvents(2);
  } else if (f.includes("3", "months")) {
    return filterEvents(3);
  } else if (f.includes("4", "months")) {
    return filterEvents(4);
  } else if (f.includes("5", "months")) {
    return filterEvents(5);
  } else if (f.includes("6", "months")) {
    return filterEvents(6);
  } else if (f.includes("than", "6", "months")) {
    return filterEvents(6, ">");
  }

  return events;
}
