import { getColor } from "@/util/color";
import { v4 as uuidv4 } from "uuid";
import { getFormattedDate } from "@/util/date";

export function createEvent() {
  let color = getColor();
  const events = getEvents();

  if (events.length > 0) {
    const lastColor = events[events.length - 1].color;

    while (lastColor == color) {
      color = getColor();
    }
  }

  const id = uuidv4();

  const date = getFormattedDate();

  const event = {
    id: id,
    desc: "Unamed",
    color: color,
    date: date,
  };

  events.push(event);

  setEvents(events);
}

export function updateEvent(id, infoToUpdate, infoValue) {
  const events = getEvents();

  events.filter((event) => {
    if (event.id == id) {
      event[infoToUpdate] = infoValue;
    }
  });

  setEvents(events);
}

export function deleteEvent(id) {
  const events = getEvents();
  let toRemove = -1;

  events.filter((event, index) => {
    if (event.id == id) {
      toRemove = index;
    }
  });

  events.splice(toRemove, 1);

  setEvents(events);
}

export function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

export function setEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}
