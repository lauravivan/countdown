export function getStoredEvents() {
  const events = localStorage.getItem("countdown-events");
  return events ? JSON.parse(events) : [];
}

export function storeEvents(events: EventType[]) {
  localStorage.setItem("countdown-events", JSON.stringify(events));
}
